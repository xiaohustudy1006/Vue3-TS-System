<template>
  <div class="nav-header">
    <div class="collapse-btn" @click="collapseAction">
      <i :class="isFlod ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
    <div class="content">
      <div class="crumbs">
        <board-crumb />
      </div>
      <div class="user-box">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar
              class="avatar"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <span>{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出登录</el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "vuex"
import boardCrumb from "./breadCrumb.vue"
export default defineComponent({
  components: {
    boardCrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const store = useStore()
    const isFlod = ref(false)
    const name = computed(() => {
      return store.state.loginModule.userInfo.name
    })
    const collapseAction = () => {
      isFlod.value = !isFlod.value
      emit("foldChange", isFlod.value)
    }
    return {
      collapseAction,
      isFlod,
      name
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .collapse-btn {
    width: 32px;
    font-size: 28px;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    line-height: 48px;
    height: 48px;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      line-height: 48px;
      cursor: pointer;
      .avatar {
        margin-right: 10px;
      }
    }
  }
}
</style>
