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
              I'm a passionate developer with a love for creating clean, efficient code and beautiful user interfaces. 
              With over 5 years of experience in web development, I've worked with startups and established companies 
              to deliver high-quality digital solutions.
            </p>
            <p>
              I specialize in building scalable applications with modern technologies like React, TypeScript, and Node.js. 
              My approach combines technical excellence with a deep understanding of user experience and business goals.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, 
              or exploring new technologies to stay ahead in this fast-paced industry.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Clients</div>
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
