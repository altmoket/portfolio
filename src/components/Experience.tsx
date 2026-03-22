import './Experience.css'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Synchronit',
    period: '2022 - Present',
    description: [
      'Work across backend and frontend using Node.js, TypeScript, React and PostgreSQL',
      'Participated in migration of legacy backend from Python to Common Lisp, simplifying business logic and data handling',
      'Design and maintain FQL, an internal DSL on top of SQL used to centralize query logic',
      'Contributed to internal assistant translating natural language into FQL queries',
      'Built internal tools including dashboards, documentation tools, and browser-based CLI',
      'Contribute to CI workflows using GitHub Actions and assist with AWS deployments'
    ]
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CLASS Limitless',
    period: '2021 - 2022',
    description: [
      'Built REST APIs using Node.js and PostgreSQL',
      'Assisted in database design and query optimization',
      'Worked with Docker-based development environments',
      'Implemented internal tools to improve data access for the team'
    ]
  },
  {
    id: 3,
    title: 'Frontend Developer Intern',
    company: 'Innovasoft Solutions',
    period: '2021',
    description: [
      'Developed UI components using React and TypeScript',
      'Integrated frontend features with backend APIs',
      'Improved internal dashboards for data visualization'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="header-underline"></div>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-dot"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <p className="company-name">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="job-description">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
