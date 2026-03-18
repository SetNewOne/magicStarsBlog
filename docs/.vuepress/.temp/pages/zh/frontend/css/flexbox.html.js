import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/css/flexbox.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/css/flexbox.html\",\"title\":\"Flexbox 布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Flexbox 布局\",\"icon\":\"css\",\"order\":5},\"readingTime\":{\"minutes\":2.51,\"words\":752},\"filePathRelative\":\"zh/frontend/css/flexbox.md\"}")
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
