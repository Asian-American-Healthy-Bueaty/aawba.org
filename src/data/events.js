import { event20260807 } from './events/event20260807.jsx'
import { event20260809 } from './events/event20260809.jsx'

export const UPCOMING_EVENTS = [
  event20260807,
  event20260809,
  {
    slug: 'monthly-wellness-circle',
    featured: false,
    title: 'Monthly Wellness Circle',
    dateLabel: 'Third Thursday, monthly',
    time: '6:00 PM',
    location: 'Virtual + in-person',
    summary: 'A recurring small-group session on nutrition, skincare, and mental health.',
    description: [
      {
        blocks: [
          {
            type: 'p',
            text: 'A recurring small-group session on nutrition, skincare, and mental health, open to all community members. Join in person or online — every circle is guided by a rotating host from our advisor network.',
          },
          {
            type: 'p',
            text: 'No registration required for the virtual option. In-person seating is limited to 20 guests.',
          },
        ],
      },
    ],
    poster: { src: null, label: 'circle poster' },
    gallery: [
      { src: null, label: 'circle session photo' },
      { src: null, label: 'host photo' },
      { src: null, label: 'community photo' },
    ],
  },
]
