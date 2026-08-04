import { Link } from 'react-router-dom'
import logo from '../assets/AAWBA .png'

function EventCard({ event }) {
  return (
    <Link to={`/activities/${event.slug}`} className="events__card events__card--link">
      <div className={'events__card-media' + (event.poster.src ? ' events__card-media--photo' : '')}>
        {event.poster.src ? (
          <img src={event.poster.src} alt={event.title} />
        ) : (
          <img src={logo} alt="" aria-hidden="true" />
        )}
      </div>
      <div className="events__card-body">
        {event.featured && <span className="events__badge">Featured</span>}
        <h3>{event.title}</h3>
        <p className="events__meta">
          {event.dateLabel} · {event.time}
        </p>
        <p className="events__meta">{event.location}</p>
        <p className="events__card-desc">{event.summary}</p>
        <span className="events__rsvp">View Details →</span>
      </div>
    </Link>
  )
}

export default EventCard
