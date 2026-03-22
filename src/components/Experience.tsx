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
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: [
      'Led development of scalable microservices architecture serving 100k+ daily users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored team of 5 junior developers, improving code quality and team productivity'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Innovations Inc',
    period: '2020 - 2022',
    description: [
      'Developed and maintained React-based web applications with 99.9% uptime',
      'Designed RESTful APIs serving mobile and web clients',
      'Optimized database queries improving application performance by 40%'
    ]
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: [
      'Built responsive web applications using React and TypeScript',
      'Collaborated with design team to implement pixel-perfect UI designs',
      'Fixed critical bugs in production, ensuring system stability'
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
