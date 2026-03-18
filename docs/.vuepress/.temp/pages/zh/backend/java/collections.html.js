import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/java/collections.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/java/collections.html\",\"title\":\"集合框架\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"集合框架\",\"icon\":\"java\",\"order\":4},\"readingTime\":{\"minutes\":1.86,\"words\":557},\"filePathRelative\":\"zh/backend/java/collections.md\"}")
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
