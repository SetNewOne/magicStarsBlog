import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/\",\"title\":\"后端开发概述\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"后端开发概述\",\"icon\":\"back\",\"order\":1},\"readingTime\":{\"minutes\":0.58,\"words\":175},\"filePathRelative\":\"zh/backend/README.md\"}")
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
