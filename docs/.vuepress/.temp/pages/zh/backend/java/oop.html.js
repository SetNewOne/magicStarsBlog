import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/java/oop.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/java/oop.html\",\"title\":\"面向对象编程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"面向对象编程\",\"icon\":\"java\",\"order\":3},\"readingTime\":{\"minutes\":1.7,\"words\":509},\"filePathRelative\":\"zh/backend/java/oop.md\"}")
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
