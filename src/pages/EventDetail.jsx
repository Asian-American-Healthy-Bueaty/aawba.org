import { Link, useParams } from 'react-router-dom'
import { UPCOMING_EVENTS, PAST_EVENTS } from '../data/events'
import GallerySlider from '../components/GallerySlider.jsx'
import './EventDetail.css'

function EventDetail() {
  const { slug } = useParams()
  const event = [...UPCOMING_EVENTS, ...PAST_EVENTS].find((item) => item.slug === slug)

  if (!event) {
    return (
      <section className="event-detail-hero">
        <div className="event-detail-hero__content">
          <Link to="/activities" className="event-detail__back">
            ← Back to Activities
          </Link>
          <h1>Event not found</h1>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="event-detail-hero">
        <div className="event-detail-hero__content">
          <div className="event-detail-hero__top">
            <Link to="/activities" className="event-detail__back">
              ← Back to Activities
            </Link>
            {event.featured && <span className="event-detail__badge">Featured</span>}
          </div>
          <h1>{event.title}</h1>
          <p className="event-detail-hero__meta">
            {event.dateLabel} · {event.time} · {event.location}
          </p>
        </div>
      </section>

      <section className="event-detail">
        <div className="event-detail__inner">
          {event.poster.src ? (
            <img
              className="event-detail__poster"
              src={event.poster.src}
              alt={event.title}
            />
          ) : (
            <div className="event-detail__poster media-placeholder">{event.poster.label}</div>
          )}

          <div className="event-detail__body">
            <div className="event-detail__main">
              <h2>About This Event</h2>
              {event.description.map((section, sectionIndex) => (
                <div className="event-detail__section" key={sectionIndex}>
                  {section.heading && <h3>{section.heading}</h3>}
                  {section.blocks.map((block, blockIndex) =>
                    block.type === 'list' ? (
                      <ul key={blockIndex}>
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={blockIndex}>{block.text}</p>
                    ),
                  )}
                </div>
              ))}

              <h2>Gallery</h2>
              <GallerySlider images={event.gallery} altPrefix={event.title} />
            </div>

            <aside className="event-detail__sidebar">
              <h3>{event.title}</h3>

              <div className="event-detail__field">
                <p className="event-detail__field-label">Date</p>
                <p className="event-detail__field-value">{event.dateLabel}</p>
              </div>
              <div className="event-detail__field">
                <p className="event-detail__field-label">Time</p>
                <p className="event-detail__field-value">{event.time}</p>
              </div>
              <div className="event-detail__field">
                <p className="event-detail__field-label">Location</p>
                <p className="event-detail__field-value">{event.location}</p>
              </div>

              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-detail__cta"
                >
                  RSVP / Register
                </a>
              ) : (
                <Link to="/contact" className="event-detail__cta">
                  RSVP / Get Involved
                </Link>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventDetail
