import type { IFormType } from "@/components/huForm/type"
export const formConfig: IFormType = {
  size: "large",
  style: { padding: "5px 30px" },
  options: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    }
  ]
}
