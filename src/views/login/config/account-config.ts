export const rules = {
  account: [
    {
      required: true,
      trigger: "blur",
      message: "用户名不能为空"
    },
    {
      pattern: /^[a-zA-Z0-9]{4,10}$/,
      message: "用户名是长度在4-10之间的字母或数字"
    }
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      message: "密码不能为空"
    },
    {
      pattern: /^[a-zA-Z0-9]{3,}$/,
      message: "密码是长度在3以上的字母或数字"
    }
  ]
}
