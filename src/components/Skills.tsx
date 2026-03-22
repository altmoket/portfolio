import './Skills.css'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Next.js', 'HTML/CSS']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs', 'Microservices']
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'SQL', 'Prisma ORM']
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'AWS', 'Vercel', 'GitHub Actions', 'Jenkins']
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
