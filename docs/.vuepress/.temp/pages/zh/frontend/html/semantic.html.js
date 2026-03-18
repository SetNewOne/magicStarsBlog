import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/html/semantic.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/html/semantic.html\",\"title\":\"语义化标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"语义化标签\",\"icon\":\"html\",\"order\":4},\"readingTime\":{\"minutes\":1.99,\"words\":598},\"filePathRelative\":\"zh/frontend/html/semantic.md\"}")
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
