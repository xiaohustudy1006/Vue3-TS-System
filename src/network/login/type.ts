export interface IPayloadType {
  account: string
  password: string
}
export interface IResType {
  id: number
  name: string
  token: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
