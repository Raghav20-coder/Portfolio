export function Education() {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Education</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Bachelor of Technology (B.Tech) in Computer Science & Engineering</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Galgotias University, Greater Noida</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Graduation: 2027 | CGPA: 6.79</p>
          </div>
          <div className="card p-4">
            <h4 className="font-semibold text-slate-900 dark:text-white">Senior Secondary Education</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">AJB Inter College</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Score: 75.6%</p>
          </div>
          <div className="card p-4 md:col-span-2">
            <h4 className="font-semibold text-slate-900 dark:text-white">Secondary Education</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Bal Bharti Senior Secondary School</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Score: 67%</p>
          </div>
        </div>
      </div>
    </section>
  );
}


