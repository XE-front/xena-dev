import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faXmark,
  faPlay,
  faStop,
} from '@fortawesome/free-solid-svg-icons'
import pathwayImg from '../assets/Pathway.png'
import rentechImg from '../assets/Rentech.png'
import gigLocalImg from '../assets/GigLocal.png'
import ailImg from '../assets/aiImg.png'
import aviorHotelImg from '../assets/AviorHotel-full.png'

const projects = [
  {
    title: 'Avior Hotel',
    role: 'Full-Stack Developer',
    description:
      'A full-stack hotel booking and hospitality platform for Avior Hotel in General Santos City—featuring room reservations, dining outlets, event inquiries, and content management.',
    tags: [
      'Laravel 13',
      'PHP',
      'MySQL',
      'React',
      'Inertia.js',
      'TypeScript',
      'Tailwind CSS',
    ],
    image: aviorHotelImg,
    hasWalkthrough: true,
    demoUrl: 'https://aviorhotel.com/',
  },
  {
    title: 'PATHWAY: Career Alignment Monitoring System',
    role: 'Contributor',
    description:
      'A web-based recruitment system that helps employers manage job postings, track applicants, and analyze skills demand through an intuitive dashboard.',
    tags: [
      'Laravel',
      'PHP',
      'Vue.js',
      'Inertia.js',
      'MySQL',
      'Tailwind CSS',
      'Echarts.js',
      'Full-Stack Development',
      'Recruitment System',
      'Job Posting Management',
      'Applicant Tracking',
      'Skills Demand Analysis',
    ],
    image: pathwayImg,
    codeUrl: 'https://github.com/j4yre25/pathwayph.com',
    demoUrl: 'https://pathwayph.com/',
  },
  {
    title: 'Rentech: Smart Rental Platform',
    role: 'Contributor',
    description:
      'A modern platform that connects people to rent and offer items easily within their community.',
    tags: [
      'Vue.js',
      'Laravel',
      'Rental System',
      'Tailwind CSS',
      'MySQL',
      'Full-Stack Development',
      'Community Sharing',
      'Item Rental',
      'User-Friendly Interface',
    ],
    image: rentechImg,
    codeUrl: 'https://github.com/j4yre25/rentech',
  },
  {
    title: 'GigLocal',
    role: 'Personal Project',
    description:
      'A hyperlocal platform that connects people with nearby service providers for quick, on-demand tasks and freelance work.',
    tags: [
      'Laravel',
      'Vue.js',
      'PHP',
      'Tailwind CSS',
      'Inertia.js',
      'MySQL',
      'Responsive Design',
      'Hyperlocal Services',
      'On-Demand Platform',
      'Freelance Marketplace',
      'Service Booking',
      'Local Gigs',
    ],
    image: gigLocalImg,
    codeUrl: 'https://github.com/XE-front/giglocal',
  },
  {
    title: 'AI Resume Analyzer',
    role: 'Personal Project',
    description:
      'A full-stack web application that analyzes resumes using AI and provides users with actionable feedback, score trends, and a history dashboard.',
    tags: [
      'Laravel',
      'React',
      'PHP',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Inertia.js',
      'MySQL',
      'Artificial Intelligence',
      'Resume Analysis',
      'Feedback System',
      'Score Trends',
      'Web Application',
    ],
    image: ailImg,
    codeUrl: 'https://github.com/XE-front/ai-resume-analyzer',
  },
]

const WalkthroughMedia = ({ project }) => {
  const [isTouring, setIsTouring] = useState(false)
  const containerRef = useRef(null)
  const imgRef = useRef(null)
  const tweenRef = useRef(null)

  const startTour = () => {
    const container = containerRef.current
    const img = imgRef.current
    if (!container || !img) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const travel = Math.max(0, img.offsetHeight - container.offsetHeight)
    if (travel <= 0) return

    tweenRef.current?.kill()
    setIsTouring(true)
    tweenRef.current = gsap.to(img, {
      y: -travel,
      duration: 6.5,
      ease: 'power1.inOut',
      onComplete: () => {
        tweenRef.current = gsap.to(img, {
          y: 0,
          duration: 0.7,
          delay: 0.4,
          ease: 'power2.out',
          onComplete: () => setIsTouring(false),
        })
      },
    })
  }

  const stopTour = () => {
    const img = imgRef.current
    tweenRef.current?.kill()
    setIsTouring(false)
    if (img) {
      gsap.to(img, {
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
      })
    }
  }

  useEffect(() => {
    return () => tweenRef.current?.kill()
  }, [])

  const handleToggleTour = () => {
    if (isTouring) {
      stopTour()
    } else {
      startTour()
    }
  }

  return (
    <div
      className="project-media project-media-walkthrough"
      ref={containerRef}
      onMouseEnter={startTour}
      onMouseLeave={stopTour}
    >
      <img
        ref={imgRef}
        src={project.image}
        alt={`Full-page screenshot of ${project.title}`}
        className="project-image-walkthrough"
      />
      <button
        type="button"
        className="walkthrough-btn"
        aria-pressed={isTouring}
        onClick={handleToggleTour}
      >
        <FontAwesomeIcon icon={isTouring ? faStop : faPlay} aria-hidden="true" />
        {isTouring ? 'Stop tour' : 'Play tour'}
      </button>
    </div>
  )
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const dialogRef = useRef(null)
  const modalCardRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeProject && !dialog.open) {
      dialog.showModal()
      if (
        modalCardRef.current &&
        window.matchMedia('(prefers-reduced-motion: no-preference)').matches
      ) {
        gsap.fromTo(
          modalCardRef.current,
          { y: 14, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
        )
      }
    } else if (!activeProject && dialog.open) {
      dialog.close()
    }
  }, [activeProject])

  const handleCloseModal = () => {
    setActiveProject(null)
  }

  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      handleCloseModal()
    }
  }

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-index" aria-hidden="true">
            03
          </span>
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const visibleTags = project.tags.slice(0, 5)
            const hiddenCount = project.tags.length - visibleTags.length

            return (
              <article className="project-card" key={project.title}>
                {project.hasWalkthrough ? (
                  <WalkthroughMedia project={project} />
                ) : (
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="project-body">
                  <div className="project-heading-row">
                    <h3>{project.title}</h3>
                    {project.role && <span className="project-label">{project.role}</span>}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {visibleTags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    {hiddenCount > 0 && (
                      <span className="project-tag-more">+{hiddenCount} more</span>
                    )}
                  </div>
                  <div className="project-links">
                    <button
                      type="button"
                      className="btn-secondary btn-sm"
                      onClick={() => setActiveProject(project)}
                    >
                      View details
                    </button>
                    {project.codeUrl && (
                      <a
                        className="link-button"
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View source code for ${project.title}`}
                      >
                        Code
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        className="link-button"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        Demo
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={handleCloseModal}
        onClick={handleBackdropClick}
      >
        {activeProject && (
          <div className="project-modal-card" ref={modalCardRef}>
            <button
              className="project-modal-close"
              type="button"
              onClick={handleCloseModal}
              aria-label="Close project details"
            >
              <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
            </button>
            <div className="project-modal-media">
              <img
                src={activeProject.image}
                alt={`Screenshot of ${activeProject.title}`}
                className={activeProject.hasWalkthrough ? 'project-modal-img-top' : ''}
              />
            </div>
            <div className="project-modal-body">
              <div className="project-heading-row">
                <h3 id="project-dialog-title">{activeProject.title}</h3>
                {activeProject.role && (
                  <span className="project-label">{activeProject.role}</span>
                )}
              </div>
              <p>{activeProject.description}</p>
              <div className="project-modal-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {activeProject.codeUrl && (
                  <a
                    className="link-button"
                    href={activeProject.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code for ${activeProject.title}`}
                  >
                    Code
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  </a>
                )}
                {activeProject.demoUrl && (
                  <a
                    className="link-button"
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo for ${activeProject.title}`}
                  >
                    Demo
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}

export default Projects
