import axios from 'axios';
import { useUserStore } from '@/stores/modules/user';  // 用户状态管理

const apiClient = axios.create({
  baseURL: 'http://localhost:5269',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();  // 获取用户 token
    // 添加 token 到请求头中
    if (userStore.token) {
      config.headers['Authorization'] = `Bearer ${userStore.token}`;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);


// export default {
//   get: (url, params) => apiClient.get(url, { params }),
//   post: (url, data) => apiClient.post(url, data).then(response => {
//     console.log('Login successful:', response);
//   })
//   .catch(error => {
//     console.error('Login error:', error.response ? error.response.data : error.message);
//   }),
//   put: (url, data) => apiClient.put(url, data),
//   delete: (url) => apiClient.delete(url),
// };

export default apiClient;

// import axios from "axios";
// import { ElMessage } from "element-plus";
// import router from "@/routers";
// import { useUserStore } from "@/stores/modules/user";
// import { showFullScreenLoading, tryHideFullScreenLoading } from "@/components/Loading/fullScreen";
// import { LOGIN_URL } from "@/config";
// import { checkStatus } from "./helper/checkStatus";
// import { AxiosCanceler } from "./helper/axiosCancel";

// const config = {
//   baseURL: import.meta.env.VITE_API_URL,
//   timeout: 10000,
//   withCredentials: true
// };

// const axiosCanceler = new AxiosCanceler();

// class RequestHttp {
//   constructor(config) {
//     this.service = axios.create(config);

//     this.service.interceptors.request.use(
//       (config) => {
//         const userStore = useUserStore();
//         config.cancel ??= true;
//         config.cancel && axiosCanceler.addPending(config);
//         config.loading ??= true;
//         config.loading && showFullScreenLoading();
//         if (config.headers && typeof config.headers.set === "function") {
//           config.headers.set("x-access-token", userStore.token);
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );

//     this.service.interceptors.response.use(
//       (response) => {
//         const { data, config } = response;
//         const userStore = useUserStore();
//         axiosCanceler.removePending(config);
//         config.loading && tryHideFullScreenLoading();

//         if (data.code === 401) {
//           userStore.setToken("");
//           router.replace(LOGIN_URL);
//           ElMessage.error(data.msg);
//           return Promise.reject(data);
//         }

//         if (data.code && data.code !== 200) {
//           ElMessage.error(data.msg);
//           return Promise.reject(data);
//         }

//         return data;
//       },
//       (error) => {
//         tryHideFullScreenLoading();
//         if (error.message.includes("timeout")) ElMessage.error("请求超时！请您稍后重试");
//         if (error.message.includes("Network Error")) ElMessage.error("网络错误！请您稍后重试");
//         if (error.response) checkStatus(error.response.status);
//         if (!window.navigator.onLine) router.replace("/500");
//         return Promise.reject(error);
//       }
//     );
//   }

//   get(url, params = {}, _object = {}) {
//     return this.service.get(url, { params, ..._object });
//   }

//   post(url, params = {}, _object = {}) {
//     return this.service.post(url, params, _object);
//   }

//   put(url, params = {}, _object = {}) {
//     return this.service.put(url, params, _object);
//   }

//   delete(url, params = {}, _object = {}) {
//     return this.service.delete(url, { params, ..._object });
//   }

//   download(url, params = {}, _object = {}) {
//     return this.service.post(url, params, { ..._object, responseType: "blob" });
//   }
// }

// export default new RequestHttp(config);