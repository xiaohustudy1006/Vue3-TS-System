// 网路请求统一出口
import HURequestClass from "./request/request"
import config from "./request/config"
import localCache from "@/utils/cache"
const huRequest = new HURequestClass({
  baseURL: config.BASE_URL,
  timeout: config.TIME_OUT,
  interceptors: {
    requestHandler(config) {
      // console.log("huRequest请求拦截成功")
      const token = localCache.getCache("token") ?? null
      if (token) {
        config.headers.Authorization = token
      }
      return config
    },
    requestCatch(err) {
      // console.log("请求拦截错误")
      return err
    }
    // responseHandler(config) {
    //   console.log("响应拦截成功")
    //   return config
    // },
    // responseCatch(err) {
    //   console.log("响应拦截错误")
    //   return err
    // }
  }
})

export default {
  huRequest
}
