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
  zh: {
    title: '2026年度慈善音乐会',
    dateLabel: '2026年11月7日 星期六',
    time: '晚上7:00',
    summary:
      '音乐是一种跨越国界、连接心灵的共同语言。欢迎与我们共度一个非凡的音乐之夜，在温暖的情谊与回馈社会中，用旋律的力量为我们的社区带来光明、希望与支持。',
    description: [
      {
        heading: '第一篇章：乡愁与初心',
        blocks: [
          {
            type: 'p',
            text: '带你走进永恒的东亚经典金曲，倾情演绎《鸿雁》《在那遥远的地方》《那就是我》，唤醒深藏心底的情感与温暖记忆。',
          },
        ],
      },
      {
        heading: '第二篇章：不朽经典',
        blocks: [
          {
            type: 'p',
            text: '礼赞歌剧与世界经典的恢弘传统。聆听普契尼摄人心魄的《我亲爱的爸爸》（O mio babbino caro）、热情洋溢的意大利名曲《我的太阳》（O Sole Mio）、电影《教父》浪漫主题曲《Speak Softly Love》，以及深受喜爱的民谣《橄榄树》。',
          },
        ],
      },
      {
        heading: '第三篇章：爱与启迪',
        blocks: [
          {
            type: 'p',
            text: '感受振奋人心的音乐力量。精彩曲目包括风靡全球的经典颂歌《You Raise Me Up》、激昂人心的《我爱你中国》、传奇日本歌曲《昴》，以及拉赫玛尼诺夫气势磅礴的歌剧咏叹调《阿列科的浪漫曲》。',
          },
        ],
      },
      {
        heading: '压轴篇章：友谊地久天长与永恒情谊',
        blocks: [
          {
            type: 'p',
            text: '音乐会在感人至深的致敬曲目《送战友》与经典名曲《Time to Say Goodbye》中缓缓落幕，并由特邀艺术家携手飞歌合唱团（Feige Choir）共同演绎《友谊地久天长》，将全场气氛推向高潮。',
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
