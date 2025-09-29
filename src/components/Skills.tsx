const skills = [
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Language' },
  { name: 'TypeScript', level: 80, category: 'Language' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Python', level: 70, category: 'Language' },
  { name: 'MongoDB', level: 65, category: 'Database' },
  { name: 'Git', level: 85, category: 'Tools' },
];

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Creating beautiful and responsive user interfaces',
    skills: ['React.js', 'HTML/CSS', 'JavaScript', 'TypeScript'],
    icon: '🎨'
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications',
    skills: ['Node.js', 'Express.js', 'Python'],
    icon: '⚙️'
  },
  {
    title: 'Database Management',
    description: 'Designing and managing data storage solutions',
    skills: ['MongoDB', 'MySQL'],
    icon: '🗄️'
  },
  {
    title: 'Tools & Technologies',
    description: 'Development tools and version control',
    skills: ['Git', 'GitHub', 'VS Code'],
    icon: '🛠️'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="group">
              <div className="card p-6 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills with Progress */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Problem Solving',
              'Critical Thinking', 
              'Team Collaboration',
              'Adaptability',
              'Quick Learning',
              'Communication',
              'Time Management',
              'Attention to Detail'
            ].map(skill => (
              <div key={skill} className="card p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl mb-2">💡</div>
                <span className="font-medium text-slate-900 dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


