import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/\",\"title\":\"OpenCode 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 入门\",\"icon\":\"opencode\",\"order\":1},\"readingTime\":{\"minutes\":1.14,\"words\":343},\"filePathRelative\":\"zh/ai/opencode/README.md\"}")
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
