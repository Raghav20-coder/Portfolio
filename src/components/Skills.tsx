const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Programming Languages', items: ['C', 'Python', 'JavaScript'] },
  { title: 'Web Technologies', items: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { title: 'Tools', items: ['Git', 'GitHub'] },
  { title: 'Soft Skills', items: ['Strong Problem-Solving', 'Critical Thinking', 'Adaptability', 'Quick Learner'] },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Skills</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {skillGroups.map(group => (
            <div key={group.title} className="card p-4">
              <h4 className="font-semibold text-slate-900 dark:text-white">{group.title}</h4>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {group.items.map(item => (
                  <span key={item} className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


