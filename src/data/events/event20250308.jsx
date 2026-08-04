import poster from '../../assets/event20250308/poster20250308.jpg'
import photo1 from '../../assets/event20250308/event20250308 (1).jpg'
import photo2 from '../../assets/event20250308/event20250308 (2).jpg'
import photo3 from '../../assets/event20250308/event20250308 (3).jpg'

export const event20250308 = {
  slug: 'radiant-evening-xiaoqing-liu',
  featured: false,
  title: 'March 8 Boston Stop: A Radiant Evening with Xiaoqing Liu',
  dateLabel: 'Sat, Mar 8, 2025',
  time: 'Evening',
  location: 'Henderson House, 99 Westcliff Road, Weston, MA',
  summary:
    'Amee’s Medical Spa, Global Star Foundation, Asian American Alliance, AAWBA, and American Weston Academy joined forces to present an exclusive grand event for women — a star-studded gala dinner celebrating a radiant goddess day.',
  description: [
    {
      heading: 'Event Highlights',
      blocks: [
        {
          type: 'p',
          text: 'A star-studded gala dinner unfolded at the historic Henderson House in Boston, where guests enjoyed exquisite cuisine and heard Xiaoqing Liu share her life wisdom up close — an intimate look at the resilience and strength behind her legendary journey.',
        },
        {
          type: 'p',
          text: 'Xiaoqing Liu treated guests to a live calligraphy performance, with her artworks auctioned on-site, immersing the evening in a rich cultural atmosphere.',
        },
        {
          type: 'p',
          text: 'The night also featured a live lucky draw with fantastic prizes and a limited release of her autographed autobiography, Not Afraid to Start Over Again.',
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
