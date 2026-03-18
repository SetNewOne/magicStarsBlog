import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/skills.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/skills.html\",\"title\":\"OpenCode 技能系统\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 技能系统\",\"icon\":\"opencode\",\"order\":6},\"readingTime\":{\"minutes\":1.72,\"words\":516},\"filePathRelative\":\"zh/ai/opencode/skills.md\"}")
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
