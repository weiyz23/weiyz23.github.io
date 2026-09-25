# 个人主页使用与维护说明

[返回个人介绍](../README.md) · [访问网站](https://weiyz23.github.io/)

本文记录个人主页的本地运行、项目结构、内容维护与 GitHub Pages 部署方式。网站使用 Astro 5 和 Tailwind CSS 4；栏目依次为个人介绍、Education、Publications、Research、Honors、Service 和 Beyond research。下文的命令和代码路径均以仓库根目录为基准。

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
├── README.md                  # 个人介绍与网站入口
├── about/how_to_use.md         # 项目使用与维护说明（本文）
├── .github/workflows/deploy.yml # GitHub Pages 构建与部署
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
role: 'A tenor (T2) in the first ensemble of the Advanced Choir of',
organization: {
  name: 'the Student Art Troupe of Tsinghua University',
  url: 'https://www.arts.tsinghua.edu.cn/en/info/1131/1613.htm',
},
```

页面最大宽度为 1080px，Beyond research 使用单列布局。教育经历在桌面按“时间 → 64px 校徽 → 教育信息”排列；手机端时间单独一行，下一行的 44px 校徽位于信息左侧。校徽由 Astro 在构建时生成适配屏幕密度的 WebP 图片。

更换个人照片时直接替换 `public/profile.jpg`。若修改文件名，在 `src/pages/index.astro` 同步更新图片路径，并保留 `import.meta.env.BASE_URL` 前缀。照片显示宽度为桌面 144px、手机端 88px，高度自适应。

## 构建与部署

```sh
npm run build
npm run preview
```

`npm run preview` 仅用于本地检查构建结果。网站为静态构建，不使用服务端 adapter；构建输出位于 `dist/`。

部署目标为 [weiyz23.github.io](https://weiyz23.github.io/)。`astro.config.mjs` 中的 `site` 设置为 `https://weiyz23.github.io`，使用根路径，不设置仓库名作为 `base` 前缀。favicon 和个人照片路径使用 `import.meta.env.BASE_URL`。

GitHub Pages 使用 `.github/workflows/deploy.yml` 部署：推送到 `main` 或手动触发 `workflow_dispatch` 后，工作流在 Node.js 24 环境依次执行 `npm ci`、`npm run build`，并将 `dist/` 发布到 GitHub Pages。

首次启用时，在仓库 [Settings → Pages](https://github.com/weiyz23/weiyz23.github.io/settings/pages) 的 **Build and deployment → Source** 中选择 **GitHub Actions**。之后推送到 `main` 即会自动部署；可在 [Actions 工作流页面](https://github.com/weiyz23/weiyz23.github.io/actions/workflows/deploy.yml) 查看结果，或通过 **Run workflow** 手动运行。

页脚年份在构建时生成，跨年后可手动运行工作流重新构建并发布。
