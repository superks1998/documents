/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',       // Bao gồm tất cả các tệp trong src
    './docs/**/*.mdx',                   // Bao gồm các tài liệu MDX
    './blog/**/*.mdx',                   // Nếu bạn sử dụng blog
    './docusaurus.config.js',            // Bao gồm cấu hình Docusaurus nếu cần
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

