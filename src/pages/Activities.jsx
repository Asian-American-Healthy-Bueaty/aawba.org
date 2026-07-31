import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import './Activities.css'

const FEATURED_EVENT = {
  title: '2026 Charity Concert',
  date: 'Saturday, October 17, 2026 · 6:30 PM',
  location: 'Riverside Community Hall (details TBD)',
  desc: "Our flagship annual fundraiser bringing together music, culture, and community to support AAWBA's wellness programs. Sponsorship opportunities available.",
}

const EVENTS = [
  {
    title: 'Skincare & Confidence Workshop',
    date: 'September 12, 2026 · 10:00 AM',
    location: 'Community Wellness Center',
  },
  {
    title: 'Monthly Wellness Circle',
    date: 'Third Thursday, every month · 6:00 PM',
    location: 'Virtual + in-person',
  },
]

const PAST_EVENTS = [
  {
    date: 'April 2026',
    title: 'Lunar Wellness Fair',
    desc: '120+ attendees joined free health screenings and skincare consultations.',
  },
  {
    date: 'January 2026',
    title: 'New Year Mentorship Mixer',
    desc: 'Connected 40 mentees with healthcare & beauty industry professionals.',
  },
  {
    date: 'October 2025',
    title: '2025 Charity Concert',
    desc: 'Our first flagship concert raised over $28,000 for community programs.',
  },
  {
    date: 'July 2025',
    title: 'Summer Skincare Pop-Up',
    desc: 'Free skincare consultations and product samples for 80+ community members.',
  },
  {
    date: 'April 2025',
    title: 'Community Health Screening Day',
    desc: 'Partnered with local clinics to provide free screenings for 200+ attendees.',
  },
  {
    date: 'January 2025',
    title: 'Founding Member Gala',
    desc: "Celebrated AAWBA's first anniversary with founding members and partners.",
  },
]

function PastEventCard({ event }) {
  return (
    <div className="events__card">
      <div className="events__card-media">
        <img src={logo} alt="" aria-hidden="true" />
      </div>
      <div className="events__card-body">
        <p className="events__card-date">{event.date}</p>
        <h3>{event.title}</h3>
        <p className="events__card-desc">{event.desc}</p>
      </div>
    </div>
  )
}

function Activities() {
  const [showAll, setShowAll] = useState(false)
  return (
    <>
      <section className="activities-hero">
        <img className="activities-hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="activities-hero__content">
          <p className="activities-hero__eyebrow">Activities</p>
          <h1>Gathering, learning, celebrating.</h1>
          <p className="activities-hero__desc">
            From our charity concert to everyday wellness workshops, see
            what&apos;s coming up and what we&apos;ve already accomplished.
          </p>
        </div>
      </section>

      <section className="events">
        <div className="events__inner">
          <div className="events__intro">
            <p className="events__eyebrow">Upcoming Events</p>
            <h2>What&apos;s next</h2>
          </div>

          <div className="events__featured">
            <div className="events__featured-media">
              <img src={logo} alt="" aria-hidden="true" />
            </div>
            <div className="events__featured-body">
              <span className="events__badge">Featured</span>
              <h3>{FEATURED_EVENT.title}</h3>
              <p className="events__meta">Date: {FEATURED_EVENT.date}</p>
              <p className="events__meta">Location: {FEATURED_EVENT.location}</p>
              <p className="events__desc">{FEATURED_EVENT.desc}</p>
              <div className="events__actions">
                <Link to="/contact" className="events__btn events__btn--solid">
                  Sponsor This Event
                </Link>
                <button type="button" className="events__btn events__btn--outline">
                  Get Updates
                </button>
              </div>
            </div>
          </div>

          <div className="events__grid">
            {EVENTS.map((event) => (
              <div className="events__card" key={event.title}>
                <div className="events__card-media">
                  <img src={logo} alt="" aria-hidden="true" />
                </div>
                <div className="events__card-body">
                  <h3>{event.title}</h3>
                  <p className="events__meta">{event.date}</p>
                  <p className="events__meta">{event.location}</p>
                  <span className="events__rsvp">RSVP →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="past-events">
        <div className="past-events__inner">
          <div className="past-events__intro">
            <p className="events__eyebrow">Past Events</p>
            <h2>Where we&apos;ve been</h2>
          </div>

          <div className="past-events__grid">
            {PAST_EVENTS.slice(0, 3).map((event) => (
              <PastEventCard event={event} key={event.title} />
            ))}
          </div>

          <div className={'past-events__collapse' + (showAll ? ' is-open' : '')}>
            <div className="past-events__collapse-inner">
              <div className="past-events__grid">
                {PAST_EVENTS.slice(3).map((event) => (
                  <PastEventCard event={event} key={event.title} />
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
            {showAll ? 'Show Less' : 'Show More'}
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
