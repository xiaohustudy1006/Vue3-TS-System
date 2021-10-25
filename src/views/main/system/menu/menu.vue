<template>
  <div class="menu">
    <page-content
      ref="pageContent"
      :tableConfig="tableConfig"
      pageName="menu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import pageContent from "@/components/pageContent/pageContent.vue"
import { tableConfig } from "./tableConfig"
export default defineComponent({
  components: { pageContent },
  name: "menuManage",
  setup() {
    return {
      tableConfig
    }
  }
})
</script>

<style scoped></style>
