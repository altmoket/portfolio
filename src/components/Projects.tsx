import './Projects.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    image: '🛍️',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.',
    image: '✅',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool integrated with GPT API for creating marketing copy, blog posts, and more.',
    image: '🤖',
    tags: ['Next.js', 'OpenAI API', 'TypeScript', 'Vercel'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, custom reports, and user behavior tracking.',
    image: '📊',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Social Network',
    description: 'Feature-rich social network platform with messaging, notifications, and community feeds.',
    image: '👥',
    tags: ['React Native', 'Node.js', 'WebSocket', 'GraphQL'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Video Streaming Service',
    description: 'Streaming platform with adaptive bitrate, live streaming, and content recommendation system.',
    image: '▶️',
    tags: ['React', 'AWS', 'FFmpeg', 'Node.js'],
    link: '#',
    github: '#'
  }
]

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="header-underline"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.link} className="project-link">Live Demo</a>
                <a href={project.github} className="project-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
