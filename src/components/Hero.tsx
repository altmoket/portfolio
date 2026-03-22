import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Leonardo</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="hero-description">
            I build exceptional digital experiences using React, Node.js, and TypeScript.
            With 5+ years of experience, I transform ideas into beautiful, functional applications.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">View My Work</button>
            <button className="secondary-button">Download CV</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-box">
            <div className="code-header">~/leonardo</div>
            <div className="code-line">
              <span className="code-keyword">const</span> <span className="code-var">developer</span> = 
              <span className="code-string">"Full Stack"</span>;
            </div>
            <div className="code-line">
              <span className="code-keyword">const</span> <span className="code-var">passion</span> = 
              <span className="code-string">"Clean Code"</span>;
            </div>
            <div className="code-line">
              <span className="code-keyword">const</span> <span className="code-var">goal</span> = 
              <span className="code-string">"Make Impact"</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
