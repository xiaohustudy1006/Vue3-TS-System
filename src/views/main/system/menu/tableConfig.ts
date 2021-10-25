export const tableConfig = {
  tableOption: [
    { prop: "name", label: "菜单名称", minWidth: "100" },
    { prop: "type", label: "类型", minWidth: "60" },
    { prop: "url", label: "菜单URL", minWidth: "100" },
    { prop: "icon", label: "菜单图标", minWidth: "100" },
    { prop: "permission", label: "按钮权限", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "160",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "160",
      slotName: "updateAt"
    },
    { prop: "operate", label: "操作", minWidth: "100", slotName: "operate" }
  ],
  title: "菜单列表",
  btnTitle: "新建用户",
  showIndex: false,
  showSelect: false,
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  },
  hidePagination: true
}
