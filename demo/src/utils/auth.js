const TOKEN = 'token'
const INFO = 'userInfo'

//获取token
export const setlotionToken = (token) => {
    localStorage.setItem(TOKEN, token)
}
//获取token
export const getlotionToken = () => {
    return localStorage.getItem(TOKEN || '')
}
//存储用户信息
export const setlotionuser = (user) => {
    localStorage.setItem(INFO, JSON.stringify(user))
}
//获取用户信息
export const getlotionuser = () => {
    return JSON.parse(localStorage.getItem(INFO || '{}'))
}
//删除本地数据
export const remove = () => {
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('INFO')
}