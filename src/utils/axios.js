import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8080",
    timeout: 1000
  });


// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在请求发送之前做些什么
    // 例如添加认证 token
    // const token = store.state.auth.token;
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  }, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
// 添加响应拦截器
instance.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response;
  }, error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
export default instance;