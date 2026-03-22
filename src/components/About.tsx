import './About.css'

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="header-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Full Stack Developer from São Paulo, Brazil, with a passion for building clean, efficient backend systems.
              I specialize in crafting internal tools and data query systems that simplify business logic and improve team workflows.
            </p>
            <p>
              My experience spans building REST APIs with Node.js, designing PostgreSQL databases, developing React frontends, and working with modern infrastructure like Docker and AWS.
              I've worked across early-stage environments, helping teams scale their data handling and developer productivity.
            </p>
            <p>
              I'm particularly interested in query abstraction, domain-specific languages, and building tools that make developer workflows seamless.
              Currently at Synchronit, focused on backend development and internal tooling.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Dev</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat">
                <div className="stat-number">🇧🇷</div>
                <div className="stat-label">São Paulo</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <div className="icon">👨‍💻</div>
                <p>Leonardo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
