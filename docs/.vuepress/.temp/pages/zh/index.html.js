import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"icon\":\"home\",\"heroImage\":\"/images/hero.svg\",\"heroText\":\"魔法星博客\",\"tagline\":\"探索前端 | 深耕后端 | 拥抱AI\",\"heroImageStyle\":{\"background\":\"linear-gradient(135deg, #667eea 0%, #764ba2 100%)\",\"border-radius\":\"12px\",\"box-shadow\":\"0 8px 32px rgba(102, 126, 234, 0.4)\"},\"actions\":[{\"text\":\"开始探索 →\",\"link\":\"/zh/frontend/\",\"type\":\"primary\",\"icon\":\"book\"},{\"text\":\"关于博主\",\"link\":\"/zh/about/\",\"type\":\"secondary\",\"icon\":\"person\"}],\"features\":[{\"title\":\"🚀 前端开发\",\"icon\":\"front\",\"details\":\"从零基础到实战，掌握 HTML、CSS、JavaScript，构建精美网页界面\",\"link\":\"/zh/frontend/\"},{\"title\":\"⚙️ 后端开发\",\"icon\":\"back\",\"details\":\"Java 与 Python 双线学习，打造坚实服务端开发能力\",\"link\":\"/zh/backend/\"},{\"title\":\"🤖 人工智能\",\"icon\":\"ai\",\"details\":\"深度探索 OpenCode AI 编程助手，提升开发效率与智能化水平\",\"link\":\"/zh/ai/\"},{\"title\":\"📝 技术博客\",\"icon\":\"blog\",\"details\":\"记录学习心得、分享项目经验、总结技术干货\",\"link\":\"/zh/posts/\"},{\"title\":\"💡 实战项目\",\"icon\":\"light\",\"details\":\"将理论知识转化为实际项目，积累项目开发经验\",\"link\":\"https://github.com/SetNewOne/magicStarsBlog\"},{\"title\":\"🌟 交流反馈\",\"icon\":\"community\",\"details\":\"欢迎提出建议和反馈，与志同道合的开发者共同成长\",\"link\":\"/zh/about/\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present 魔法星博客\",\"copyright\":false},\"readingTime\":{\"minutes\":1.72,\"words\":515},\"filePathRelative\":\"zh/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
