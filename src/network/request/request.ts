import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HuRequestConfig, HuInterceptors } from "./type"
import { ElLoading } from "element-plus"
import type { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

const DEFAULT_LOADING = true
// 自己封装的请求类
class HURequestClass {
  instance: AxiosInstance
  interceptors?: HuInterceptors
  elLoading?: ILoadingInstance
  showLoading: boolean

  constructor(config: HuRequestConfig) {
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.instance = axios.create(config)

    // config中取出的是对应的实例的拦截器
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestHandler,
      this.interceptors?.requestCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseHandler,
      this.interceptors?.responseCatch
    )

    // 所有实例都会有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        this.showLoading &&
          (this.elLoading = ElLoading.service({
            lock: true,
            text: "正在请求数据..."
          }))
        // console.log("所有实例都会有的拦截器: 请求成功")
        return config
      },
      (err) => {
        // console.log("所有实例都会有的拦截器: 请求失败")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.elLoading?.close()
        // console.log("所有实例都会有的拦截器: 响应成功")
        return res.data
      },
      (err) => {
        // 请求错误的全局处理
        if (err.response.status === 404) {
          // console.log("404错误")
        }
        // console.log("所有实例都会有的拦截器: 响应失败")
        return err
      }
    )
  }
  request<T = any>(config: HuRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading !== null && config.showLoading !== undefined) {
        this.showLoading = config.showLoading
      }
      // 判断是否想对这个请求做拦截，如果想就拦截下来做相应处理，并且把处理完后的config返回出去赋值给config参数，最后靠这个处理过的config去axios发送请求
      if (config.interceptors?.requestHandler) {
        config = config.interceptors.requestHandler(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 对单个请求的响应作处理
          if (config.interceptors?.responseHandler) {
            res = config.interceptors.responseHandler(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T = any>(config: HuRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T = any>(config: HuRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T = any>(config: HuRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
}

export default HURequestClass
