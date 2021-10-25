<template>
  <div class="bread-crumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadCrumbs" :key="item.url">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import mapBreadCrumbs from "@/utils/mapBreadCrumb"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
export default defineComponent({
  setup() {
    const breadCrumbs = computed(() => {
      const store = useStore()
      let userMenus = store.state.loginModule.userMenus
      const route = useRoute()
      return mapBreadCrumbs(userMenus, route.path)
    })
    return {
      breadCrumbs
    }
  }
})
</script>

<style scoped lang="less">
.bread-crumb {
  height: 100%;
  display: flex;
  align-items: center;
  .el-breadcrumb__item {
    font-weight: bold;
  }
}
</style>
