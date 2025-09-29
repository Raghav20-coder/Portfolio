export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
            <div className="space-y-2 text-slate-300">
              <p>📍 Greater Noida, Uttar Pradesh</p>
              <p>🎓 B.Tech Computer Science & Engineering</p>
              <p>🏫 Galgotias University</p>
              <p>📅 Graduation: 2027</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-medium">AICTE Virtual Intern - AI/ML</p>
                <p className="text-sm">Virtual Internship</p>
              </div>
              <div>
                <p className="font-medium">AICTE Virtual Intern - Android Development</p>
                <p className="text-sm">Virtual Internship</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-3">
              <a href="mailto:raghavdixit8413@gmail.com" className="block text-slate-300 hover:text-white transition-colors">
                📧 raghavdixit8413@gmail.com
              </a>
              <a href="tel:+918449000480" className="block text-slate-300 hover:text-white transition-colors">
                📞 +91 8449000480
              </a>
              <a href="https://linkedin.com/in/raghavdixit09/" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white transition-colors">
                💼 LinkedIn Profile
              </a>
              <a href="https://github.com/Raghav20-coder" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white transition-colors">
                💻 GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Raghav Dixit. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="/resume.pdf" className="btn btn-accent">
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}



