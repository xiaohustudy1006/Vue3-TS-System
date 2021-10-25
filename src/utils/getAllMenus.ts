import type { IMenusType } from "./type"
export default function (userMenus: IMenusType[], path: string) {
  function mapMenus(userMenus: IMenusType[]) {
    let getMenus: IMenusType[] = []
    userMenus.forEach((item) => {
      if (item.type === 1) {
        if (item.children) {
          const res = mapMenus(item.children)
          getMenus = getMenus.concat(res)
        }
      } else {
        // 不为1则不是二级菜单直接添加
        getMenus.push(item)
      }
    })
    return getMenus
  }
  const allMenus = mapMenus(userMenus)
  const matchMenu = allMenus.find((item) => {
    return item.url === path
  })
  return matchMenu
}
