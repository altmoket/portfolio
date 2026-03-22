import './Header.css'

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Leo Dev</div>
        <nav className="nav">
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>
            Projects
          </button>
          <button className="nav-link" onClick={() => scrollToSection('experience')}>
            Experience
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
