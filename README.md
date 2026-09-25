# Yunze Wei (Rixton) — Personal Homepage

卫蕴泽（Yunze Wei）的英文个人学术主页，使用 Astro 5 和 Tailwind CSS 4 构建。内容依据本人提供的材料与更新整理。正文依次为个人介绍、Education、Publications、Research、Honors、Service 和 Beyond research。

## 本地运行

在项目根目录执行：

```sh
npm ci
npm run dev
```

开发服务器默认地址为 `http://localhost:4321`；端口被占用时，以终端输出为准。

已验证环境为 Node.js `24.13.0`、npm `11.6.2`。锁文件中的 Astro `5.17.1` 要求 Node.js `18.20.8 || ^20.3.0 || >=22.0.0` 和 npm `>=9.6.5`；Tailwind CSS 锁定为 `4.1.18`。`npm ci` 按 `package-lock.json` 安装依赖。

| 命令 | 作用 |
| --- | --- |
| `npm ci` | 按锁文件安装依赖 |
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建静态网站，输出到 `dist/` |
| `npm run preview` | 本地预览最近一次构建，需要先执行 build |
| `npm run astro -- --help` | 查看 Astro CLI 帮助 |

当前没有独立的测试、lint 或类型检查脚本，也没有安装 `@astrojs/check`。`npm run build` 不等同于完整的类型检查。

## 项目结构

```text
.
├── public/
│   ├── favicon.svg             # YW 字母标志
│   └── profile.jpg             # 首屏个人照片
├── src/
│   ├── assets/tsinghua-logo.png # 清华校徽
│   ├── components/ContactIcon.astro # 邮箱与 GitHub 内联 SVG 图标
│   ├── data/profile.ts         # 个人资料与各栏目数据
│   ├── pages/index.astro       # 首页结构、导航和元信息
│   └── styles/global.css       # 页面样式与 Tailwind CSS 入口
├── astro.config.mjs            # Astro 配置和 Tailwind Vite 插件
├── tsconfig.json               # Astro strict TypeScript 配置
├── package.json                # 依赖和 npm 脚本
└── package-lock.json            # 锁定依赖版本
```

Tailwind CSS 通过 `astro.config.mjs` 中的 `@tailwindcss/vite` 和 `src/styles/global.css` 中的 `@import "tailwindcss"` 接入。

## 内容维护

在 `src/data/profile.ts` 编辑个人资料和栏目数据，在 `src/pages/index.astro` 调整介绍、导航、页面结构及元信息，在 `src/styles/global.css` 调整样式。

| 数据 | 维护内容 |
| --- | --- |
| `profile` | 姓名、机构、导师、邮箱与 GitHub |
| `publicationGroups` | 第一作者与其他合作论文，保留完整作者顺序 |
| `researchProjects`、`technicalSkills` | 三组研究经历，以及 Programming 和 Research methods |
| `education` | 学位、院系、学校、时间和 GPA |
| `honors` | 已获个人奖项，不将申请项目或集体荣誉列为个人获奖 |
| `service` | 任期、英文职务和中文名称，每项独立展示，不附说明 |
| `interests` | 合唱、Miles & minds，以及 Mentoring & collaboration |

`profile.emails` 中的两个邮箱同时显示于首屏和页脚，`profile.github` 显示于首屏。链接前的图标由 `ContactIcon.astro` 提供，随文字颜色变化，并使用 `aria-hidden` 避免重复朗读。

`profile.advisor` 与 `profile.researchMentor` 的 `name`、`url` 分别维护 Prof. Xia Yin 与 Assoc. Researcher Xingang Shi 的名称和个人主页。首屏介绍及博士教育项共用这两份数据，名称均为带下划线的行内链接；博士教育项标注 Advisor、Research mentor，`detail` 保留课程 GPA。

论文在 `publicationGroups` 中维护 `id`、`title`、`authors`、`venue`、`ratings` 和 `url`。页面加粗本人姓名，标题后紧跟 Webpage 按钮；会议为深蓝底白字标签，CCF A 与 TH-CPL A 分别为中性描边标签。更新相应论文的 `url` 即可维护网页链接：

```ts
url: '', // 空字符串：禁用 Webpage；填入真实网页地址：可点击链接
```

合唱条目的 `role`、`organization` 和 `description` 组成同一段叙述，演出说明保留在 `description`。合唱队名称作为行内下划线链接；`organization.url` 为空时显示不可点击的占位文字。当前配置为：

```ts
role: 'A tenor (T2) in the first ensemble of',
organization: {
  name: 'the Student Art Troupe of Tsinghua University',
  url: 'https://space.bilibili.com/523118342',
},
```

页面最大宽度为 1080px，Beyond research 使用单列布局。教育经历在桌面按“时间 → 64px 校徽 → 教育信息”排列；手机端时间单独一行，下一行的 44px 校徽位于信息左侧。校徽由 Astro 在构建时生成适配屏幕密度的 WebP 图片。

更换个人照片时直接替换 `public/profile.jpg`。若修改文件名，在 `src/pages/index.astro` 同步更新图片路径，并保留 `import.meta.env.BASE_URL` 前缀。照片显示宽度为桌面 144px、手机端 88px，高度自适应。

## 构建与部署

```sh
npm run build
npm run preview
```

构建成功后，将 `dist/` 目录的内容上传到静态网站托管服务。当前没有自动部署工作流或服务端 adapter；`npm run preview` 仅用于本地检查构建结果，不是生产部署命令。页脚年份在构建时生成，跨年后需重新构建。

当前配置适用于网站根路径。正式域名可在 `astro.config.mjs` 设置为 `site`；部署到 `/my-portfolio/` 等子路径时，需要设置 `base`。favicon 和个人照片路径已使用 `import.meta.env.BASE_URL`，新增静态资源时需同样适配部署前缀。
