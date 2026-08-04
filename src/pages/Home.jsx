import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/AAWBA .png'
import staff1 from '../assets/staff1.jpg'
import staff2 from '../assets/staff2.jpg'
import staff3 from '../assets/staff3.jpg'
import staff4 from '../assets/staff4.jpg'
import { UPCOMING_EVENTS } from '../data/events'
import EventCard from '../components/EventCard.jsx'
import { useI18n } from '../i18n/useI18n.js'
import { localize } from '../i18n/localize.js'
import './Home.css'
import './Activities.css'

const FOUNDER = {
  name: 'Amy Wu',
  role: 'Founder / Board Chair / CEO',
  photo: staff1,
  desc: 'Emigrating to the United States in the 1990s as a first-generation Chinese immigrant, Amy Wu has navigated a multifaceted life journey—transitioning from a TV artist and singer to a wife, mother, entrepreneur, and dedicated community advocate. Through every stage of her personal and professional growth, she has remained grounded in a core belief: true beauty springs from health, genuine strength comes from within, and lasting happiness lies in balance.\n\nDriven by a lifelong passion for service, Amy has long been an active leader in the Asian American community and a committed public servant, earning three U.S. President’s Volunteer Service Awards. Having witnessed countless women quietly balancing the demands of family, career, and self, she deeply understands that women are not only the heart of a happy home, but also a vital force shaping the next generation and strengthening the broader community. Inspired by this vision, she founded the Asian American Wellness and Beauty Association (AAWBA) to create an empowering space where women can connect, learn, grow, and uplift one another.\n\nAs Founder, Amy leads AAWBA with a mission to cultivate a trusted community centered on holistic health, timeless beauty, personal development, and public service. She firmly believes that when a woman nurtures a healthy body, a positive mindset, inner confidence, and a drive for lifelong learning, she naturally illuminates her family, inspires her children, and warms her community. Amy’s vision is to build an inclusive, sustainable platform where women discover their best selves, foster authentic friendships, and pass forward love and kindness to create a better society together.',
  zh: {
    role: '创始人 / 董事会主席 / 首席执行官',
    desc: '20世纪90年代，作为第一代华人移民来到美国后，Amy Wu 走过了一段丰富多彩的人生旅程——从电视文艺工作者、歌手，到妻子、母亲、创业者，再到全心投入的社区倡导者。在个人成长与事业发展的每一个阶段，她始终坚守一个核心信念：真正的美源于健康，真正的力量源自内心，而持久的幸福则来自平衡。\n\n出于对服务社会的终身热忱，Amy 长期活跃于亚裔美国人社区，是一位坚定的公共服务践行者，曾三次荣获美国总统志愿服务奖。在见证了无数女性默默兼顾家庭、事业与自我的历程后，她深刻理解到，女性不仅是幸福家庭的核心，更是塑造下一代、凝聚社区力量的重要推动者。正是基于这一愿景，她创立了亚裔美国人健康与美丽协会（AAWBA），打造一个让女性彼此联结、共同学习、共同成长、相互扶持的赋能空间。\n\n作为创始人，Amy 带领 AAWBA 致力于构建一个以全面健康、恒久之美、个人成长与公共服务为核心的可信赖社区。她坚信，当一位女性拥有健康的身体、积极的心态、内在的自信以及终身学习的动力时，她自然能够照亮家庭、激励子女、温暖社区。Amy 的愿景，是打造一个包容、可持续发展的平台，让女性在其中发现最好的自己，建立真挚的友谊，并将爱与善意传递下去，共同创造一个更美好的社会。',
  },
}

const BOARD = [
  {
    name: 'Robert Hao Wu, MD, FACP',
    role: 'Owner & Medical Director / Clinical Teaching Instructor',
    photo: staff3,
    desc: 'Dr. Robert Hao Wu built his academic foundation in medical sciences and traditional Chinese medicine in Guangzhou, China, and completed his internal medicine residency at Cornell Medical Center / New York Downtown Hospital in New York. With over three decades of clinical experience across major healthcare institutions, including Tufts Medical Center, Quincy Medical Center, and Carney Hospital, he is a board-certified internist and a Fellow of the American College of Physicians (FACP). He also serves as a Clinical Teaching Instructor at Boston University School of Medicine.\n\nAs a dedicated physician, leader, and active community advocate, Dr. Wu serves as the Owner and Medical Director of his primary care practice and Amee’s Medical Spa in Massachusetts. Beyond his clinical practice, he has held key leadership positions across various professional and cultural organizations, including serving as Chairman of the Association of Chinese American Physicians and the Gee Duck Sam Duck Association of Boston. Dr. Wu is deeply committed to delivering comprehensive primary care, advancing medical education, and fostering health, wellness, and community support for diverse populations.',
    zh: {
      role: '诊所业主兼医疗总监 / 临床教学讲师',
      desc: 'Robert Hao Wu 医生在中国广州奠定了医学科学与中医学的学术基础，随后在纽约康奈尔医学中心／纽约市区医院（Cornell Medical Center / New York Downtown Hospital）完成内科住院医师培训。他拥有超过三十年的临床经验，曾任职于塔夫茨医疗中心（Tufts Medical Center）、昆西医疗中心（Quincy Medical Center）和卡尼医院（Carney Hospital）等多家知名医疗机构，是获得美国内科委员会认证的内科医生，并获选为美国医师学会会士（FACP）。他同时担任波士顿大学医学院临床教学讲师。\n\n作为一名尽职的医生、领导者与积极的社区倡导者，Wu 医生是其私人全科诊所以及马萨诸塞州 Amee\'s Medical Spa 的业主兼医疗总监。除临床工作外，他还在多个专业与文化组织中担任重要领导职务，包括美国华裔医师协会（Association of Chinese American Physicians）主席，以及波士顿旨德三德公所（Gee Duck Sam Duck Association of Boston）主席。Wu 医生始终致力于提供全面的初级医疗服务、推动医学教育发展，并为多元族裔群体提供健康、保健与社区支持。',
    },
  },
  {
    name: 'Richard K. Chang, Esq.',
    role: 'Board Director',
    photo: staff4,
    desc: 'Richard K. Chang, Esq. brings extensive experience in educational leadership, law, nonprofit governance and cross-cultural community engagement to the Board of Directors of the Asian American Wellness and Beauty Association. He has served as Head of School at Josiah Quincy Upper School in Boston and previously served as Interim Academic Superintendent for Boston Public Schools. Throughout his career, he has led major institutional initiatives, developed community and international partnerships, and advanced inclusive educational programs supporting multilingual learners and students with diverse needs.\n\nRichard holds a Juris Doctor from Boston College Law School and an A.B. in East Asian Studies from Harvard College. He has served on the boards and advisory bodies of numerous education, youth-development and community organizations across Greater Boston. Fluent in Mandarin Chinese and shaped by extensive international experience, Richard brings valuable expertise in governance, education, community partnerships and culturally responsive leadership to AAWBA’s mission of advancing the health, well-being and quality of life of Asian American women and families.',
    zh: {
      role: '董事会董事',
      desc: 'Richard K. Chang 律师在教育领导、法律、非营利组织治理以及跨文化社区参与等领域拥有丰富经验，现为亚裔美国人健康与美丽协会董事会成员。他曾担任波士顿 Josiah Quincy Upper School 校长，此前还曾出任波士顿公立学校系统的代理学术总监。在其职业生涯中，他主导过多项重大机构改革，建立了众多社区与国际合作伙伴关系，并积极推动支持多语言学习者及多元需求学生的包容性教育项目。\n\nRichard 拥有波士顿学院法学院（Boston College Law School）法律博士学位，以及哈佛学院（Harvard College）东亚研究学士学位。他曾在大波士顿地区多个教育、青年发展及社区组织的董事会与顾问机构任职。Richard 精通普通话，拥有丰富的国际经验，为 AAWBA 推进亚裔美国女性及家庭健康、福祉与生活质量的使命，带来治理、教育、社区合作与具有文化敏感度的领导力等宝贵专长。',
    },
  },
]

const STAFF = [
  {
    name: 'Jiying Zhao',
    role: 'Founding Strategy & Launch Lead',
    photo: staff2,
    desc: 'Jiying built her academic foundation and professional experience at the University of Saskatchewan, Canada, and Northeastern University, USA. She has extensive experience in external affairs, strategic partnership development and sponsorship operations across multinational corporations, professional societies and international organizations. She has long specialized in cross-cultural outreach, membership program development and strategic collaboration across diverse cultural landscapes.\n\nAs an Asian immigrant woman, Jiying leads this nonprofit initiative as Founding Strategy & Launch Lead. Leveraging her expertise in alliance building, resource coordination and strategy execution, she works to cultivate a trusted community space for Asian women. She firmly believes health and beauty should not be confined to narrow external standards; they are fundamental rights that enable Asian women to center themselves, rebuild inner strength and grow freely. Her vision is to build an inclusive, sustainable support network that empowers more Asian women to nurture holistic well-being and radiate authentic inner confidence.',
    zh: {
      role: '创始战略与启动负责人',
      desc: 'Jiying 在加拿大萨斯喀彻温大学（University of Saskatchewan）和美国东北大学（Northeastern University）奠定了学术基础并积累了丰富的职业经验。她在跨国企业、专业协会及国际组织中拥有丰富的对外事务、战略合作拓展与赞助运营经验，长期专注于跨文化推广、会员项目开发，以及在多元文化背景下的战略协作。\n\n作为一名亚裔移民女性，Jiying 以创始战略与启动负责人的身份，带领这项非营利事业不断前行。凭借在联盟建设、资源协调与战略执行方面的专业能力，她致力于为亚裔女性打造一个值得信赖的社区空间。她坚信，健康与美丽不应被狭隘的外在标准所局限，而是每一位亚裔女性回归自我、重建内在力量、自由成长的基本权利。她的愿景，是建立一个包容、可持续的支持网络，帮助更多亚裔女性滋养整体健康，绽放真实的内在自信。',
    },
  },
]

const LEADERSHIP_GROUPS = [
  {
    title: 'Executive Leadership',
    desc: 'Led by our Executive Director alongside a small, dedicated staff overseeing programs, partnerships, and operations day to day.',
    zh: {
      title: '执行团队',
      desc: '由我们的执行董事带领一支精干、专注的团队，负责日常项目运营、合作伙伴关系与整体运作。',
    },
  },
  {
    title: 'Advisory Network',
    desc: 'Physicians, dermatologists, and community leaders who shape program content and ensure clinical accuracy.',
    zh: {
      title: '顾问网络',
      desc: '由医生、皮肤科专家与社区领袖组成，共同把关项目内容并确保其临床准确性。',
    },
  },
]

const VALUES = [
  {
    title: 'Health & Well-being',
    desc: 'We believe that physical, mental, emotional, and social well-being are the foundation of a fulfilling life.',
    zh: { title: '健康与福祉', desc: '我们相信身体、心理、情感与社会层面的整体福祉，是充实人生的基石。' },
  },
  {
    title: 'Empowerment',
    desc: 'We equip women with knowledge, resources, confidence, and opportunities to make informed decisions and achieve their fullest potential.',
    zh: { title: '赋能', desc: '我们为女性提供知识、资源、信心与机会，帮助她们做出明智决策，充分发挥自身潜力。' },
  },
  {
    title: 'Community & Inclusion',
    desc: 'We foster an inclusive community where every woman is respected, welcomed, and supported regardless of age, background, or life stage.',
    zh: { title: '社区与包容', desc: '我们致力于营造一个包容的社区，让每一位女性无论年龄、背景或人生阶段，都能获得尊重、欢迎与支持。' },
  },
  {
    title: 'Cultural Respect',
    desc: 'We celebrate the richness of Asian cultures while embracing diversity, cross-cultural understanding, and mutual respect.',
    zh: { title: '文化尊重', desc: '我们珍视亚洲文化的丰富多元，同时拥抱多样性、跨文化理解与相互尊重。' },
  },
  {
    title: 'Integrity & Responsibility',
    desc: 'We act with transparency, accountability, professionalism, and ethical leadership in all that we do.',
    zh: { title: '诚信与责任', desc: '我们在一切工作中秉持透明、问责、专业与合乎道德的领导精神。' },
  },
  {
    title: 'Collaboration',
    desc: 'We believe meaningful partnerships create greater opportunities and lasting impact for individuals and communities.',
    zh: { title: '协作共赢', desc: '我们相信，有意义的合作能够为个人和社区带来更大的机遇与持久的影响力。' },
  },
]

const PILLARS = [
  {
    number: '01',
    title: 'Empowering Women',
    desc: 'We inspire women to cultivate inner strength, embrace their authentic confidence, and lead fulfilling lives.',
    zh: { title: '赋能女性', desc: '我们激励女性培养内在力量，拥抱真实的自信，过上充实而精彩的生活。' },
  },
  {
    number: '02',
    title: 'Inspiring Wellness',
    desc: 'We promote holistic health and balanced living to help every woman look and feel vibrant.',
    zh: { title: '倡导健康', desc: '我们倡导身心健康与均衡生活，帮助每一位女性由内而外焕发活力。' },
  },
  {
    number: '03',
    title: 'Building Community',
    desc: 'We create a supportive, inclusive network where women connect, grow, and uplift one another together.',
    zh: { title: '共建社区', desc: '我们打造一个包容、互助的社群网络，让女性在其中建立联系、共同成长、彼此扶持。' },
  },
]

function Home() {
  const { t, language } = useI18n()
  const [activePerson, setActivePerson] = useState(null)

  const founder = localize(FOUNDER, language)
  const board = BOARD.map((member) => localize(member, language))
  const staff = STAFF.map((member) => localize(member, language))
  const leadershipGroups = LEADERSHIP_GROUPS.map((group) => localize(group, language))
  const values = VALUES.map((value) => localize(value, language))
  const pillars = PILLARS.map((pillar) => localize(pillar, language))
  const heroTitleLines = t('home.hero.titleLines')

  return (
    <>
      {activePerson && (
        <div
          className="leadership-modal-overlay"
          onClick={() => setActivePerson(null)}
        >
          <div
            className="leadership-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leadership-modal-name"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="leadership-modal__close"
              aria-label={t('home.modal.close')}
              onClick={() => setActivePerson(null)}
            >
              ×
            </button>
            <div className="leadership-modal__photo">
              <img src={activePerson.photo} alt={activePerson.name} />
            </div>
            <div className="leadership-modal__body">
              <h3 id="leadership-modal-name">{activePerson.name}</h3>
              <p className="leadership__role">{activePerson.role}</p>
              {activePerson.desc.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <section className="hero">
        <img className="hero__watermark" src={logo} alt="" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__eyebrow">{t('home.hero.eyebrow')}</p>
          <h1>
            {heroTitleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < heroTitleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero__tagline">{t('home.hero.tagline')}</p>
          <p className="hero__desc">{t('home.hero.desc')}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--solid">
              {t('home.hero.getInvolved')}
            </Link>
            <a href="#about" className="btn btn--outline">
              {t('home.hero.ourStory')}
            </a>
          </div>
        </div>
      </section>

      <section className="why">
        <p className="why__eyebrow">{t('home.why.eyebrow')}</p>
        <h2>{t('home.why.heading')}</h2>
        <div className="why__grid">
          {pillars.map((pillar) => (
            <div className="why__item" key={pillar.number}>
              <p className="why__number">{pillar.number}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__inner">
          <div className="about__intro">
            <div className="about__media">
              <img src={logo} alt="AAWBA" />
            </div>
            <div className="about__copy">
              <p className="about__eyebrow">{t('home.about.eyebrow')}</p>
              <h2>{t('home.about.heading')}</h2>
              <p>{t('home.about.desc')}</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-col">
              <h3>{t('home.about.missionVisionHeading')}</h3>
              <p>
                <strong>{t('home.about.missionLabel')}</strong> {t('home.about.missionText')}
              </p>
            </div>
            <div className="about__card-col">
              <p>
                <strong>{t('home.about.visionLabel')}</strong> {t('home.about.visionText')}
              </p>
            </div>
          </div>

          <div className="about__values">
            <h3>{t('home.about.valuesHeading')}</h3>
            <div className="about__values-grid">
              {values.map((value) => (
                <div className="about__value" key={value.title}>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about__banner">
            <p>{t('home.about.bannerP1')}</p>
            <p>{t('home.about.bannerP2')}</p>
          </div>
        </div>
      </section>

      <section className="events">
        <div className="events__inner">
          <div className="events__intro">
            <p className="events__eyebrow">{t('home.events.eyebrow')}</p>
            <h2>{t('home.events.heading')}</h2>
          </div>

          <div className="events__grid">
            {UPCOMING_EVENTS.map((event) => (
              <EventCard event={event} key={event.slug} />
            ))}
          </div>

          <div className="events__cta">
            <Link to="/activities" className="btn btn--solid">
              {t('home.events.exploreMore')}
            </Link>
          </div>
        </div>
      </section>

      <section id="leadership" className="leadership">
        <div className="leadership__inner">
          <div className="leadership__intro">
            <p className="leadership__eyebrow">{t('home.leadership.eyebrow')}</p>
            <h2>{t('home.leadership.heading')}</h2>
          </div>

          <div className="leadership__founder">
            <h3>{t('home.leadership.founderHeading')}</h3>
            <div className="leadership__board-grid leadership__founder-grid">
              <div className="leadership__board-member">
                <button
                  type="button"
                  className="leadership__board-photo"
                  onClick={() => setActivePerson(founder)}
                  aria-label={`View details for ${founder.name}`}
                >
                  <img src={founder.photo} alt={founder.name} />
                </button>
                <p className="leadership__board-name">{founder.name}</p>
                <p className="leadership__role">{founder.role}</p>
              </div>
            </div>
          </div>

          <div className="leadership__board">
            <h3>{t('home.leadership.boardHeading')}</h3>
            <div className="leadership__board-grid">
              {board.map((member) => (
                <div className="leadership__board-member" key={member.name}>
                  <button
                    type="button"
                    className="leadership__board-photo"
                    onClick={() => setActivePerson(member)}
                    aria-label={`View details for ${member.name}`}
                  >
                    <img src={member.photo} alt={member.name} />
                  </button>
                  <p className="leadership__board-name">{member.name}</p>
                  <p className="leadership__role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="leadership__staff">
            <h3>{t('home.leadership.staffHeading')}</h3>
            <div className="leadership__board-grid leadership__staff-grid">
              {staff.map((member) => (
                <div className="leadership__board-member" key={member.name}>
                  <button
                    type="button"
                    className="leadership__board-photo"
                    onClick={() => setActivePerson(member)}
                    aria-label={`View details for ${member.name}`}
                  >
                    <img src={member.photo} alt={member.name} />
                  </button>
                  <p className="leadership__board-name">{member.name}</p>
                  <p className="leadership__role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="leadership__groups">
            {leadershipGroups.map((group) => (
              <div className="leadership__group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
              </div>
            ))}
          </div>

          <div className="leadership__banner">
            <div>
              <h3>{t('home.leadership.governanceHeading')}</h3>
              <p>{t('home.leadership.governanceDesc')}</p>
            </div>
            <div className="leadership__banner-links">
              <p className="leadership__banner-link">{t('home.leadership.policiesLink')}</p>
              <p className="leadership__banner-link leadership__banner-link--gold">
                {t('home.leadership.joinBoardLink')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
