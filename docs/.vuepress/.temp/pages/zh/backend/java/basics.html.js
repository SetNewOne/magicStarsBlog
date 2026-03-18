import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/java/basics.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/java/basics.html\",\"title\":\"Java 基础语法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 基础语法\",\"icon\":\"java\",\"order\":2},\"readingTime\":{\"minutes\":1.46,\"words\":438},\"filePathRelative\":\"zh/backend/java/basics.md\"}")
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
