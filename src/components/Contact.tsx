import { useState } from 'react'
import './Contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thanks for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="header-underline"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to get in touch with me!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <p className="method-label">Email</p>
                  <a href="mailto:leandro.nunez1457@email.com">leandro.nunez1457@email.com</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">💼</span>
                <div>
                  <p className="method-label">LinkedIn</p>
                  <a href="https://linkedin.com/in/lnunez1457" target="_blank" rel="noopener noreferrer">linkedin.com/in/lnunez1457</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">🐙</span>
                <div>
                  <p className="method-label">GitHub</p>
                  <a href="https://github.com/altmoket" target="_blank" rel="noopener noreferrer">github.com/altmoket</a>
                </div>
              </div>
              <div className="contact-method">
                <span className="icon">📍</span>
                <div>
                  <p className="method-label">Location</p>
                  <p>São Paulo, Brazil</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={6}
              />
            </div>
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
