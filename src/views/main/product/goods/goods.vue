<template>
  <div class="goods">
    <page-search
      :formConfig="formConfig"
      @resetEvent="handlerReset"
      @searchEvent="handlerSearch"
    />
    <page-content ref="pageContent" :tableConfig="tableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageContent from "@/components/pageContent/pageContent.vue"
import pageSearch from "@/components/pageSearch/pageSearch.vue"
import { tableConfig } from "./tableConfig"
import { formConfig } from "./formConfig"
import { usePageSearch } from "@/hooks/usePageSearch" //hook
export default defineComponent({
  components: {
    pageSearch,
    pageContent
  },
  name: "goods",
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

<style scoped></style>
