export const tableConfig = {
  tableOption: [
    { prop: "name", label: "商品名称", minWidth: "80" },
    { prop: "oldPrice", label: "原价格", minWidth: "80" },
    { prop: "newPrice", label: "现价格", minWidth: "80" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "image" },
    { prop: "status", label: "状态", minWidth: "80", slotName: "enable" },
    {
      prop: "createAt",
      label: "上架时间",
      minWidth: "160",
      slotName: "createAt"
    },
    { prop: "operate", label: "操作", minWidth: "100", slotName: "operate" }
  ],
  title: "商品列表",
  btnTitle: "添加商品",
  showIndex: true,
  showSelect: true
}
