import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/\",\"title\":\"前端开发概述\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"前端开发概述\",\"icon\":\"front\",\"order\":1},\"readingTime\":{\"minutes\":0.63,\"words\":188},\"filePathRelative\":\"zh/frontend/README.md\"}")
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
