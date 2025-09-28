import profile from '../assets/profile.jpg';

export function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-10 md:pb-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2">Raghav Dixit</h1>
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold mt-2">A motivated and detail-oriented B.Tech student</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Greater Noida, Uttar Pradesh</p>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">A motivated and detail-oriented B.Tech student aiming to leverage proficiency in React.js, HTML, and CSS to build exceptional user interfaces.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="btn btn-accent">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
        </div>
        <div className="h-56 md:h-72 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-100/70 dark:bg-slate-800/50 flex items-center justify-center">
          <img src={profile} alt="Raghav Dixit" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-soft" />
        </div>
      </div>
    </section>
  );
}



