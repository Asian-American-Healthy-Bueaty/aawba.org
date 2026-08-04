import { Link, useParams } from 'react-router-dom'
import { UPCOMING_EVENTS, PAST_EVENTS } from '../data/events'
import GallerySlider from '../components/GallerySlider.jsx'
import { useI18n } from '../i18n/useI18n.js'
import { localize } from '../i18n/localize.js'
import './EventDetail.css'

function EventDetail() {
  const { slug } = useParams()
  const { t, language } = useI18n()
  const rawEvent = [...UPCOMING_EVENTS, ...PAST_EVENTS].find((item) => item.slug === slug)
  const event = rawEvent ? localize(rawEvent, language) : null

  if (!event) {
    return (
      <section className="event-detail-hero">
        <div className="event-detail-hero__content">
          <Link to="/activities" className="event-detail__back">
            {t('eventDetail.backToActivities')}
          </Link>
          <h1>{t('eventDetail.notFound')}</h1>
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
              {t('eventDetail.backToActivities')}
            </Link>
            {event.featured && <span className="event-detail__badge">{t('eventDetail.featured')}</span>}
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
              <h2>{t('eventDetail.aboutEvent')}</h2>
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

              <h2>{t('eventDetail.gallery')}</h2>
              <GallerySlider images={event.gallery} altPrefix={event.title} />
            </div>

            <aside className="event-detail__sidebar">
              <h3>{event.title}</h3>

              <div className="event-detail__field">
                <p className="event-detail__field-label">{t('eventDetail.dateLabel')}</p>
                <p className="event-detail__field-value">{event.dateLabel}</p>
              </div>
              <div className="event-detail__field">
                <p className="event-detail__field-label">{t('eventDetail.timeLabel')}</p>
                <p className="event-detail__field-value">{event.time}</p>
              </div>
              <div className="event-detail__field">
                <p className="event-detail__field-label">{t('eventDetail.locationLabel')}</p>
                <p className="event-detail__field-value">{event.location}</p>
              </div>

              {event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-detail__cta"
                >
                  {t('eventDetail.rsvpRegister')}
                </a>
              ) : (
                <Link to="/contact" className="event-detail__cta">
                  {t('eventDetail.rsvpGetInvolved')}
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
