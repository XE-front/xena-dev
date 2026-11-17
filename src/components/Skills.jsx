const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3 / Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'REST APIs', 'Database Design', 'MySQL'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

const additionalSkills = [
  'Responsive Design',
  'API Integration',
  'CRUD Operations',
  'Basic Authentication (Login/Register)',
  'Debugging & Problem Solving',
]

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-index" aria-hidden="true">
            02
          </span>
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">Skills &amp; Technologies</h2>
          </div>
        </div>

        <div className="skills-columns">
          {skillGroups.map((group) => (
            <div className="skill-column" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Core Practices</h3>
          <div className="chip-row">
            {additionalSkills.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
