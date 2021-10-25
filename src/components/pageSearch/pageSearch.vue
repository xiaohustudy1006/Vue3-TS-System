<template>
  <div class="page-search">
    <div class="search">
      <hu-form :data="formConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="btn-box">
            <el-button icon="el-icon-refresh" @click="handleResetClick"
              >重置</el-button
            >
            <el-button
              type="primary"
              icon="el-icon-search"
              @click="handleSearchClick"
              >搜索</el-button
            >
          </div>
        </template>
      </hu-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import huForm from "@/components/huForm/huForm.vue"
export default defineComponent({
  components: {
    huForm
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  emits: ["resetEvent", "searchEvent"],
  setup(props, { emit }) {
    // 根据配置动态绑定数据
    const formItems = props.formConfig?.options ?? []
    const originFormData: any = {}
    for (const item of formItems) {
      originFormData[item.field] = ""
    }
    const formData = ref(originFormData)
    // 重置点击事件
    const handleResetClick = () => {
      formData.value = originFormData
      emit("resetEvent")
    }
    // 搜索点击事件
    const handleSearchClick = () => {
      emit("searchEvent", formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped lang="less">
.btn-box {
  text-align: right;
  padding: 10px 20px;
}
</style>
