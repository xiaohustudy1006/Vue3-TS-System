<template>
  <div class="pageContent">
    <table-content
      v-model:page="pageInfo"
      :dataCount="dataCount"
      :data="dataList"
      v-bind="tableConfig"
      :showCreate="isCreate"
    >
      <!-- 不需要改标签时只需要在配置中添加btnTitle属性就好 要改标签再插槽-->
      <!-- <template #headerTitle>
        <el-button>新建用户</el-button>
        <el-button icon="el-icon-refresh"></el-button>
      </template> -->
      <template #enable="allProps">
        <el-button size="mini" type="text">{{
          allProps.row.enable || allProps.row.status ? "已可用" : "已禁用"
        }}</el-button>
      </template>
      <template #createAt="allProps">
        {{ $filters.formatTime(allProps.row.createAt) }}
      </template>
      <template #updateAt="allProps">
        {{ $filters.formatTime(allProps.row.updateAt) }}
      </template>
      <template #operate="allProps">
        <el-button v-if="isUpdate" icon="el-icon-edit" type="text"
          >编辑</el-button
        >
        <el-button
          v-if="isDelete"
          icon="el-icon-delete"
          type="text"
          @click="handleDelete(allProps.row)"
          >删除</el-button
        >
      </template>
      <!-- <template #image="allProps">
        <el-image
          style="width: 60px; height: 60px"
          :src="allProps.row.imgUrl"
          :preview-src-list="[allProps.row.imgUrl]"
        >
        </el-image>
      </template> -->
      <template
        v-for="item in otherSlots"
        :key="item.props"
        #[item.slotName]="allProps"
      >
        <slot :name="item.slotName" :row="allProps.row"></slot>
      </template>
    </table-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue"
import tableContent from "@/components/tableContent/table.vue"
import { useStore } from "vuex"
import usePermission from "@/hooks/usePermission"
export default defineComponent({
  props: {
    tableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    tableContent
  },
  setup(props) {
    const store = useStore()
    // 查询权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")
    // 获取页面数据
    const recordQuery = ref(null)
    const pageInfo = ref({ pageSize: 10, currentPage: 1 })
    watch(pageInfo, () => {
      getPageData(recordQuery.value)
    })
    const getPageData = (query: any = {}) => {
      // console.log(query)
      if (!isQuery) return
      recordQuery.value = query
      store.dispatch("systemModule/getPageListAction", {
        pageName: props.pageName,
        // pageUrl: "/users/list",
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...query
        }
      })
    }
    getPageData()
    const dataList = computed(
      () => store.state.systemModule[props.pageName + "List"]
    )
    const dataCount = computed(
      () => store.state.systemModule[props.pageName + "Count"]
    )
    // 动态添加插槽
    // console.log(props.tableConfig.tableOption)
    const otherSlots = props.tableConfig.tableOption.filter((item: any) => {
      if (!item.slotName) return false
      if (item.slotName === "enable") return false
      if (item.slotName === "createAt") return false
      if (item.slotName === "updateAt") return false
      if (item.slotName === "operate") return false
      return true
    })
    // 按钮点击事件
    const handleDelete = (row: any) => {
      console.log(row)
      store.dispatch("systemModule/deletePageData", {
        pageName: props.pageName,
        id: row.id
      })
    }
    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleDelete
    }
  }
})
</script>

<style scoped lang="less"></style>
