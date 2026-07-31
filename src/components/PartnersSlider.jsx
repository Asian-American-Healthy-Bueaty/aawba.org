import { useEffect, useRef } from 'react'
import './PartnersSlider.css'

const AUTOPLAY_INTERVAL = 3000

function PartnersSlider({ logos }) {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)

  const slide = (direction) => {
    const track = trackRef.current
    const item = track?.querySelector('.partners-slider__item')
    if (!track || !item) return

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const amount = item.getBoundingClientRect().width + gap
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1
    const atStart = track.scrollLeft <= 0

    if (direction > 0 && atEnd) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else if (direction < 0 && atStart) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: amount * direction, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) slide(1)
    }, AUTOPLAY_INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="partners-slider"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <button
        type="button"
        className="partners-slider__btn"
        aria-label="Previous partners"
        onClick={() => slide(-1)}
      >
        &lsaquo;
      </button>

      <div className="partners-slider__track" ref={trackRef}>
        {logos.map((logo) => (
          <div className="partners-slider__item" key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="partners-slider__btn"
        aria-label="Next partners"
        onClick={() => slide(1)}
      >
        &rsaquo;
      </button>
    </div>
  )
}

export default PartnersSlider
