type sizeT = "small" | "middle" | "large"
interface IItemType {
  field?: string
  type: string
  label?: string
  // 针对select
  sOptions?: any[]
  placeholder?: string
  // 针对其它选项
  otherOptions?: any
}
export interface IFormType {
  size: sizeT
  options: IItemType[]
  style?: any
}
