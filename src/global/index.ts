import registerElement from "./registerElement"
import registerProperties from "./registerProperties"
import { App } from "vue"

export default function (app: App): void {
  registerElement(app)
  registerProperties(app)
}
