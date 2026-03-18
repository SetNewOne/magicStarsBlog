import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/javascript/events.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/javascript/events.html\",\"title\":\"事件处理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"事件处理\",\"icon\":\"js\",\"order\":6},\"readingTime\":{\"minutes\":1.93,\"words\":580},\"filePathRelative\":\"zh/frontend/javascript/events.md\"}")
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
