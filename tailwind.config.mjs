/** @type {import('tailwindcss').Config} */
export default {
  // 这一行至关重要：告诉 Tailwind 去 src 目录下找所有的文件
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}