import poster from '../../assets/event20260807/poster20260807.jpg'
import photo1 from '../../assets/event20260807/event20260807 (10).jpg'
import photo2 from '../../assets/event20260807/event20260807 (11).jpg'
import photo3 from '../../assets/event20260807/event20260807 (12).jpg'
import photo4 from '../../assets/event20260807/event20260807 (13).jpg'

export const event20260807 = {
  slug: 'sound-deep-listening-evening',
  featured: true,
  title: 'A Sound & Deep-Listening Evening with Jocelyn Harkiewicz',
  dateLabel: 'Fri, Aug 7, 2026',
  time: '7:00 – 9:00 PM',
  location: 'Amy Medical Spa, Watertown',
  summary:
    "In today's fast-moving world, many of us are looking for a way to slow down, to come back to ourselves, and to truly rest.",
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeDHu2A8v3nYVU1DF5bqUgrY2S8etxGL2DDg80Ag3q8Ou13QA/viewform',
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
  zh: {
    title: '与 Jocelyn Harkiewicz 共赴一场声音与深度聆听之夜',
    dateLabel: '2026年8月7日 星期五',
    time: '晚上7:00 – 9:00',
    summary: '在这个快节奏的世界里，许多人都在寻找一种方式，让自己慢下来，回归内心，获得真正的休息。',
    description: [
      {
        heading: '为什么是铜锣？',
        blocks: [
          {
            type: 'p',
            text: '在这个快节奏的世界里，许多人都在寻找一种方式，让自己慢下来，回归内心，获得真正的休息。',
          },
          {
            type: 'p',
            text: '铜锣不仅仅是一件乐器。它的声音将你完全包围，邀请身体与心灵进入一种深度聆听的状态。它不是用来分析或理解的，而是用来感受的。',
          },
          {
            type: 'p',
            text: '在 Jocelyn 的引导中，铜锣从不被当作一种表演。它是一扇门——一种练习深度聆听与觉知、重新聆听自我的方式。在第一声响起之前，先要学会倾听。',
          },
        ],
      },
      {
        heading: '为什么举办这场活动？',
        blocks: [
          { type: 'p', text: '很多人见过铜锣，但真正体验过它的人却寥寥无几。' },
          {
            type: 'p',
            text: '这不是一场表演，也不是一场讲座，而是一个关于声音、聆听与当下临在的夜晚——你将有机会初步了解铜锣、提出问题，更重要的是，亲自聆听它的声音。',
          },
          {
            type: 'p',
            text: '我们不会告诉你铜锣能带来什么，而是邀请你通过聆听去发现属于自己的体验。无需相信什么，只需静心聆听。',
          },
        ],
      },
      {
        heading: '活动安排',
        blocks: [
          {
            type: 'p',
            text: '轻柔舒缓的两个小时。无需任何经验，只需带着你的身心前来。',
          },
          {
            type: 'list',
            items: [
              '简短分享（约30分钟）——铜锣的故事与聆听的艺术',
              '近距离体验——上前用双手感受铜锣的振动',
              '铜锣浴（约30分钟）——躺下，让声音包裹你',
              '茶叙与交流——静心休憩、彼此联结的时光',
            ],
          },
          {
            type: 'p',
            text: '你无需做任何事，也无需相信任何事。在放松的过程中，如果有情绪涌现——哪怕是泪水——都是自然且被欢迎的。你只需要聆听。',
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3, photo4].map(
    (src, i) => ({ src, label: `Photo ${i + 1}` }),
  ),
}
