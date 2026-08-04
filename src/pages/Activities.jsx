import { useState } from 'react'
import logo from '../assets/AAWBA .png'
import { UPCOMING_EVENTS, PAST_EVENTS } from '../data/events'
import EventCard from '../components/EventCard.jsx'
import { useI18n } from '../i18n/useI18n.js'
import './Activities.css'

function Activities() {
  const { t } = useI18n()
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <section className="activities-hero">
        <img className="activities-hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="activities-hero__content">
          <p className="activities-hero__eyebrow">{t('activities.hero.eyebrow')}</p>
          <h1>{t('activities.hero.heading')}</h1>
          <p className="activities-hero__desc">{t('activities.hero.desc')}</p>
        </div>
      </section>

      <section className="events">
        <div className="events__inner">
          <div className="events__intro">
            <p className="events__eyebrow">{t('activities.upcoming.eyebrow')}</p>
            <h2>{t('activities.upcoming.heading')}</h2>
          </div>

          <div className="events__grid">
            {UPCOMING_EVENTS.map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="past-events">
        <div className="past-events__inner">
          <div className="past-events__intro">
            <p className="events__eyebrow">{t('activities.past.eyebrow')}</p>
            <h2>{t('activities.past.heading')}</h2>
          </div>

          <div className="past-events__grid">
            {PAST_EVENTS.slice(0, 3).map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>

          <div className={'past-events__collapse' + (showAll ? ' is-open' : '')}>
            <div className="past-events__collapse-inner">
              <div className="past-events__grid">
                {PAST_EVENTS.slice(3).map((event) => (
                  <EventCard event={event} key={event.slug} />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="past-events__toggle"
            aria-expanded={showAll}
            onClick={() => setShowAll((open) => !open)}
          >
            {showAll ? t('activities.showLess') : t('activities.showMore')}
            <span className="past-events__toggle-arrow" aria-hidden="true">
              ▾
            </span>
          </button>
        </div>
      </section>
    </>
  )
}

export default Activities
