import { App } from "vue"
import { formatUtcTime } from "@/utils/formatTime"
export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatTime(v: string) {
      return formatUtcTime(v)
    }
  }
}
