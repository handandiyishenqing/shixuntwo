import axios from 'axios'

import {getuserinfo } from './auth'

// 创建axios实例  返回实例对象service
const  service = axios.create({
    timeout:3000
})

// 请求拦截器
service.interceptors.request.use(function (config) {

    const token =state.getters.userinfo
    if (token) {
        return config
    }
}, function (error) {
    return Promise.reject(error)
})


//响应拦截器
service.interceptors.response.use(
    function(response) {
        // 解决token错误或是过期
        if (response.data.code < 400) {
        return response.data.data
        }
    },
    function(error) {
        return Promise.reject(error)
    }
)