import poster from '../../assets/event20260103/poster20260103.jpg'
import photo1 from '../../assets/event20260103/event20260103.jpg'

export const event20260103 = {
  slug: 'new-year-gather-up-2026',
  featured: false,
  title: 'New Year Gather-Up: Stronger Body, Happier Me',
  dateLabel: 'Sat, Jan 3, 2026',
  time: '5:30 – 8:30 PM',
  location: '100 Galen St #204, Watertown, MA',
  summary:
    'Co-hosted by Amee’s Medical Spa and IBI SPACE, this New Year gathering brought people together to ring in the new year with good food, light exercise, and inspiring conversations.',
  description: [
    {
      heading: 'Event Highlights',
      blocks: [
        {
          type: 'p',
          text: 'Format: Potluck · Light Exercise · Casual Sharing',
        },
        {
          type: 'p',
          text: 'Guests gathered with interesting people, enjoyed delicious food, stayed active, and chatted about future expectations as we welcomed a stronger, healthier self.',
        },
      ],
    },
    {
      heading: 'Special Guest: Ling Zheng',
      blocks: [
        {
          type: 'list',
          items: [
            'PTR Certified Tennis Coach',
            'Taekwondo Black Belt',
            '15 Years in the Education Field',
            '13 Years in Corporate Banking',
          ],
        },
        {
          type: 'p',
          text: 'Ling shared simple light exercise routines and healthy eating habits suitable for everyone.',
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
