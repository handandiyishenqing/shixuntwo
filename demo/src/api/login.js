//登录页面
import request from '../utils/request'

export const handelLoginImg = () => {
    return request({
        url: '/api/sysUser/image',
        method:'post',
        responseType: 'blob'
    })
}

//获取用户信息
export const handelLogin = (data) => {
    return request({
        url: '/api/user/login',
        method:'post',
        data
    })
}