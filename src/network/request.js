import axios from 'axios'


export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "https://123.207.32.32:8000",
    timeout: 5000
  })
  // 2.axios拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config =>{
    // 拦截成功
    // 1.拦截config中的一些不符合服务器要求的信息
    // 2.比如每次发送网络请求时,都希望在界面中显示一个正在请求的图标
    // 3.某些网络请求(比如登录(token)),必须携带一些特殊信息

    return config
  }, error => {
    // 拦截失败
  });

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    // 服务器响应成功
    return res.data
  }, error => {
    // 服务器响应失败
  })


  // 3.返回Promise
  return instance(config)
}

