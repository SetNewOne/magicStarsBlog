import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/html/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/html/\",\"title\":\"HTML 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"HTML 入门\",\"icon\":\"html\",\"order\":1},\"readingTime\":{\"minutes\":1.69,\"words\":507},\"filePathRelative\":\"zh/frontend/html/README.md\"}")
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
