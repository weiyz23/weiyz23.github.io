# 使用说明

## 本地运行

使用 Node.js 24，在仓库根目录执行：

```sh
npm ci
npm run dev
```

默认地址为 `http://localhost:4321`；端口被占用时，以终端输出为准。

## 修改内容

- `src/data/profile.ts`：修改个人资料、联系方式、论文、教育和其他经历。
- `src/pages/index.astro`：修改首页介绍、导航、页面结构和元信息。
- `src/styles/global.css`：调整页面样式和响应式布局。
- `public/profile.jpg`：直接替换个人照片；更换文件名时同步修改首页图片路径。
- 论文链接填写对应论文的 `url`，合唱队链接填写 `interests` 中的 `organization.url`；留空时不可点击。

## 构建与预览

```sh
npm run build
npm run preview
```

构建结果在 `dist/`，预览地址以终端输出为准。
修改源码后，重新构建才能在预览中看到更新。

## GitHub Pages 发布

在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。

推送到 `main` 后，工作流会自动构建并发布 `dist/`。
可在 **Actions** 查看部署结果，也可通过 **Run workflow** 手动运行。

网站地址为 `https://weiyz23.github.io/`。
