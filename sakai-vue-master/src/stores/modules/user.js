import { defineStore } from 'pinia';
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore('blog-user', {
  state: () => ({
    token: '',  // 存储用户的 token
    userInfo: {
      avatar: '',// 用户头像
      nickname: '',  // 用户昵称
    }  // 用户信息（可选）
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    clearToken() {
      this.token = '';
    },
    setUserInfo(info) {
      this.userInfo = info;
    },
    clearUserInfo() {
      this.userInfo = null;
    }
  },
  persist: piniaPersistConfig("blog-user")
});
