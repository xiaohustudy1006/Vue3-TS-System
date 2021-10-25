import { RouteRecordRaw } from "vue-router"
let firstMenu: any = null
export default function (menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 先拿到所有routes
  const routeFiles = require.context("../router/main", true, /\.ts/)
  const allKeys = routeFiles.keys()
  const allRoutes: RouteRecordRaw[] = []
  allKeys.forEach((key) => {
    const formatKey = key.split(".")[1]
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require("@/router/main" + formatKey + ".ts")
    allRoutes.push(route.default)
  })
  // 拿到所有route对象
  const getMenus = function (menus: any[]) {
    menus.forEach((item) => {
      if (item.type === 2) {
        const route = allRoutes.find((route) => route.path === item.url)
        if (route) {
          if (!firstMenu) {
            firstMenu = item
          }
          routes.push(route)
        }
      } else {
        getMenus(item.children)
      }
    })
  }
  getMenus(menus)
  return routes
}
export { firstMenu }
