import { motion } from 'framer-motion';

interface KeyButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'accent';
  spanCols?: number;
}

export function KeyButton({ label, onPress, variant = 'default', spanCols }: KeyButtonProps) {
  return (
    <motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -1 }} onClick={onPress} className={`btn ${variant === 'accent' ? 'btn-accent' : ''} text-base md:text-lg font-medium select-none ${spanCols ? `col-span-${spanCols}` : ''}`}>
      {label}
    </motion.button>
  );
}
