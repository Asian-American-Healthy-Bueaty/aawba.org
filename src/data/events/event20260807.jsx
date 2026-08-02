import poster from '../../assets/event20260807/poster20260807.jpg'
import photo1 from '../../assets/event20260807/event20260807 (1).jpg'
import photo2 from '../../assets/event20260807/event20260807 (2).jpg'
import photo3 from '../../assets/event20260807/event20260807 (3).jpg'
import photo4 from '../../assets/event20260807/event20260807 (4).jpg'
import photo5 from '../../assets/event20260807/event20260807 (5).jpg'
import photo6 from '../../assets/event20260807/event20260807 (6).jpg'
import photo7 from '../../assets/event20260807/event20260807 (7).jpg'
import photo8 from '../../assets/event20260807/event20260807 (8).jpg'
import photo9 from '../../assets/event20260807/event20260807 (9).jpg'

export const event20260807 = {
  slug: 'sound-deep-listening-evening',
  featured: true,
  title: 'A Sound & Deep-Listening Evening with Jocelyn Harkiewicz',
  dateLabel: 'Fri, Aug 7, 2026',
  time: '7:00 – 9:00 PM',
  location: 'Amy Medical Spa, Watertown',
  summary:
    "In today's fast-moving world, many of us are looking for a way to slow down, to come back to ourselves, and to truly rest.",
  description: [
    {
      heading: 'Why Gong?',
      blocks: [
        {
          type: 'p',
          text: "In today's fast-moving world, many of us are looking for a way to slow down, to come back to ourselves, and to truly rest.",
        },
        {
          type: 'p',
          text: 'The gong is not simply a musical instrument. Its sound surrounds you completely, inviting the body and mind into a state of deep listening. It is not something to analyze or understand — it is something to feel.',
        },
        {
          type: 'p',
          text: "In Jocelyn's work, the gong is never used as a performance. It is a doorway — a way to practice deep listening and awareness, and to hear oneself again. Before the first sound comes listening.",
        },
      ],
    },
    {
      heading: 'Why This Evening?',
      blocks: [
        { type: 'p', text: 'Many people have seen a gong. Very few have truly experienced one.' },
        {
          type: 'p',
          text: 'This is not a performance, and not a lecture. It is an evening about sound, listening, and presence — a chance to learn a little about the gong, to ask questions, and, most of all, to hear it for yourself.',
        },
        {
          type: 'p',
          text: 'Rather than being told what the gong can do, you are invited to discover your own experience through listening. There is nothing to believe. There is only listening.',
        },
      ],
    },
    {
      heading: 'What to Expect',
      blocks: [
        {
          type: 'p',
          text: 'A gentle two hours. No experience is needed — only your presence.',
        },
        {
          type: 'list',
          items: [
            'A short talk (about 30 min) — the story of the gong, and the art of listening',
            "Up close — come forward and feel the gong's vibration with your own hands",
            'A gong bath (about 30 min) — lie down and let the sound hold you',
            'Tea & conversation — a moment to rest and connect',
          ],
        },
        {
          type: 'p',
          text: 'There is nothing you need to do, and nothing you need to believe. If, as you relax, feelings rise — even tears — that is natural and welcome. You only need to listen.',
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9].map(
    (src, i) => ({ src, label: `Photo ${i + 1}` }),
  ),
}
