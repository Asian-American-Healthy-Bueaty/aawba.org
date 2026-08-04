import poster from '../../assets/event20261107/poster20261107.jpg'
import photo1 from '../../assets/event20261107/event20261107 (1).jpg'
import photo2 from '../../assets/event20261107/event20261107 (2).jpg'

export const event20261107 = {
  slug: 'charity-concert-2026',
  featured: true,
  title: '2026 Charity Concert',
  dateLabel: 'Sat, Nov 7, 2026',
  time: '7:00 PM',
  location: '900 Washington Street, Boston 02482',
  summary:
    'Music is a universal language that transcends borders and brings hearts together. Join us for an extraordinary evening of music, warm fellowship, and giving back, as we harness the power of melodies to bring light, hope, and support to our community.',
  description: [
    {
      heading: 'Part I: Nostalgia & Origins',
      blocks: [
        {
          type: 'p',
          text: 'Journey through timeless East Asian classics, featuring soulful renditions of Swan (鸿雁), In That Faraway Place, and That Is Me, awakening deep emotions and heartfelt memories.',
        },
      ],
    },
    {
      heading: 'Part II: Immortal Classics',
      blocks: [
        {
          type: 'p',
          text: "Celebrate the grand traditions of opera and world classics. Enjoy Puccini's sublime O mio babbino caro, the vibrant Italian favorite O Sole Mio, the romantic movie theme Speak Softly Love (from The Godfather), and the beloved folk song The Olive Tree.",
        },
      ],
    },
    {
      heading: 'Part III: Love & Inspiration',
      blocks: [
        {
          type: 'p',
          text: "Experience music that uplifts the spirit. Highlights include the globally cherished anthem You Raise Me Up, the inspiring I Love You, China, the legendary Japanese song Subaru, and Rachmaninoff's dramatic Aleko's Cavatina.",
        },
      ],
    },
    {
      heading: 'Grand Finale: Auld Lang Syne & Eternal Friendship',
      blocks: [
        {
          type: 'p',
          text: 'The evening concludes with powerful moving tributes: Remembering Comrades and the iconic Time to Say Goodbye, culminating in a grand joint performance of Auld Lang Syne by our featured artists and the Feige Choir.',
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
