import { useCallback, useMemo, useState } from 'react';
import { evaluateExpression } from '../utils/eval';
import { Display } from './Display';
import { KeyButton } from './KeyButton';
import { HistoryPanel } from './HistoryPanel';
import type { HistoryItem } from './HistoryPanel';

export function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<number | string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [memory, setMemory] = useState<number>(0);
  const [angleMode, setAngleMode] = useState<'deg' | 'rad'>('deg');

  const append = useCallback((value: string) => { setExpression(prev => prev + value); }, []);
  const clear = useCallback(() => { setExpression(''); setResult(null); }, []);
  const backspace = useCallback(() => { setExpression(prev => prev.slice(0, -1)); }, []);
  const evaluate = useCallback(() => {
    if (!expression.trim()) return;
    const { result: r } = evaluateExpression(expression, { angleMode });
    setResult(r);
    setHistory(prev => [{ input: expression, output: String(r) }, ...prev].slice(0, 20));
  }, [expression, angleMode]);

  const inputPi = useCallback(() => append('pi'), [append]);
  const inputRand = useCallback(() => setExpression(prev => prev + String(Math.random())), []);
  const percent = useCallback(() => append('%'), [append]);

  const memAdd = useCallback(() => {
    const val = typeof result === 'number' ? result : Number(result);
    if (!Number.isNaN(val)) setMemory(m => m + val);
  }, [result]);
  const memSub = useCallback(() => {
    const val = typeof result === 'number' ? result : Number(result);
    if (!Number.isNaN(val)) setMemory(m => m - val);
  }, [result]);
  const memRecall = useCallback(() => setExpression(prev => prev + String(memory)), [memory]);
  const memClear = useCallback(() => setMemory(0), []);

  const keys = useMemo(() => ([
    { label: 'C', onPress: clear },
    { label: '⌫', onPress: backspace },
    { label: '(', onPress: () => append('(') },
    { label: ')', onPress: () => append(')') },
    { label: '7', onPress: () => append('7') },
    { label: '8', onPress: () => append('8') },
    { label: '9', onPress: () => append('9') },
    { label: '÷', onPress: () => append('÷') },
    { label: '4', onPress: () => append('4') },
    { label: '5', onPress: () => append('5') },
    { label: '6', onPress: () => append('6') },
    { label: '×', onPress: () => append('×') },
    { label: '1', onPress: () => append('1') },
    { label: '2', onPress: () => append('2') },
    { label: '3', onPress: () => append('3') },
    { label: '−', onPress: () => append('−') },
    { label: '0', onPress: () => append('0') },
    { label: '.', onPress: () => append('.') },
    { label: '^', onPress: () => append('^') },
    { label: '+', onPress: () => append('+') },
    { label: '%', onPress: percent },
    { label: '=', onPress: () => evaluate(), variant: 'accent', spanCols: 4 },
  ]), [append, backspace, clear, evaluate, percent]);

  const sciKeys = useMemo(() => ([
    { label: 'sin', onPress: () => append('sin(') },
    { label: 'cos', onPress: () => append('cos(') },
    { label: 'tan', onPress: () => append('tan(') },
    { label: 'log', onPress: () => append('log(') },
    { label: 'ln', onPress: () => append('ln(') },
    { label: '√', onPress: () => append('sqrt(') },
    { label: 'x²', onPress: () => append('^2') },
    { label: 'x^y', onPress: () => append('^') },
    { label: 'n!', onPress: () => append('!') },
    { label: 'π', onPress: inputPi },
    { label: 'e', onPress: () => append('e') },
    { label: 'Rand', onPress: inputRand },
  ]), [append, inputPi, inputRand]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 md:gap-6 h-full">
      <div className="flex flex-col gap-4 md:gap-6">
        <Display expression={expression} result={result} />
        <div className="card p-3 md:p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <button className={`btn px-2 py-1 text-xs ${angleMode === 'deg' ? 'btn-accent' : ''}`} onClick={() => setAngleMode('deg')}>DEG</button>
              <button className={`btn px-2 py-1 text-xs ${angleMode === 'rad' ? 'btn-accent' : ''}`} onClick={() => setAngleMode('rad')}>RAD</button>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn px-2 py-1 text-xs" onClick={memAdd}>M+</button>
              <button className="btn px-2 py-1 text-xs" onClick={memSub}>M-</button>
              <button className="btn px-2 py-1 text-xs" onClick={memRecall}>MR</button>
              <button className="btn px-2 py-1 text-xs" onClick={memClear}>MC</button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2">
            {sciKeys.map((k) => (<KeyButton key={k.label} label={k.label} onPress={k.onPress} />))}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {keys.map((k) => (<KeyButton key={k.label} label={k.label} onPress={k.onPress} variant={k.variant as any} spanCols={k.spanCols as any} />))}
          </div>
        </div>
      </div>
      <HistoryPanel items={history} onSelect={(expr) => setExpression(expr)} />
    </div>
  );
}
