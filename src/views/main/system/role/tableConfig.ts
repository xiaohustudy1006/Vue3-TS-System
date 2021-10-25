export const tableConfig = {
  tableOption: [
    { prop: "name", label: "角色名", minWidth: "120" },
    { prop: "intro", label: "权限介绍", minWidth: "100" },
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
  title: "角色列表",
  btnTitle: "新建角色",
  showIndex: true,
  showSelect: true
}
