import { createStore, Store, useStore as useVuexStore } from "vuex"
import loginModule from "./login/login"
import { IRootState, IStoreType } from "./type"
import systemModule from "./system/system"
const store = createStore<IRootState>({
  state: () => {
    return {
      name: "coderwhy",
      age: 23
    }
  },
  mutations: {
    changeName(state) {
      state.name = "coder"
    }
  },
  getters: {},
  actions: {},
  modules: {
    loginModule,
    systemModule
  }
})

export function setupStore() {
  store.dispatch("loginModule/loadLocalLoginInfo")
}
export function useStore(): Store<IStoreType> {
  return useVuexStore<IStoreType>()
}
export default store
