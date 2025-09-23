import { create, all, type MathJsInstance } from 'mathjs';
const math: MathJsInstance = create(all, { number: 'number' });

// Keep references to original trig for restoring radian mode
const originalTrig = {
  sin: math.sin,
  cos: math.cos,
  tan: math.tan,
};

function preprocessExpression(expr: string): string {
  let e = expr
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/–|−/g, '-')
    .replace(/\^/g, '^');
  // Convert factorial symbol to function
  e = e.replace(/(\d+(?:\.\d+)?)\s*!/g, 'factorial($1)');
  // Convert percentage to division by 100 for numbers and simple groups
  // 50% -> (50/100), (2+3)% -> ((2+3)/100)
  e = e.replace(/(\d+(?:\.\d+)?|\([^()]*\))%/g, '($1/100)');
  // Map common aliases
  e = e.replace(/√/g, 'sqrt');
  return e;
}

export function evaluateExpression(raw: string, options?: { angleMode?: 'deg' | 'rad' }): { result: number | string; error?: string } {
  try {
    const expr = preprocessExpression(raw);
    // Angle mode handling for trig
    if (options?.angleMode === 'deg') {
      const toRad = (x: unknown) => math.multiply(x as any, math.divide(math.pi, 180));
      math.import({
        sin: (x: unknown) => (math.sin as any)(toRad(x)),
        cos: (x: unknown) => (math.cos as any)(toRad(x)),
        tan: (x: unknown) => (math.tan as any)(toRad(x)),
      }, { override: true });
    } else {
      // Restore originals for radian mode
      math.import({
        sin: originalTrig.sin as any,
        cos: originalTrig.cos as any,
        tan: originalTrig.tan as any,
      }, { override: true });
    }
    const value = math.evaluate(expr);
    if (typeof value === 'number') return { result: value };
    if (Array.isArray(value)) return { result: Number(value[0]) };
    return { result: Number(value as unknown as number) };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Invalid expression';
    return { result: 'Error', error: message };
  }
}
