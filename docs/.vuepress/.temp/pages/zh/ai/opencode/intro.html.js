import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/ai/opencode/intro.html.vue"
const data = JSON.parse("{\"path\":\"/zh/ai/opencode/intro.html\",\"title\":\"OpenCode 介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"OpenCode 介绍\",\"icon\":\"opencode\",\"order\":2},\"readingTime\":{\"minutes\":1.5,\"words\":451},\"filePathRelative\":\"zh/ai/opencode/intro.md\"}")
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
