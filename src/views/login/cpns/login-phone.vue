<template>
  <div class="login-phone" :model="phone">
    <el-form>
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="code-box">
          <el-input class="code-input" v-model="phone.verifyCode"></el-input>
          <el-button class="code-btn" type="primary">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    const store = useStore()
    const loginAction = () => {
      store.dispatch("loginModule/phoneLoginAction")
    }
    const phone = reactive({
      number: "",
      verifyCode: ""
    })
    return {
      phone,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
.code-box {
  width: 100%;
  .code-input {
    width: 60%;
  }
  .code-btn {
    width: 35%;
    margin-left: 5%;
  }
}
</style>
