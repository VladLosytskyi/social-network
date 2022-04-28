import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "514803d4-d50a-4581-9403-b2efec04021f"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${ currentPage }&count=${ pageSize }`, {
      withCredentials: true
    })
      .then(response => response.data)
  }
}
