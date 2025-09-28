import profile from '../assets/profile.jpg';

export function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="w-full aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center">
            <img src={profile} alt="Raghav Dixit" className="w-24 h-24 rounded-full object-cover shadow-soft" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">About Me</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">A motivated and detail-oriented B.Tech student aiming to leverage proficiency in React.js, HTML, and CSS to build exceptional user interfaces. I am seeking a frontend development opportunity to apply strong problem-solving skills and contribute to innovative web projects.</p>
        </div>
      </div>
    </section>
  );
}



