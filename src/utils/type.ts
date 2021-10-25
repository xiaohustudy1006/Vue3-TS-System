export interface IMenusType {
  id: number
  name: string
  type: number
  url: string
  icon?: string
  children: any[]
  sort: number
  parentId?: number
}
