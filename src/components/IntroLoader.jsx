import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const IntroLoader = ({ onComplete }) => {
  const loaderRef = useRef(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onCompleteRef.current?.()
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => onCompleteRef.current?.(),
      })

      tl.from('.intro-logo', {
        y: 8,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
        .to(
          '.intro-bar-fill',
          {
            scaleX: 1,
            duration: 0.55,
            ease: 'power2.inOut',
          },
          '-=0.1',
        )
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.55,
          ease: 'power3.inOut',
        })
    }, loaderRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="intro-loader" ref={loaderRef} aria-hidden="true">
      <div className="intro-loader-inner">
        <span className="intro-logo">&lt;Xena/&gt;</span>
        <div className="intro-bar">
          <span className="intro-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default IntroLoader
