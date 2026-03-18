import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/css/box-model.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/css/box-model.html\",\"title\":\"CSS 盒模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"CSS 盒模型\",\"icon\":\"css\",\"order\":4},\"readingTime\":{\"minutes\":2.33,\"words\":700},\"filePathRelative\":\"zh/frontend/css/box-model.md\"}")
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
