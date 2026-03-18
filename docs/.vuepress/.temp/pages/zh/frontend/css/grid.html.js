import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/css/grid.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/css/grid.html\",\"title\":\"Grid 布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Grid 布局\",\"icon\":\"css\",\"order\":6},\"readingTime\":{\"minutes\":2.05,\"words\":616},\"filePathRelative\":\"zh/frontend/css/grid.md\"}")
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
