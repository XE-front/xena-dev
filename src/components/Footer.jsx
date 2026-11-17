import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="nav-logo" href="#hero">
            &lt;Xena/&gt;
          </a>
          <p>Building the web, one line of code at a time.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-row">
              <a
                href="https://github.com/XE-front"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/xena-emit/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
              <a href="mailto:xenaemit1231@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Xena Emit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
