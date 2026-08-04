import poster from '../../assets/event20260508/poster20260508.jpg'
import photo1 from '../../assets/event20260508/event20260508.jpg'

export const event20260508 = {
  slug: 'womens-wellness-renewal-salon',
  featured: false,
  title: 'Women’s Wellness & Renewal Salon',
  dateLabel: 'Fri, May 8, 2026',
  time: '3:00 – 5:00 PM',
  location: '100 Galen St, Watertown, MA',
  summary:
    'Insightful conversations on women’s health, education, and personal growth as we shift from constant giving to self-nourishment.',
  description: [
    {
      heading: 'Featured Guest Speakers',
      blocks: [
        {
          type: 'list',
          items: [
            'Dr. Yan Chen — Functional Medicine & Root-Cause Health Expert',
            'Annie Wu — Education Expert (18+ Years Experience) & Founder of ASC',
          ],
        },
      ],
    },
    {
      heading: 'What Guests Gained',
      blocks: [
        {
          type: 'list',
          items: [
            'New insights on women’s health: modern approaches to managing energy, vitality, and overall wellness',
            'Education strategies: understanding US–China educational differences and raising thriving children',
            'High-quality networking with like-minded women in a relaxed social setting',
            'Parent-child creative experience with interactive bonding activities',
          ],
        },
      ],
    },
    {
      heading: 'Event Schedule',
      blocks: [
        {
          type: 'list',
          items: [
            '3:00 PM – 3:30 PM | Check-in & Light Networking',
            '3:30 PM – 4:10 PM | Keynote Sharing: Women’s Wellness & Renewal',
            '3:30 PM – 5:00 PM | Interactive Parent-Child Creative Station',
            '4:10 PM – 5:00 PM | Open Socializing & Small-Group Experiences',
          ],
        },
      ],
    },
  ],
  zh: {
    title: '女性健康与身心焕新沙龙',
    dateLabel: '2026年5月8日 星期五',
    time: '下午3:00 – 5:00',
    summary:
      '一场关于女性健康、教育与个人成长的深度对话，引导我们从持续付出转向自我滋养。',
    description: [
      {
        heading: '特邀嘉宾',
        blocks: [
          {
            type: 'list',
            items: [
              'Yan Chen 博士 —— 功能医学与根源健康专家',
              'Annie Wu —— 教育专家（18年以上从业经验），ASC 创始人',
            ],
          },
        ],
      },
      {
        heading: '活动收获',
        blocks: [
          {
            type: 'list',
            items: [
              '女性健康新知：管理精力、活力与整体健康的现代方法',
              '教育策略：理解中美教育差异，培养茁壮成长的孩子',
              '在轻松的社交氛围中，与志同道合的女性建立高质量人脉',
              '亲子创意体验，通过互动活动增进亲子关系',
            ],
          },
        ],
      },
      {
        heading: '活动日程',
        blocks: [
          {
            type: 'list',
            items: [
              '下午3:00 – 3:30 ｜ 签到与轻松交流',
              '下午3:30 – 4:10 ｜ 主题分享：女性健康与身心焕新',
              '下午3:30 – 5:00 ｜ 互动亲子创意工坊',
              '下午4:10 – 5:00 ｜ 自由社交与小组体验活动',
            ],
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1].map((src, i) => ({ src, label: `Photo ${i + 1}` })),
}
