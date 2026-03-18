import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/es6.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/es6.html\",\"title\":\"ES6+ 新特性\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"ES6+ 新特性\",\"icon\":\"js\",\"order\":7},\"readingTime\":{\"minutes\":2.55,\"words\":766},\"filePathRelative\":\"zh/frontend/javascript/es6.md\"}")
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
