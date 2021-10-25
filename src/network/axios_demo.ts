import axios from "axios"
// axios拦截器
axios.interceptors.request.use(
  (config) => {
    console.log("请求成功拦截")
    return config
  },
  (err) => {
    console.log("请求失败拦截")
    return err
  }
)

axios.interceptors.response.use(
  (res) => {
    console.log("响应成功拦截")
    return res
  },
  (err) => {
    console.log("响应失败拦截")
    return err
  }
)

// Promise本身是可以有类型的 泛型决定resolve的参数类型
// new Promise<string>((resolve, reject) => {
//   resolve("a,b,c")
// }).then((res) => {
//   const resArr = res.split(",")
//   console.log(resArr)
// })

// axios 的配置选项
axios.defaults.baseURL = "http://httpbin.org"
// axios.defaults.baseURL = "http://152.136.185.210:7878/api/hy66"
axios.defaults.timeout = 10000

axios
  .get("/get", {
    params: {
      name: "coder",
      age: 23
    }
  })
  .then((res) => {
    console.log(res)
  })

// axios
//   .post("/post", {
//     data: {
//       name: "coder",
//       age: 23
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// 多个请求，一起返回
// axios
//   .all([
//     axios.get("/get", { params: { name: "coder", age: 18 } }),
//     axios.post("/post", { data: { name: "why", age: 23 } })
//   ])
//   .then((res) => {
//     // 返回结果也是数组
//     console.log(res)
//   })
