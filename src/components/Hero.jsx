import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const builtWith = ['React', 'Vite', 'ES6+', 'CSS3']
const tagline = 'Building practical, user-focused web applications.'
const taglineWords = tagline.split(' ')

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-top-meta hero-animate">
          <p className="eyebrow">Full-Stack Web Developer</p>
          <p className="hero-availability">
            <span className="status-dot" aria-hidden="true" />
            General Santos, PH · Open to work
          </p>
        </div>

        <h1 className="hero-title">
          <span className="hero-name hero-animate">Xena Emit</span>
          <span className="hero-tagline" aria-label={tagline}>
            {taglineWords.map((word, index) => (
              <span className="hero-word-wrap" key={`${word}-${index}`} aria-hidden="true">
                <span className="hero-word">{word}</span>
                {index < taglineWords.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-description hero-animate">
          I turn ideas into reliable, maintainable systems—working across modern front-end
          interfaces, REST APIs, back-end, and databases.
        </p>

        <div className="hero-actions hero-animate">
          <a className="btn-primary" href="#projects">
            Explore Projects
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
          <a className="btn-secondary" href="#contact">
            Get in Touch
          </a>
        </div>

        <div className="hero-meta-row hero-animate">
          <div className="social-row" aria-label="Social links">
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

          <div className="hero-built-with">
            <span className="hero-built-title">Stack</span>
            <ul className="hero-built-list">
              {builtWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-scroll-wrap hero-animate">
          <a className="hero-scroll-cue" href="#about" aria-label="Scroll to About section">
            <FontAwesomeIcon icon={faChevronDown} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
