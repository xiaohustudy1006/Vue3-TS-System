import { Module } from "vuex"
import type { ISystemState } from "./type"
import type { IRootState } from "@/store/type"
import { deletePageData, getPageList } from "@/network/main/system/system"
const nameUrlMap: any = {
  users: "/users/list",
  role: "/role/list",
  goods: "/goods/list",
  menu: "/menu/list"
}
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    getUsersList(state, list) {
      state.usersList = list
    },
    getUsersCount(state, userCount) {
      state.usersCount = userCount
    },
    getRoleList(state, list) {
      state.roleList = list
    },
    getRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    getGoodsList(state, list) {
      state.goodsList = list
    },
    getGoodsCount(state, roleCount) {
      state.goodsCount = roleCount
    },
    getMenuList(state, list) {
      state.menuList = list
    },
    getMenuCount(state, roleCount) {
      state.menuCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      // 获取偏移量和条数
      const pageName = payload.pageName
      const capitalName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      const pageUrl = nameUrlMap[pageName]
      // console.log(pageUrl, payload)
      // 发送请求
      // console.log(pageUrl)
      const pageRes = await getPageList(pageUrl, payload.queryInfo)
      // console.log(pageRes)
      const { list, totalCount } = pageRes.data
      commit(`get${capitalName}List`, list)
      commit(`get${capitalName}Count`, totalCount)
    },
    async deletePageData({ dispatch }, payload) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 调用删除网络请求
      const data = await deletePageData(pageUrl)
      console.log(data)
      // 重新请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
