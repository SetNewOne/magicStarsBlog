import { defineClientConfig } from "vuepress/client";
import SearchModal from "./components/SearchModal.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("SearchBox", SearchModal);
  },
});
