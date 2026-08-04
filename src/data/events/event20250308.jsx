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
  zh: {
    title: '三八妇女节波士顿站：与刘晓庆共度璀璨之夜',
    dateLabel: '2025年3月8日 星期六',
    time: '晚间',
    summary:
      'Amee\'s Medical Spa、Global Star Foundation（环球之星基金会）、Asian American Alliance（亚裔美国人联盟）、AAWBA 与 American Weston Academy 联合呈现一场专属于女性的盛大活动——星光熠熠的晚宴，共庆属于女神的璀璨之夜。',
    description: [
      {
        heading: '活动亮点',
        blocks: [
          {
            type: 'p',
            text: '这场星光熠熠的晚宴在波士顿历史悠久的 Henderson House 盛大举行，宾客们不仅享用了精致美食，更近距离聆听刘晓庆分享她的人生智慧——深入了解她传奇人生背后的坚韧与力量。',
          },
          {
            type: 'p',
            text: '刘晓庆现场挥毫献上书法表演，其作品随即进行现场拍卖，为整个夜晚增添了浓厚的文化氛围。',
          },
          {
            type: 'p',
            text: '当晚还设有精彩纷呈的抽奖环节，并限量发售她亲笔签名的自传《我不怕重头再来》。',
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
