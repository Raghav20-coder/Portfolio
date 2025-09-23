import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HistoryItem { input: string; output: string; }

interface HistoryPanelProps { items: HistoryItem[]; onSelect: (expr: string) => void; }

export function HistoryPanel({ items, onSelect }: HistoryPanelProps) {
  const [open, setOpen] = useState(true);
  return (
    <div className="card p-3 md:p-4 h-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-slate-700 dark:text-slate-200">History</h3>
        <button className="btn py-1 px-2 text-xs" onClick={() => setOpen(o => !o)}>{open ? 'Hide' : 'Show'}</button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="history" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-auto pr-1">
            <AnimatePresence initial={false}>
              {items.length === 0 && (<div className="text-sm text-slate-400">No calculations yet</div>)}
              {items.map((h, idx) => (
                <motion.button key={`${h.input}-${idx}`} layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }} onClick={() => onSelect(h.input)} className="w-full text-left p-2 rounded-lg hover:bg-slate-100/70 dark:hover:bg-white/5 border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/40 mb-2">
                  <div className="text-xs text-slate-500 dark:text-slate-400 break-all">{h.input}</div>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100 break-all">= {h.output}</div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
