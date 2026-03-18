import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/commands.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/commands.html\",\"title\":\"OpenCode 常用命令\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 常用命令\",\"icon\":\"opencode\",\"order\":5},\"readingTime\":{\"minutes\":1.59,\"words\":478},\"filePathRelative\":\"zh/ai/opencode/commands.md\"}")
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
