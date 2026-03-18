import comp from "E:/myblog/docs/.vuepress/.temp/pages/en/frontend/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/frontend/\",\"title\":\"Frontend Development\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Frontend Development\",\"icon\":\"front\",\"order\":1},\"readingTime\":{\"minutes\":0.31,\"words\":93},\"filePathRelative\":\"en/frontend/README.md\"}")
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
