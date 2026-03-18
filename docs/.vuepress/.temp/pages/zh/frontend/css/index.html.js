import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/css/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/css/\",\"title\":\"CSS 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CSS 入门\",\"icon\":\"css\",\"order\":2},\"readingTime\":{\"minutes\":1.08,\"words\":324},\"filePathRelative\":\"zh/frontend/css/README.md\"}")
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
