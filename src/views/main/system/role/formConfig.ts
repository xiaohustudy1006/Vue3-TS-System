import type { IFormType } from "@/components/huForm/type"
export const formConfig: IFormType = {
  size: "small",
  style: { padding: "5px 30px" },
  options: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "权限介绍",
      placeholder: "请输入权限介绍"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建日期",
      otherOptions: {
        type: "datarange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间"
      }
    }
  ]
}
