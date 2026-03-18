import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/async.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/async.html\",\"title\":\"异步编程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"异步编程\",\"icon\":\"js\",\"order\":8},\"readingTime\":{\"minutes\":1.42,\"words\":425},\"filePathRelative\":\"zh/frontend/javascript/async.md\"}")
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
