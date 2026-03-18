import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/modules.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/modules.html\",\"title\":\"模块化编程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"模块化编程\",\"icon\":\"js\",\"order\":9},\"readingTime\":{\"minutes\":1.32,\"words\":396},\"filePathRelative\":\"zh/frontend/javascript/modules.md\"}")
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
