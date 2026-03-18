import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/python/data-types.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/python/data-types.html\",\"title\":\"Python 数据类型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python 数据类型\",\"icon\":\"python\",\"order\":4},\"readingTime\":{\"minutes\":2.61,\"words\":782},\"filePathRelative\":\"zh/backend/python/data-types.md\"}")
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
