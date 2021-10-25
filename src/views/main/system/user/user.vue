<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetEvent="handlerReset"
      @searchEvent="handlerSearch"
    />
    <page-content
      ref="pageContent"
      :tableConfig="tableConfig"
      pageName="users"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageSearch from "@/components/pageSearch/pageSearch.vue"
import pageContent from "@/components/pageContent/pageContent.vue"
import { formConfig } from "./formConfig"
import { tableConfig } from "./tableConfig"
import { usePageSearch } from "@/hooks/usePageSearch" //hook
export default defineComponent({
  components: {
    pageSearch,
    pageContent
  },
  name: "user",
  setup() {
    const [pageContent, handlerReset, handlerSearch] = usePageSearch()
    return {
      formConfig,
      tableConfig,
      handlerReset,
      handlerSearch,
      pageContent
    }
  }
})
</script>

<style scoped lang="less">
.user {
  width: 100%;
}
</style>
