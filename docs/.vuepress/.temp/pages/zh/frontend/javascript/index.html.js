import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/\",\"title\":\"JavaScript 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JavaScript 入门\",\"icon\":\"js\",\"order\":3},\"readingTime\":{\"minutes\":1.92,\"words\":577},\"filePathRelative\":\"zh/frontend/javascript/README.md\"}")
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
