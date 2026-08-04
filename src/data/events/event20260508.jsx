import poster from '../../assets/event20260508/poster20260508.jpg'
import photo1 from '../../assets/event20260508/event20260508.jpg'

export const event20260508 = {
  slug: 'womens-wellness-renewal-salon',
  featured: false,
  title: 'Women’s Wellness & Renewal Salon',
  dateLabel: 'Fri, May 8, 2026',
  time: '3:00 – 5:00 PM',
  location: '100 Galen St, Watertown, MA',
  summary:
    'Insightful conversations on women’s health, education, and personal growth as we shift from constant giving to self-nourishment.',
  description: [
    {
      heading: 'Featured Guest Speakers',
      blocks: [
        {
          type: 'list',
          items: [
            'Dr. Yan Chen — Functional Medicine & Root-Cause Health Expert',
            'Annie Wu — Education Expert (18+ Years Experience) & Founder of ASC',
          ],
        },
      ],
    },
    {
      heading: 'What Guests Gained',
      blocks: [
        {
          type: 'list',
          items: [
            'New insights on women’s health: modern approaches to managing energy, vitality, and overall wellness',
            'Education strategies: understanding US–China educational differences and raising thriving children',
            'High-quality networking with like-minded women in a relaxed social setting',
            'Parent-child creative experience with interactive bonding activities',
          ],
        },
      ],
    },
    {
      heading: 'Event Schedule',
      blocks: [
        {
          type: 'list',
          items: [
            '3:00 PM – 3:30 PM | Check-in & Light Networking',
            '3:30 PM – 4:10 PM | Keynote Sharing: Women’s Wellness & Renewal',
            '3:30 PM – 5:00 PM | Interactive Parent-Child Creative Station',
            '4:10 PM – 5:00 PM | Open Socializing & Small-Group Experiences',
          ],
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
