import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/dom.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/dom.html\",\"title\":\"DOM 操作\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"DOM 操作\",\"icon\":\"js\",\"order\":5},\"readingTime\":{\"minutes\":3.08,\"words\":924},\"filePathRelative\":\"zh/frontend/javascript/dom.md\"}")
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
