import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/html/basic-tags.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/html/basic-tags.html\",\"title\":\"基础标签详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"基础标签详解\",\"icon\":\"html\",\"order\":2},\"readingTime\":{\"minutes\":2.1,\"words\":631},\"filePathRelative\":\"zh/frontend/html/basic-tags.md\"}")
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
