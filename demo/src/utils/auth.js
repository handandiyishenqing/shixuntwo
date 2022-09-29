const USER_INFO = "userinfo"

//存储用户信息
export const setuserinfo = (userinfo) =>{
    localStorage.setItem(USER_INFO,JSON.stringify(userinfo))
}
//获取用户信息
export const getUserInfo = () => {
    if(localStorage.getItem(USER_INFO) === "undefined"){
      return "{}"
    }
    return JSON.parse(localStorage.getItem(USER_INFO) || "{}")
  }
// 删除用户信息
export const removeTokenAndUserInfo = () => {
    localStorage.removeItem(USER_INFO)
  }
  