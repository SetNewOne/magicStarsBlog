import comp from "E:/myblog/docs/.vuepress/.temp/pages/deploy/DEPLOY.html.vue"
const data = JSON.parse("{\"path\":\"/deploy/DEPLOY.html\",\"title\":\"部署指南\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":1.59,\"words\":477},\"filePathRelative\":\"deploy/DEPLOY.md\"}")
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
