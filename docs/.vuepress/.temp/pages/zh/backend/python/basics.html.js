import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/python/basics.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/python/basics.html\",\"title\":\"Python 基础语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python 基础语法\",\"icon\":\"python\",\"order\":3},\"readingTime\":{\"minutes\":1.54,\"words\":463},\"filePathRelative\":\"zh/backend/python/basics.md\"}")
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
