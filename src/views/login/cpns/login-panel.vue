<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="loginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
import localCache from "@/utils/cache"
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    const currentTab = ref<string>("account")
    isKeepPassword.value = localCache.getCache("keep") ?? false
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const loginClick = () => {
      currentTab.value === "account" &&
        accountRef.value?.loginAction(isKeepPassword.value)

      currentTab.value === "phone" && phoneRef.value?.loginAction()
    }
    return {
      isKeepPassword,
      accountRef,
      loginClick,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 400px;
  margin-bottom: 300px;
  .title {
    text-align: center;
  }
  .account-control {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 8px;
    width: 100%;
  }
}
</style>
