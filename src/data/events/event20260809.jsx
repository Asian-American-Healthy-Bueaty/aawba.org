import poster from '../../assets/event20260809/event20260809 (9).jpg'
import photo1 from '../../assets/event20260809/event20260809 (9).jpg'
import photo2 from '../../assets/event20260809/event20260809 (10).jpg'
import photo3 from '../../assets/event20260809/event20260809 (11).jpg'
import photo4 from '../../assets/event20260809/event20260809 (12).jpg'

export const event20260809 = {
  slug: 'zuo-hong-photography-talk',
  featured: false,
  title: "Between Light and Shadow — In Search of Life's Most Beautiful Landscape",
  dateLabel: 'Sun, Aug 9, 2026',
  time: '2:00 – 4:00 PM',
  location: '100 Galen St #204, Watertown, MA 02472',
  summary:
    'Photography does more than preserve a landscape. Through repeated journeys and moments of reflection, it can also transform the way we understand the world—and ourselves.',
  registrationUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfP0lpJjNfbx2o3GpPxinLWavBgvXkg0T9OkzARXIz-O-C4XA/viewform',
  description: [
    {
      blocks: [
        {
          type: 'p',
          text: 'On August 9, 2026, AAWBA welcomes photographer and author Zuo Hong for an intimate afternoon of featured works, creative insights, and stories from the road. Moving from Song of Life to The Healing Land, Zuo Hong will explore how an image grows from seeing into expression, and share the choices, challenges, and unexpected moments behind her outdoor photography.',
        },
        {
          type: 'p',
          text: 'Zuo Hong is a Phase One Field Professor, the first Phase One Outdoor Photography Specialist in Asia, and the China Ambassador for 1X.COM. She is the author of two landscape photography albums: Song of Life: A Revitalizing Journey Behind the Lens and The Healing Land. The Healing Land received the Outstanding Photography Book Award at the 22nd Pingyao International Photography Festival in 2024. Her honors also include the "Outstanding Chinese Photographer" award at the 2019 Pingyao International Photography Festival and the "International Distinguished Photographer" medal at the 2017 Toronto International Photography Festival.',
        },
        {
          type: 'p',
          text: 'Whether you are a photographer, an art and travel enthusiast, or simply looking for new ways to see and express life, we invite you to join this thoughtful conversation about light, landscape, and the human journey.',
        },
      ],
    },
  ],
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3, photo4].map((src, i) => ({
    src,
    label: `Photo ${i + 1}`,
  })),
}
