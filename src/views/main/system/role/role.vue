<template>
  <div class="role">
    <page-search
      :formConfig="formConfig"
      @resetEvent="handlerReset"
      @searchEvent="handlerSearch"
    ></page-search>
    <page-content
      ref="pageContent"
      :tableConfig="tableConfig"
      pageName="role"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageContent from "@/components/pageContent/pageContent.vue"
import { tableConfig } from "./tableConfig"
import pageSearch from "@/components/pageSearch/pageSearch.vue"
import { formConfig } from "./formConfig"
import { usePageSearch } from "@/hooks/usePageSearch" //hook
export default defineComponent({
  components: {
    pageSearch,
    pageContent
  },
  name: "role",
  setup() {
    const [pageContent, handlerReset, handlerSearch] = usePageSearch()

    return {
      tableConfig,
      formConfig,
      handlerReset,
      handlerSearch,
      pageContent
    }
  }
})
</script>

<style scoped lang="less"></style>
