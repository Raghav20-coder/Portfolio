import { useEffect } from 'react';
import './index.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => { document.title = 'Portfolio — Raghav Dixit'; }, []);
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <section className="py-4">
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
            <a href="/resume.pdf" className="btn btn-accent">Download Resume</a>
            <div className="hidden md:flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href="https://linkedin.com/in/raghavdixit09/" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
              <a href="https://github.com/Raghav20-coder" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
              <a href="mailto:raghavdixit8413@gmail.com" className="hover:text-blue-600">Email</a>
            </div>
          </div>
        </section>
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
