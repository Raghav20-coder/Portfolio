export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) return value.toString();
  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-6)) {
    return value.toExponential(6).replace(/\+?0*(?=\d)/, '');
  }
  return value.toLocaleString(undefined, { maximumFractionDigits: 12 });
}
