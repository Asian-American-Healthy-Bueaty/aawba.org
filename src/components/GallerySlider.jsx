import { useState } from 'react'
import './GallerySlider.css'

function GallerySlider({ images, altPrefix }) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)
  const current = images[index]

  return (
    <div className="gallery-slider">
      <div className="gallery-slider__viewport">
        {current.src ? (
          <img
            className="gallery-slider__image"
            src={current.src}
            alt={current.label ? `${altPrefix} — ${current.label}` : altPrefix}
          />
        ) : (
          <div className="gallery-slider__image media-placeholder">{current.label}</div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-slider__nav gallery-slider__nav--prev"
              aria-label="Previous photo"
              onClick={goPrev}
            >
              &lsaquo;
            </button>
            <button
              type="button"
              className="gallery-slider__nav gallery-slider__nav--next"
              aria-label="Next photo"
              onClick={goNext}
            >
              &rsaquo;
            </button>
            <span className="gallery-slider__counter">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="gallery-slider__dots">
          {images.map((image, i) => (
            <button
              key={i}
              type="button"
              className={'gallery-slider__dot' + (i === index ? ' is-active' : '')}
              aria-label={`Go to photo ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GallerySlider
