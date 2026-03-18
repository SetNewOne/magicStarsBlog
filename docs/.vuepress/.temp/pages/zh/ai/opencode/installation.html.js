import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/installation.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/installation.html\",\"title\":\"OpenCode 安装\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 安装\",\"icon\":\"opencode\",\"order\":3},\"readingTime\":{\"minutes\":1.17,\"words\":351},\"filePathRelative\":\"zh/ai/opencode/installation.md\"}")
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
