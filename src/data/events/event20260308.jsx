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
  zh: {
    title: 'AURA · 绽放：在亲密关系中遇见更好的自己',
    dateLabel: '2026年3月8日 星期日',
    time: '下午1:00 – 5:00',
    summary:
      '这场国际妇女节特别活动由 Feng Li 博士主讲赋能沙龙讲座，旨在促进亲密关系中的个人成长、情感联结与自我觉察，活动融合了专家讲座、互动问答、引导式放松冥想与社交联谊环节。',
    description: [
      {
        heading: '关于本次活动',
        blocks: [
          {
            type: 'p',
            text: '为庆祝国际妇女节，AAWBA 举办了主题工作坊"AURA · 绽放"，围绕"在亲密关系中遇见更好的自己"这一主题展开深度探索。宾客们学习了如何以温和而坚定的方式表达自我，建立清晰而有力的联结，并在有意义的关系中实现个人成长。',
          },
        ],
      },
      {
        heading: '主讲嘉宾：Feng Li 博士',
        blocks: [
          {
            type: 'list',
            items: [
              '生物医学科学博士',
              '哈佛大学幼儿教育领导力证书',
              '家庭成长教练：拥有50余个家庭的实践经验，完成100余次深度案例咨询',
            ],
          },
        ],
      },
      {
        heading: '活动流程',
        blocks: [
          {
            type: 'list',
            items: [
              '下午1:00 – 2:30 ｜ 签到与茶点',
              '下午2:30 – 3:30 ｜ Feng Li 博士主题演讲',
              '下午3:30 – 4:00 ｜ 互动问答环节',
              '下午4:00 – 4:30 ｜ 引导式冥想与放松',
              '下午4:30 – 5:00 ｜ 活动总结与合影',
            ],
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
