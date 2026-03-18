import comp from "E:/myblog/docs/.vuepress/.temp/pages/zh/frontend/html/forms.html.vue"
const data = JSON.parse("{\"path\":\"/zh/frontend/html/forms.html\",\"title\":\"HTML 表单\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"HTML 表单\",\"icon\":\"form\",\"order\":3},\"readingTime\":{\"minutes\":1.8,\"words\":540},\"filePathRelative\":\"zh/frontend/html/forms.md\"}")
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
