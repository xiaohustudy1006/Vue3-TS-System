export const tableConfig = {
  tableOption: [
    { prop: "name", label: "用户名", minWidth: "120" },
    { prop: "realname", label: "姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号", minWidth: "150" },
    { prop: "enable", label: "状态", minWidth: "100", slotName: "enable" },
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
  title: "用户列表",
  btnTitle: "新建用户",
  showIndex: true,
  showSelect: true
}
