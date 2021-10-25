import type { IFormType } from "@/components/huForm/type"
export const formConfig: IFormType = {
  size: "small",
  style: { padding: "5px 30px" },
  options: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      sOptions: [
        { label: "启用", value: 1 },
        { label: "禁用", value: 0 }
      ]
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
