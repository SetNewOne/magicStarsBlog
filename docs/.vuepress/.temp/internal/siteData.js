export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"魔法星博客\",\"description\":\"前端、后端、AI 技术学习笔记\",\"head\":[[\"meta\",{\"name\":\"author\",\"content\":\"魔法星\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}]],\"locales\":{\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"魔法星博客\",\"description\":\"前端、后端、AI 技术学习笔记\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"Magic Stars Blog\",\"description\":\"Frontend, Backend & AI Tech Blog\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
