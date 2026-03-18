import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/about/\",\"title\":\"关于博主\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于博主\",\"icon\":\"person\",\"order\":100},\"readingTime\":{\"minutes\":0.68,\"words\":205},\"filePathRelative\":\"zh/about/README.md\"}")
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
