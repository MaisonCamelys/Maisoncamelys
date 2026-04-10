import { useEffect, useRef } from 'react'

export function useReveal(selector = '.reveal', threshold = 0.12) {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [selector, threshold])
}
