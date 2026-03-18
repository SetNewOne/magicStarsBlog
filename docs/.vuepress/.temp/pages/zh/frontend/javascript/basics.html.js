import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/basics.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/basics.html\",\"title\":\"JavaScript 基础语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JavaScript 基础语法\",\"icon\":\"js\",\"order\":4},\"readingTime\":{\"minutes\":2.61,\"words\":784},\"filePathRelative\":\"zh/frontend/javascript/basics.md\"}")
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
