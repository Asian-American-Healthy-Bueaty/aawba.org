import poster from '../../assets/event20260308/poster20260308.jpg'
import photo1 from '../../assets/event20260308/event20260308 (1).jpg'
import photo2 from '../../assets/event20260308/event20260308 (2).jpg'

export const event20260308 = {
  slug: 'aura-she-blooms',
  featured: false,
  title: 'AURA: She Blooms — Seeing a Better Self in Intimate Relationships',
  dateLabel: 'Sun, Mar 8, 2026',
  time: '1:00 – 5:00 PM',
  location: '100 Galen St #204, Watertown, MA 02472',
  summary:
    'This International Women’s Day special event featured an empowering salon lecture by Dr. Feng Li, designed to foster personal growth, emotional connection, and self-awareness within intimate relationships, combining an expert talk, interactive Q&A, guided relaxation meditation, and networking.',
  description: [
    {
      heading: 'About the Event',
      blocks: [
        {
          type: 'p',
          text: 'To celebrate International Women’s Day, AAWBA hosted "AURA: She Blooms," a transformative workshop centered on the theme "Discovering a Better Version of Yourself in Intimate Relationships." Guests learned how to express themselves with gentle firmness, build clear and powerful connections, and cultivate personal growth within meaningful relationships.',
        },
      ],
    },
    {
      heading: 'Keynote Speaker: Dr. Feng Li',
      blocks: [
        {
          type: 'list',
          items: [
            'Ph.D. in Biomedical Sciences',
            'Harvard Early Childhood Leadership Certificate',
            'Family Growth Coach: hands-on experience with over 50 families and 100+ deep case consultations',
          ],
        },
      ],
    },
    {
      heading: 'Event Agenda',
      blocks: [
        {
          type: 'list',
          items: [
            '1:00 PM – 2:30 PM | Check-in & Light Refreshments',
            '2:30 PM – 3:30 PM | Keynote Lecture with Dr. Feng Li',
            '3:30 PM – 4:00 PM | Interactive Q&A Session',
            '4:00 PM – 4:30 PM | Guided Meditation & Relaxation',
            '4:30 PM – 5:00 PM | Event Wrap-Up & Group Photo',
          ],
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
