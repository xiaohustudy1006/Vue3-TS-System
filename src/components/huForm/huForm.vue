<template>
  <div class="hu-form-box">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form label-width="100px" class="hu-form">
      <template v-for="item in data.options" :key="item.label">
        <el-form-item
          :style="data.style"
          :label="item.label"
          class="form-item"
          :class="{
            'large-item': data.size === 'large',
            'middle-item': data.size === 'middle',
            'small-item': data.size === 'small'
          }"
        >
          <template v-if="item.type === 'input'">
            <el-input
              :placeholder="item.placeholder"
              :model-value="modelValue[item.field]"
              @update:modelValue="handleDataChange($event, item.field)"
            ></el-input>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-select
              placeholder="请选择运动"
              style="width: 100%"
              :model-value="modelValue[item.field]"
              @update:modelValue="handleDataChange($event, item.field)"
            >
              <el-option
                v-for="sItem in item.sOptions"
                :key="sItem.value"
                :label="sItem.label"
                :value="sItem.value"
              ></el-option>
            </el-select>
          </template>
          <template v-else-if="item.type === 'datepicker'">
            <el-date-picker
              style="width: 100%"
              :model-value="modelValue[item.field]"
              @update:modelValue="handleDataChange($event, item.field)"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </template>
        </el-form-item>
      </template>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IFormType } from "./type"
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<IFormType>
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const handleDataChange = (value: any, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value })
    }
    return {
      handleDataChange
    }
  }
})
</script>

<style scoped lang="less">
.hu-form {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .form-item {
    flex: 1;
    padding: 5px 20px;
    box-sizing: border-box;
  }
  .large-item {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  .middle-item {
    width: 50%;
    min-width: 50%;
    max-width: 50%;
  }
  .small-item {
    width: 33%;
    min-width: 33%;
    max-width: 33%;
  }
}
</style>
