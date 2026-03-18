import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/python/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/python/\",\"title\":\"Python 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python 入门\",\"icon\":\"python\",\"order\":2},\"readingTime\":{\"minutes\":1.91,\"words\":574},\"filePathRelative\":\"zh/backend/python/README.md\"}")
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
