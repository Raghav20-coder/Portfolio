import { formatNumber } from '../utils/format';

interface DisplayProps { expression: string; result: number | string | null; }

export function Display({ expression, result }: DisplayProps) {
  const formatted = typeof result === 'number' ? formatNumber(result) : result;
  return (
    <div className="card p-4 md:p-6 min-h-[110px] flex flex-col items-end justify-center">
      <div className="w-full text-right text-slate-500 dark:text-slate-400 text-sm md:text-base break-all leading-tight">{expression || '0'}</div>
      <div className="w-full text-right font-semibold text-2xl md:text-4xl text-slate-900 dark:text-white break-all leading-tight mt-2">{formatted ?? ''}</div>
    </div>
  );
}
