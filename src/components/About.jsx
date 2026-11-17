import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faSchool, faCode, faBullseye } from '@fortawesome/free-solid-svg-icons'

const facts = [
  {
    icon: faGraduationCap,
    label: 'Degree',
    value: 'Bachelor of Science in Computer Science',
  },
  {
    icon: faSchool,
    label: 'Graduated From',
    value: 'STI College – General Santos',
  },
  {
    icon: faCode,
    label: 'Experience',
    value: '2+ years building web apps',
  },
  {
    icon: faBullseye,
    label: 'Focus',
    value: 'Full-stack web applications',
  },
]

const principles = [
  {
    index: '01',
    title: 'Clean Code',
    description:
      'Writing maintainable, readable code that follows clear conventions and scales with the product.',
  },
  {
    index: '02',
    title: 'Fast Performance',
    description:
      'Keeping interfaces responsive and assets lean so every interaction feels immediate.',
  },
  {
    index: '03',
    title: 'Team Player',
    description:
      'Collaborating openly with designers and developers to ship dependable software together.',
  },
]

const About = () => {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-index" aria-hidden="true">
            01
          </span>
          <div>
            <p className="eyebrow">Background</p>
            <h2 className="section-title">About Me</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a Computer Science graduate and full-stack web developer who builds
              end-to-end web applications—from database schemas and Laravel APIs to responsive
              React and Vue interfaces.
            </p>
            <p>
              I enjoy turning complex real-world workflows—such as hotel booking platforms,
              recruitment dashboards, and AI-assisted tools—into clean, dependable software that
              feels effortless to use.
            </p>
            <p>
              My core toolkit centers on Laravel, PHP, MySQL, React, Vue.js, Inertia.js,
              TypeScript, and Tailwind CSS, with a continuous focus on accessibility, performance,
              and maintainable architecture.
            </p>
          </div>

          <aside className="about-highlights" aria-label="Quick facts">
            <span className="facts-rule" aria-hidden="true" />
            <h3 className="facts-heading">Quick Facts</h3>
            <dl className="facts-list">
              {facts.map((fact) => (
                <div className="facts-item" key={fact.label}>
                  <span className="about-meta-icon" aria-hidden="true">
                    <FontAwesomeIcon icon={fact.icon} />
                  </span>
                  <div className="about-meta-content">
                    <dt className="about-meta-label">{fact.label}</dt>
                    <dd className="about-meta-value">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="about-pillars">
          {principles.map((item) => (
            <div className="about-pillar" key={item.title}>
              <span className="pillar-index" aria-hidden="true">
                {item.index}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
