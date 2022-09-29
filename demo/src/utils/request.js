// import axios from 'axios'

// // 创建axios实例  返回实例对象service
// const  service = axios.create({
//     timeout:3000
// })

// // 请求拦截器
// service.interceptors.request.use(function (config) {

//     const token = getToken()
//     if (token) {
//         config.headers.token = token
//     }
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })


// //响应拦截器
// service.interceptors.response.use(
//     function(response) {
//         // 解决token错误或是过期
//         if (response.data.code === 206) {
//             removeToken()
            
//             // 跳转登录页面
//             if (router.history.current.fullPath !== '/login') {
//                 router.push('/login')
//             }
//         }
//         return response.data
//     },
//     function(error) {
//         return Promise.reject(error)
//     }
// )