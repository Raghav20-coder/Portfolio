type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: 'Scientific Calculator',
    description: 'Designed and developed a fully functional scientific calculator with a responsive UI. Implemented a wide range of mathematical operations, ensuring accurate calculations and an intuitive experience.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Raghav20-coder',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Projects</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Here are some things I've built recently.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card p-5 flex flex-col">
              <div className="h-32 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800/60" />
              <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map(t => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 items-center text-sm">
                {p.github && (
                  <a className="text-blue-600 dark:text-blue-400 hover:underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {p.demo && (
                  <a className="text-blue-600 dark:text-blue-400 hover:underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



