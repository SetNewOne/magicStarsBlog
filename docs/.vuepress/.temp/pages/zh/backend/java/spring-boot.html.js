import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/backend/java/spring-boot.html.vue"
const data = JSON.parse("{\"path\":\"/zh/backend/java/spring-boot.html\",\"title\":\"Spring Boot 入门\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Spring Boot 入门\",\"icon\":\"spring\",\"order\":5},\"readingTime\":{\"minutes\":1.75,\"words\":526},\"filePathRelative\":\"zh/backend/java/spring-boot.md\"}")
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
