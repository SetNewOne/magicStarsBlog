import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/quickstart.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/quickstart.html\",\"title\":\"OpenCode 快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 快速开始\",\"icon\":\"opencode\",\"order\":4},\"readingTime\":{\"minutes\":1.8,\"words\":541},\"filePathRelative\":\"zh/ai/opencode/quickstart.md\"}")
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
