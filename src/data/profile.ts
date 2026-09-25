// Public-facing facts follow the materials and updates supplied by the site owner.
export const profile = {
  name: 'Yunze Wei',
  chineseName: '卫蕴泽',
  preferredName: 'Rixton',
  role: 'Ph.D. student',
  university: 'Tsinghua University',
  institute: 'Institute for Network Sciences and Cyberspace',
  advisor: {
    name: 'Prof. Xia Yin',
    url: 'https://www.cs.tsinghua.edu.cn/csen/info/1309/4354.htm',
  },
  researchMentor: {
    name: 'Assoc. Researcher Xingang Shi',
    url: 'https://www.insc.tsinghua.edu.cn/inscen/info/1255/1087.htm',
  },
  location: 'Beijing, China',
  emails: ['weiyz23@mails.tsinghua.edu.cn', 'rixtonwei@gmail.com'],
  github: 'https://github.com/weiyz23',
};

// Fill each paper's url to enable its Webpage button; leave it empty for a placeholder.
export const publicationGroups = [
  {
    id: 'first-author-papers',
    title: 'Papers (As first author)',
    papers: [
      {
        id: 'parade',
        title: 'Parade: Unified and Data-Driven PrefixAS Semantics for BGP Anomaly Detection.',
        authors: ['Yunze Wei', 'Xingang Shi', 'Minghao Zhang', 'Zhaozhen Wang', 'Qiang Ma', 'Han Zhang', 'Yahui Li', 'Xia Yin'],
        venue: 'CCS’26',
        ratings: ['CCF A', 'TH-CPL A'],
        url: '',
      },
      {
        id: 'glassminer',
        title: 'GlassMiner: Mining Looking Glass Services via Structure-Semantics Fusion for Web Observability.',
        authors: ['Yunze Wei', 'Xingang Shi', 'Han Zhang', 'Tianyu Zhang', 'Yahui Li', 'Xia Yin'],
        venue: 'WWW’26',
        ratings: ['CCF A', 'TH-CPL A'],
        url: 'https://dl.acm.org/doi/10.1145/3774904.3792698',
      },
    ],
  },
  {
    id: 'other-publications',
    title: 'Publications (Other)',
    papers: [
      {
        id: 'acme-plus-plus',
        title: 'ACME++: A Secure Authorization Mechanism for ACME Clients in the Web PKI Ecosystem.',
        authors: ['Tianyu Zhang', 'Han Zhang', 'Yunze Wei', 'Yahui Li', 'Xingang Shi', 'Jilong Wang', 'Xia Yin'],
        venue: 'WWW’25',
        ratings: ['CCF A', 'TH-CPL A'],
        url: 'https://dl.acm.org/doi/10.1145/3696410.3714763',
      },
    ],
  },
];

export const researchProjects = [
  {
    title: 'Cyberspace security & situational awareness',
    period: 'Sep 2022–Present',
    description: 'Research on representation learning for routing anomaly detection, structure–semantics fusion and automatic prompt engineering for Looking Glass (LG) service discovery, and probabilistic models for router geolocation.',
  },
  {
    title: 'Knowledge graphs & graph computing',
    period: 'Jul 2021–Aug 2022',
    description: 'Developed intelligent education applications based on a K–12 education knowledge graph. During an internship at Haizhi Xingtu (海致星图), contributed to the development of AtlasGraph’s multi-machine cluster framework in Rust.',
  },
  {
    title: 'Industrial control & IoT security',
    period: 'Oct 2021–Aug 2022',
    description: 'Contributed to research and reporting on network attack models and defense frameworks for Winter Olympics venues, and collaborated on cross-medium command injection research for smart voice devices. Early research experience connecting security analysis, experimentation, and technical writing.',
  },
];

export const technicalSkills = [
  { label: 'Programming', detail: 'C / C++, Python, Rust, Java' },
  { label: 'Research methods', detail: 'Network measurement, graph learning, LLM-based agents' },
];

export const education = [
  {
    period: 'Aug 2023–Present',
    degree: 'Ph.D. student',
    school: 'Tsinghua University',
    department: 'Institute for Network Sciences and Cyberspace',
    advisor: profile.advisor,
    researchMentor: profile.researchMentor,
    detail: 'Coursework GPA: 4.00 / 4.00',
  },
  {
    period: 'Sep 2019–Jun 2023',
    degree: 'Bachelor of Engineering',
    school: 'Tsinghua University',
    department: 'Department of Computer Science and Technology',
    detail: 'GPA: 3.78 / 4.00',
  },
];

// Collective recognitions are excluded from personal honors.
// Conflicting month-level dates are deliberately shown at year precision.
export const honors = [
  {
    year: '2026',
    title: 'Outstanding Party Branch Secretary',
    original: '清华大学优秀党支部书记',
    issuer: 'Tsinghua University',
  },
  {
    year: '2023',
    title: 'Outstanding CPC Member',
    original: '清华大学优秀共产党员',
    issuer: 'Tsinghua University',
  },
  {
    year: '2022',
    title: 'Social Work Excellence Scholarship · Second Class',
    original: '社会工作优秀二等奖学金',
    issuer: 'Tsinghua University',
  },
  {
    year: '2022',
    title: 'Outstanding Student Leader',
    original: '清华大学优秀学生干部',
    issuer: 'Tsinghua University',
  },
  {
    year: '2022',
    title: 'Hua Luogeng Cup Mathematical Modeling Competition · Second Prize',
    original: '第二十八届清华大学“华罗庚杯”数学建模竞赛二等奖',
    issuer: 'Tsinghua University',
  },
  {
    year: '2022',
    title: 'Challenge Cup Student Innovation Competition · Third Prize',
    original: '第40届清华大学“挑战杯”科创竞赛三等奖',
    issuer: 'Tsinghua University',
  },
  {
    year: '2021',
    title: 'Volunteer Service Excellence Scholarship · First Class',
    original: '志愿公益优秀一等奖学金',
    issuer: 'Tsinghua University',
  },
  {
    year: '2021',
    title: 'Knowledge Graph Competition for Intelligent Education · First Place',
    original: '知识图谱智能教育应用大赛第一名',
    issuer: 'National Engineering Laboratory for Cyberlearning and Intelligent Technology',
  },
];

export const service = [
  {
    period: 'Jul 2026–Present',
    title: 'Deputy Head & Party-Building Counselor, CS Student Affairs Team',
    original: '计算机系学生组副组长、党建辅导员',
  },
  {
    period: 'Aug 2023–Jun 2026',
    title: 'Undergraduate Counselor · CS 2023 Entry Cohort',
    original: '计算机系计3年级带班辅导员',
  },
  {
    period: 'May 2025–May 2026',
    title: 'Secretary, CS 2023 Cohort Party Branch',
    original: '计算机系计3党支部书记',
  },
  {
    period: 'Sep 2022–Jun 2023',
    title: 'Secretary, CS 2019 Second Party Branch',
    original: '计9第二党支部书记',
  },
  {
    period: 'Sep 2021–Aug 2022',
    title: 'Youth League Branch Secretary, Class CS94',
    original: '计94班团支部书记',
  },
  {
    period: 'Jan 2021–Jan 2023',
    title: 'Head, Zhili College Chapter of the Student Marxist Studies Association',
    original: '致理书院学生马克思主义研究协会分会长',
  },
];

export const interests = [
  {
    title: 'Choral singing',
    role: 'A tenor (T2) in the first ensemble of the Advanced Choir of',
    organization: {
      name: 'the Student Art Troupe of Tsinghua University',
      url: 'https://www.arts.tsinghua.edu.cn/en/info/1131/1613.htm',
    },
    description: 'Performed at the New Year concert and university anniversary celebrations, as well as in “Beloved Homeland,” “Cantabile,” and other concerts.',
  },
  {
    title: 'Miles & minds',
    description: 'I enjoy long-distance running, fitness, and debate. Starting in 2020, I participated in campus marathons or winter mini-marathons for six consecutive years. My team won Tsinghua’s debate tournament for the 2019 incoming class, and I have represented the CST debate team in Tsinghua University debate competitions on multiple occasions.',
  },
  {
    title: 'Mentoring & collaboration',
    description: 'I enjoy helping students navigate research and university life, organizing teams, and bringing people together through student organizations and music.',
  },
];
