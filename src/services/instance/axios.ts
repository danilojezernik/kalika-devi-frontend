import axios from 'axios'

axios.interceptors.response.use(
  (config: any) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    config.baseURL = 'http://localhost:3010/'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((response: any) => {
  return response.data
}, (error) => {
  if(error.response && error.response.status === 401) {
    localStorage.removeItem('token')
  }
  throw error
})