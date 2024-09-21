import apiClient from "../index.js";

export const loginApi = (data) => {
    return apiClient.post('/auth/login', data);
}