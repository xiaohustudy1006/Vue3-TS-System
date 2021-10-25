<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse">Vue3+TS</span>
    </div>
    <div class="nav-content">
      <el-menu
        class="el-menu-vertical"
        :default-active="defaultMenu"
        :unique-opened="false"
        text-color="#fff"
        background-color="#001529"
        active-text-color="#3498db"
        :collapse="collapse"
      >
        <template v-for="item in userMenus" :key="item.id">
          <!-- 二级菜单 -->
          <template v-if="item.type === 1">
            <el-submenu :index="item.id + ''">
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
              <!-- 遍历二级菜单中的子菜单 -->
              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item
                  :index="subitem.id + ''"
                  @click="menuClick(subitem)"
                >
                  <i v-if="subitem.icon" :class="submit.icon"></i>
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <!-- 一级菜单 -->
          <template v-else>
            <el-menu-item :index="item.id + ''">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "@/store/index"
import { useRouter, useRoute } from "vue-router"
import getAllMenus from "@/utils/getAllMenus"
import { firstMenu } from "@/utils/mapMenus"
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // store
    const store = useStore()
    // console.log(store.state.loginModule.userMenus)
    const userMenus = computed(() => {
      return store.state.loginModule.userMenus
    })

    // router handler
    const router = useRouter()
    const menuClick = (item: any) => {
      router.push(item.url)
    }

    // 动态获取路径所匹配的ID
    const defaultMenu = ref("2")
    const allRoutes = userMenus.value
    const currentRoute = useRoute()
    const matchMenu = getAllMenus(allRoutes, currentRoute.path as string) || {
      id: firstMenu.id
    }
    defaultMenu.value = matchMenu.id + ""
    // console.log(matchMenu)
    return { userMenus, menuClick, defaultMenu }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  .el-menu {
    width: 100%;
    border-right: none;
  }
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      margin: 0 10px;
    }
    span {
      line-height: 28px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
}
</style>
