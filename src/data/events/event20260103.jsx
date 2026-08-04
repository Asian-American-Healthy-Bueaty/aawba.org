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
  zh: {
    title: '新年聚会：更强健的身体，更快乐的自己',
    dateLabel: '2026年1月3日 星期六',
    time: '晚上5:30 – 8:30',
    summary:
      '由 Amee\'s Medical Spa 与 IBI SPACE 联合主办，这场新年聚会汇聚大家一同以美食、轻运动与激励人心的交流，共同迎接新年的到来。',
    description: [
      {
        heading: '活动亮点',
        blocks: [
          {
            type: 'p',
            text: '形式：百家宴（Potluck）· 轻运动 · 轻松交流',
          },
          {
            type: 'p',
            text: '宾客们相聚一堂，结识有趣的朋友，品尝美味佳肴，一起动起来，畅谈对未来的期许，共同迎接更强健、更健康的自己。',
          },
        ],
      },
      {
        heading: '特邀嘉宾：Ling Zheng',
        blocks: [
          {
            type: 'list',
            items: ['PTR 认证网球教练', '跆拳道黑带', '15年教育行业经验', '13年企业银行从业经验'],
          },
          {
            type: 'p',
            text: 'Ling 分享了适合所有人的简单轻运动方法与健康饮食习惯。',
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
