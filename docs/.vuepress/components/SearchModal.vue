<template>
  <div class="custom-search">
    <button class="custom-search-trigger" type="button" aria-label="打开搜索" @click="openModal">
      <span class="custom-search-trigger-icon" aria-hidden="true"></span>
      <span class="custom-search-trigger-text">搜索</span>
      <kbd>Ctrl K</kbd>
    </button>

    <Teleport to="body">
      <div v-if="isOpen" class="custom-search-overlay" @mousedown.self="closeModal">
        <section class="custom-search-dialog" role="dialog" aria-modal="true" aria-label="站内搜索">
          <div class="custom-search-input-row">
            <span class="custom-search-input-icon" aria-hidden="true"></span>
            <input
              ref="input"
              v-model="query"
              type="search"
              placeholder="搜索文章、目录或正文"
              autocomplete="off"
              spellcheck="false"
              @keydown.down.prevent="focusNext"
              @keydown.up.prevent="focusPrev"
              @keydown.enter.prevent="openFocusedResult"
              @keydown.esc.prevent="closeModal"
            />
            <button class="custom-search-close" type="button" aria-label="关闭搜索" @click="closeModal">Esc</button>
          </div>

          <div class="custom-search-body">
            <p v-if="!query.trim()" class="custom-search-empty">输入关键词开始搜索</p>
            <p v-else-if="results.length === 0" class="custom-search-empty">没有找到相关内容</p>

            <ul v-else class="custom-search-results">
              <li
                v-for="(result, index) in results"
                :key="result.link"
                :class="['custom-search-result', { active: focusIndex === index }]"
                :aria-selected="focusIndex === index"
                @mouseenter="focusIndex = index"
              >
                <a :href="result.link" @click.prevent="goToResult(result.link)">
                  <span class="custom-search-path">{{ result.breadcrumb }}</span>
                  <span class="custom-search-title">{{ result.title }}</span>
                  <span v-if="result.matchType" class="custom-search-header">{{ result.matchType }}</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRouteLocale, useRouter } from "vuepress/client";
import { isQueryMatched, useSearchIndex } from "@vuepress/plugin-search/client";

type SearchHeader = {
  title: string;
  slug: string;
  link: string;
  children?: SearchHeader[];
};

type SearchResult = {
  title: string;
  link: string;
  breadcrumb: string;
  matchType?: string;
};

type SearchPage = {
  path: string;
  title: string;
  headers: SearchHeader[];
  extraFields: string[];
};

const maxResults = 24;
const isOpen = ref(false);
const query = ref("");
const focusIndex = ref(0);
const input = ref<HTMLInputElement | null>(null);
const router = useRouter();
const routeLocale = useRouteLocale();
const searchIndex = useSearchIndex();

const pathLabels = [
  { prefix: "/zh/ai/opencode/", label: "人工智能 / OpenCode" },
  { prefix: "/zh/ai/", label: "人工智能" },
  { prefix: "/zh/backend/spring-boot/", label: "后端开发 / Spring Boot" },
  { prefix: "/zh/backend/python-web/", label: "后端开发 / Python Web" },
  { prefix: "/zh/backend/python/", label: "后端开发 / Python" },
  { prefix: "/zh/backend/java/", label: "后端开发 / Java" },
  { prefix: "/zh/backend/api-design/", label: "后端开发 / 接口设计" },
  { prefix: "/zh/backend/stability/", label: "后端开发 / 系统稳定性" },
  { prefix: "/zh/backend/security/", label: "后端开发 / 后端安全" },
  { prefix: "/zh/backend/testing-deploy/", label: "后端开发 / 测试和部署" },
  { prefix: "/zh/backend/", label: "后端开发" },
  { prefix: "/zh/frontend/javascript/", label: "前端开发 / JavaScript" },
  { prefix: "/zh/frontend/typescript/", label: "前端开发 / TypeScript" },
  { prefix: "/zh/frontend/engineering/", label: "前端开发 / 工程化" },
  { prefix: "/zh/frontend/performance/", label: "前端开发 / 性能优化" },
  { prefix: "/zh/frontend/browser/", label: "前端开发 / 浏览器和网络" },
  { prefix: "/zh/frontend/quality/", label: "前端开发 / 质量保障" },
  { prefix: "/zh/frontend/html/", label: "前端开发 / HTML" },
  { prefix: "/zh/frontend/css/", label: "前端开发 / CSS" },
  { prefix: "/zh/frontend/vue/", label: "前端开发 / Vue" },
  { prefix: "/zh/frontend/react/", label: "前端开发 / React" },
  { prefix: "/zh/frontend/", label: "前端开发" },
  { prefix: "/zh/database/", label: "数据库" },
  { prefix: "/zh/posts/", label: "博客文章" },
  { prefix: "/zh/about/", label: "关于博主" },
  { prefix: "/en/frontend/css/", label: "Frontend / CSS" },
  { prefix: "/en/frontend/", label: "Frontend" },
  { prefix: "/en/", label: "Home" },
];

const normalizeQuery = (value: string) => value.trim().toLowerCase();

const getPathLabel = (path: string) => pathLabels.find(({ prefix }) => path.startsWith(prefix))?.label ?? "站点";

const joinBreadcrumb = (...items: string[]) => {
  const cleanItems = items.map((item) => item.trim()).filter(Boolean);
  return cleanItems.filter((item, index) => cleanItems.indexOf(item) === index).join(" / ");
};

const getSectionBreadcrumb = (path: string) => getPathLabel(path);

const getPageBreadcrumb = (path: string, pageTitle: string) => joinBreadcrumb(getPathLabel(path), pageTitle);

const addResult = (results: SearchResult[], seenLinks: Set<string>, result: SearchResult) => {
  if (results.length >= maxResults || seenLinks.has(result.link)) return;
  seenLinks.add(result.link);
  results.push(result);
};

const addHeaderResults = (page: SearchPage, headers: SearchHeader[], keyword: string, results: SearchResult[], seenLinks: Set<string>) => {
  for (const header of headers) {
    if (results.length >= maxResults) return;

    if (isQueryMatched(keyword, [header.title])) {
      addResult(results, seenLinks, {
        title: header.title,
        link: `${page.path}${header.link}`,
        breadcrumb: getPageBreadcrumb(page.path, page.title),
        matchType: "小标题匹配",
      });
    }

    if (header.children?.length) {
      addHeaderResults(page, header.children, keyword, results, seenLinks);
    }
  }
};

const results = computed<SearchResult[]>(() => {
  const keyword = normalizeQuery(query.value);
  if (!keyword) return [];

  const list: SearchResult[] = [];
  const seenLinks = new Set<string>();
  const pages = searchIndex.value.filter((page) => page.pathLocale === routeLocale.value);

  for (const page of pages as SearchPage[]) {
    if (list.length >= maxResults) break;

    if (isQueryMatched(keyword, [page.title, ...page.extraFields])) {
      addResult(list, seenLinks, {
        title: page.title,
        link: page.path,
        breadcrumb: getSectionBreadcrumb(page.path),
        matchType: "页面或正文匹配",
      });
    }

    addHeaderResults(page, page.headers, keyword, list, seenLinks);
  }

  return list;
});

const openModal = () => {
  isOpen.value = true;
  focusIndex.value = 0;
  nextTick(() => input.value?.focus());
};

const closeModal = () => {
  isOpen.value = false;
};

const focusNext = () => {
  if (results.value.length === 0) return;
  focusIndex.value = focusIndex.value < results.value.length - 1 ? focusIndex.value + 1 : 0;
};

const focusPrev = () => {
  if (results.value.length === 0) return;
  focusIndex.value = focusIndex.value > 0 ? focusIndex.value - 1 : results.value.length - 1;
};

const goToResult = (link: string) => {
  router.push(link).then(() => {
    query.value = "";
    focusIndex.value = 0;
    closeModal();
  });
};

const openFocusedResult = () => {
  const result = results.value[focusIndex.value];
  if (result) goToResult(result.link);
};

const onKeydown = (event: KeyboardEvent) => {
  const isSearchShortcut = event.ctrlKey && (event.key.toLowerCase() === "k" || event.key === "/");
  if (isSearchShortcut) {
    event.preventDefault();
    openModal();
    return;
  }

  if (event.key === "Escape" && isOpen.value) closeModal();
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.documentElement.classList.remove("custom-search-open");
});

watch(query, () => {
  focusIndex.value = 0;
});

watch(isOpen, (open) => {
  document.documentElement.classList.toggle("custom-search-open", open);
});
</script>
