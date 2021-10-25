import { useStore } from "@/store/index"
export default function usePermission(pageName: string, operateName: string) {
  const store = useStore()
  const permissions = store.state.loginModule.permissions
  const verifyPermission = `system:${pageName}:${operateName}`
  return !!permissions.find((item) => item === verifyPermission)
}
