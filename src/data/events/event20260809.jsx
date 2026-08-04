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
  zh: {
    title: '光影之间——寻找人生最美风景',
    dateLabel: '2026年8月9日 星期日',
    time: '下午2:00 – 4:00',
    summary:
      '摄影不仅仅是记录风景。透过一次次的旅程与沉思瞬间，它也能改变我们理解世界——乃至理解自己的方式。',
    description: [
      {
        blocks: [
          {
            type: 'p',
            text: '2026年8月9日，AAWBA 很荣幸邀请到摄影师兼作家 Zuo Hong，与大家共度一个温馨的午后，分享她的代表作品、创作理念与旅途故事。从《生命之歌》到《疗愈之地》，Zuo Hong 将探讨一幅影像如何从「看见」走向「表达」，并分享她户外摄影背后的抉择、挑战与意外时刻。',
          },
          {
            type: 'p',
            text: 'Zuo Hong 是 Phase One 特约摄影师（Field Professor），亚洲首位 Phase One 户外摄影专家，同时担任 1X.COM 中国区大使。她著有两本风景摄影画册：《生命之歌：镜头背后的复苏之旅》与《疗愈之地》。《疗愈之地》荣获2024年第22届平遥国际摄影大展"优秀摄影画册奖"。她的其他荣誉还包括2019年平遥国际摄影大展"中国优秀摄影师"称号，以及2017年多伦多国际摄影节"国际杰出摄影师"奖章。',
          },
          {
            type: 'p',
            text: '无论你是摄影爱好者、艺术与旅行的追寻者，还是单纯想要探索观察与表达生活的新方式，我们都诚挚邀请你加入这场关于光影、风景与人生旅程的深度对话。',
          },
        ],
      },
    ],
  },
  poster: { src: poster, label: 'event poster' },
  gallery: [photo1, photo2, photo3, photo4].map((src, i) => ({
    src,
    label: `Photo ${i + 1}`,
  })),
}
