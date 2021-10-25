import network from "../index"
const { huRequest } = network
import { IPayloadType, IDataType, IResType } from "./type"
export function loginRequest(payload: IPayloadType) {
  const data = {
    name: payload.account,
    password: payload.password
  }
  return huRequest.post<IDataType<IResType>>({
    url: "/login",
    data
  })
}

export function userInfoRequest(id: number) {
  return huRequest.get<IDataType>({
    url: `/users/${id}`,
    showLoading: false
  })
}

export function menuInfo(id: number) {
  return huRequest.get<IDataType>({
    url: `/role/${id}/menu`,
    showLoading: false
  })
}
