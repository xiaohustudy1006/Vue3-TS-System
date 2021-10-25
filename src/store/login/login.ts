import { Module } from "vuex"
import type { IRootState } from "../type"
import { loginRequest, userInfoRequest, menuInfo } from "@/network/login/login"
import localCache from "@/utils/cache"
import router from "@/router"
import mapMenus from "@/utils/mapMenus"
import mapPermission from "@/utils/mapPermission"
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
  permissions: string[]
}

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, payload: string) {
      state.token = payload
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus: any) {
      state.userMenus = userMenus
      // 登录或者从本地获取userMenus时都会通过这，所以动态注册路由也可以通过这。封装一个工具函数
      // 动态添加路由
      const routes = mapMenus(userMenus)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
      // 获取该用户所有按钮权限
      const permissions = mapPermission(userMenus)
      state.permissions = permissions
      // console.log(permissions)
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      // 实现登录逻辑
      const result = await loginRequest(payload)
      if (result.code === 0) {
        const { id, token } = result.data
        commit("changeToken", token)
        localCache.setCache("token", token)

        // 请求用户信息
        const info = await userInfoRequest(id)
        commit("changeUserInfo", info.data)
        localCache.setCache("userInfo", info.data)

        // 请求用户菜单
        const menuData = await menuInfo(id)

        commit("changeUserMenu", menuData.data ?? [])
        localCache.setCache("userMenus", menuData.data ?? [])

        // 跳转到首页
        router.push("/main")
      }
    },
    phoneLoginAction({ commit }) {
      console.log("phone Login")
    },
    loadLocalLoginInfo({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenu", userMenus)
      }
    }
  }
}

export default loginModule
