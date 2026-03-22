import './Skills.css'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['TypeScript', 'JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Common Lisp']
  },
  {
    name: 'Tooling & Infrastructure',
    skills: ['GitHub Actions', 'Docker', 'AWS (basic)', 'CI/CD', 'REST APIs']
  },
  {
    name: 'Focus Areas',
    skills: ['Backend Development', 'Internal Tooling', 'Query Systems', 'Developer Workflows', 'Data Abstraction']
  },
  {
    name: 'Languages',
    skills: ['Spanish (Native)', 'English (Professional)', 'Portuguese (Basic)']
  }
]

export function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <div className="header-underline"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
