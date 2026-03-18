import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"博客文章\",\"icon\":\"blog\",\"order\":10},\"readingTime\":{\"minutes\":0.26,\"words\":77},\"filePathRelative\":\"zh/posts/README.md\"}")
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
