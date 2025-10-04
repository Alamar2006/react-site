import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '643b3e55-e9e4-4bdb-a879-eb4f43793c47'
  }
})

export const getUsers = (currentPage,pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(res => res.data)
}

export const followUsers = (userId) => {
  return instance.post(`follow/${userId}`).then(res => res.data);
}

export const unfollowUsers = (userId) => {
  return instance.delete(`follow/${userId}`).then(res => res.data);
}

export const getProfile = (userId) => {
  return instance.get(`profile/` + userId)
}

export const authAPI = () => {
  return instance.get(`auth/me`)
}
