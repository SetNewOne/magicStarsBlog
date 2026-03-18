import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/python/web-frameworks.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/python/web-frameworks.html\",\"title\":\"Python Web 框架\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Python Web 框架\",\"icon\":\"python\",\"order\":5},\"readingTime\":{\"minutes\":0.92,\"words\":277},\"filePathRelative\":\"zh/backend/python/web-frameworks.md\"}")
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
