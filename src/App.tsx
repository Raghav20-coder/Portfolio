import { useEffect } from 'react';
import { Calculator } from './components/Calculator';
import { ThemeToggle } from './components/ThemeToggle';
import './index.css';

function App() {
  useEffect(() => { document.title = 'Calculator'; }, []);
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100">Calculator</h1>
        <ThemeToggle />
      </div>
      <div className="max-w-5xl mx-auto">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
