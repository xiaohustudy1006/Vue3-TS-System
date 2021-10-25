let BASE_URL = ""
const TIME_OUT = 10000
if (process.env.NODE_ENV === "development") {
  // console.log("开发环境")
  BASE_URL = "http://152.136.185.210:5000"
} else if (process.env.NODE_ENV === "production") {
  // console.log("生产环境")
  BASE_URL = "http://coderwhy/development"
} else {
  // console.log("测试环境")
  BASE_URL = "http://coderwhy/test"
}

export default {
  BASE_URL,
  TIME_OUT
}
