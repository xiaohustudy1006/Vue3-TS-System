import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import globalRegister from "./global/index"
import "normalize.css"
import "./assets/css/index.css"
import { setupStore } from "./store"
const app = createApp(App)
app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.mount("#app")
