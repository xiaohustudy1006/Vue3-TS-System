<template>
  <div class="login-account">
    <el-form :rules="rules" :model="user" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus"
import { defineComponent, reactive, ref } from "vue"
import { rules } from "../config/account-config"
import localCache from "@/utils/cache"
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    const store = useStore()
    const user = reactive({
      account: localCache.getCache("account") ?? "",
      password: localCache.getCache("password") ?? ""
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (keepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 判断是否需要记住密码
          if (keepPassword) {
            localCache.setCache("keep", keepPassword)
            localCache.setCache("account", user.account)
            localCache.setCache("password", user.password)
          } else {
            localCache.deleteCache("keep")
            localCache.deleteCache("account")
            localCache.deleteCache("password")
          }
          // 开始进行登录验证
          store.dispatch("loginModule/accountLoginAction", { ...user })
        }
      })
    }
    return {
      user,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>
