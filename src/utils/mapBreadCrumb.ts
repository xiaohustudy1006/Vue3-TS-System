import type { IMenusType } from "./type"
export default function (menus: IMenusType[], curRoute: string) {
  function getBreadCrumb(menus: IMenusType[], curRoute: string): IMenusType[] {
    let arr: any = []
    menus.forEach((menu) => {
      if (menu.type === 1) {
        if (curRoute.indexOf(menu.url) === -1) {
          return
        }
        if (menu.url === curRoute) {
          arr.push({ name: menu.name, url: menu.url })
          return
        } else {
          if (!menu.children) return
          arr.push({ name: menu.name, url: menu.url })
          const childArr = getBreadCrumb(menu.children, curRoute)
          arr = arr.concat(childArr)
        }
      } else if (menu.type === 2) {
        menu.url === curRoute && arr.push({ name: menu.name, url: menu.url })
      }
    })
    return arr
  }
  const breadArr = getBreadCrumb(menus, curRoute)
  // console.log(breadArr)
  return breadArr
}
