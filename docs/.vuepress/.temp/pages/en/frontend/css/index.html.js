import comp from "E:/myblog/docs/.vuepress/.temp/pages/en/frontend/css/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/frontend/css/\",\"title\":\"CSS Basics\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"CSS Basics\",\"icon\":\"css\",\"order\":1},\"readingTime\":{\"minutes\":0.33,\"words\":100},\"filePathRelative\":\"en/frontend/css/README.md\"}")
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
