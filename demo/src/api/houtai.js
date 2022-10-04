import request from '../utils/request'

//获取菜单数据
const getMenuList = (data) => {
    return request({
        url: "/api/sysUser/getMenuList",
        method: "GET",
        data
    })
}

//获取菜单列表数据
const getPermissionList = (data) => {
    return request({
        url: "/api/sysUser/getPermissionList",
        method: "GET",
        data
    })
}

export default {
    getPermissionList,
    getMenuList
}