// 为了让构造函数参数能传入拦截器 自己要实现一个接口
// 先定义新增interceptors的类型
import type { AxiosRequestConfig, AxiosResponse } from "axios"
export interface HuInterceptors<T = AxiosResponse> {
  requestHandler?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (err: any) => any
  responseHandler?: (config: T) => T
  responseCatch?: (err: any) => any
}
export interface HuRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HuInterceptors<T>
  showLoading?: boolean
}
