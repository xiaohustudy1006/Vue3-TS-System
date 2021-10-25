import type { ILoginState } from "./login/login"
import type { ISystemState } from "./system/type"
export interface IRootState {
  name: string
}
interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
}
export type IStoreType = IRootState & IRootWithModule
