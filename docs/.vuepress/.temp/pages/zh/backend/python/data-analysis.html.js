import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/python/data-analysis.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/python/data-analysis.html\",\"title\":\"Python 数据分析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python 数据分析\",\"icon\":\"python\",\"order\":6},\"readingTime\":{\"minutes\":0.97,\"words\":290},\"filePathRelative\":\"zh/backend/python/data-analysis.md\"}")
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
