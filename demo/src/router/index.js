import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: ()=> import('../views/login/login'),
  },
  {
    path: "/houtai",
    name: "houtai",
    component: ()=>import('../views/houtai/houtai'),
    children:[
      //机构管理
      {
        path:"/department",
        name:'department',
        component:() => import('../views/department/department')
      },
      //用户管理
      {
        path:"/userList",
        name:'userList',
        component:() => import('../views/userList/userList')
      },
      //角色管理
      {
        path:"/roleList",
        name:'roleList',
        component:() => import('../views/roleList/roleList')
      },
      //权限管理
      {
        path:"/menuList",
        name:'menuList',
        component:() => import('../views/menuList/menuList')
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
