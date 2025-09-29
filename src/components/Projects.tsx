type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'Scientific Calculator',
    description: 'A fully functional scientific calculator with responsive UI',
    longDescription: 'Designed and developed a comprehensive scientific calculator featuring advanced mathematical operations, trigonometric functions, logarithmic calculations, and memory functions. Built with React.js for optimal performance and user experience.',
    tech: ['React.js', 'TypeScript', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Raghav20-coder',
    demo: 'https://scientific-calculator-demo.netlify.app',
    featured: true,
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Modern admin dashboard for e-commerce management',
    longDescription: 'A comprehensive dashboard application for managing e-commerce operations including inventory, orders, customers, and analytics. Features real-time data updates and interactive charts.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/Raghav20-coder',
    featured: true,
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with location services',
    longDescription: 'A responsive weather application that provides current weather conditions, forecasts, and location-based weather data. Includes beautiful animations and intuitive user interface.',
    tech: ['React.js', 'API Integration', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Raghav20-coder',
    demo: 'https://weather-app-demo.netlify.app',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management with team features',
    longDescription: 'A full-stack task management application with user authentication, team collaboration, project tracking, and deadline management. Built with modern web technologies.',
    tech: ['React.js', 'Express.js', 'MySQL', 'JWT'],
    github: 'https://github.com/Raghav20-coder',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern design',
    longDescription: 'A personal portfolio website showcasing projects, skills, and experience. Built with React and TypeScript, featuring smooth animations and responsive design.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Raghav20-coder',
    demo: 'https://raghavdixit.portfolio.com',
    featured: true,
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with CMS',
    longDescription: 'A complete blogging platform with content management system, user authentication, comment system, and SEO optimization. Built for scalability and performance.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Raghav20-coder',
  },
];

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional web experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" 
                           className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.725-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" 
                           className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-green-100 dark:hover:bg-green-900 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" 
                         className="btn btn-accent">
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" 
                         className="btn">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map(project => (
              <div key={project.title} className="group">
                <div className="card p-6 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-slate-400 text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" 
                         className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" 
                         className="text-green-600 dark:text-green-400 hover:underline text-sm">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



