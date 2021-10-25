<template>
  <div class="table">
    <div class="content">
      <div class="title" v-if="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="header">
        <slot name="headerTitle">
          <el-button v-if="showCreate">{{ btnTitle }}</el-button>
          <el-button icon="el-icon-refresh"></el-button>
        </slot>
      </div>
      <el-table
        :data="data"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        v-bind="childrenProps"
      >
        <el-table-column
          v-if="showSelect"
          type="selection"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          v-if="showIndex"
          type="index"
          label="序号"
          width="80"
          align="center"
        ></el-table-column>
        <template v-for="item in tableOption" :key="item.prop">
          <el-table-column
            v-bind="item"
            align="center"
            :show-overflow-tooltip="true"
          >
            <template v-slot="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <div class="footer">
        <slot name="footer">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataCount"
            :hide-on-single-page="hidePagination"
          >
            >
          </el-pagination>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    dataCount: {
      type: Number,
      default: 0
    },
    tableOption: {
      type: Array,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showSelect: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    btnTitle: {
      type: String
    },
    page: {
      type: Object,
      default: () => ({ pageSize: 10, currentPage: 1 })
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    hidePagination: {
      type: Boolean,
      default: false
    },
    showCreate: {
      type: Boolean,
      default: false
    }
  },
  emits: ["selectionChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectionChange = (v: any) => {
      console.log(v)
      emit("selectionChange", v)
    }
    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.content {
  border-top: 15px solid #f5f5f5;
  padding: 20px;
  .header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
  .title {
    margin: 10px 0;
  }
  .footer {
    margin-top: 20px;
  }
}
</style>
