import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/java/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/java/\",\"title\":\"Java 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 入门\",\"icon\":\"java\",\"order\":1},\"readingTime\":{\"minutes\":1.83,\"words\":550},\"filePathRelative\":\"zh/backend/java/README.md\"}")
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
