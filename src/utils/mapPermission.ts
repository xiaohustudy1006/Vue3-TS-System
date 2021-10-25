export default function (userMenus: any[]) {
  const permissionArr: any[] = []
  const mapPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        mapPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissionArr.push(menu.permission)
      }
    }
  }
  mapPermission(userMenus)
  return permissionArr
}
