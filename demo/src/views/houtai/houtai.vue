<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div>
          <div class="leftdiv">Vue、ElementUI权限管理系统开发实战</div>
          <div class="rightdiv">
            <img src="../../assets/logo.png" alt="" />
            <div>
              <p>欢迎您，admin</p>
              <p @click="log">{{ date }}</p>
            </div>
          </div>
        </div>
      </el-header>

      <!-- 左侧菜单栏 -->
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$router.path" class="el-menu-vertical-demo">
            <template v-for="(item, index) in menuList">
              <el-submenu :key="index" :index="item.type" v-if="item.chilren !== []">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.label }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="(ele, i) in item.children" :key="i" :index="ele.path" :to="ele.path">
                    <template slot="title">
                      <i :class="ele.icon"></i>
                      <span>{{ ele.label }}</span>
                    </template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 右部 -->
          <el-main>
            <router-view></router-view>
          </el-main>
          <!-- 底部 -->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import houtaiApi from "@/api/houtai";
export default {
  name: "houtai",
  data() {
    return {
      // menuList: [],
      date: "",
      //菜单数据
      menuList: [
        {
          children: [
            {
              children: [],
              code: "sys:dept",
              createTime: 1586703509000,
              icon: "el-icon-copy-document",
              id: 33,
              isHome: 0,
              label: "机构管理",
              name: "departmentList",
              orderNum: 2,
              parentId: 17,
              path: "/departmentList",
              remark: "机构管理",
              type: "1",
              updateTime: 1586337139000,
              url: "/system/Department/DepartmentList",
            },
            {
              children: [],
              code: "sys:user",
              createTime: 1691464271000,
              icon: "el-icon-s-custom",
              id: 18,
              isHome: 0,
              label: "用户管理",
              name: "userList",
              orderNum: 3,
              parentId: 17,
              path: "/userList",
              type: "1",
              updateTime: 1691565988000,
              url: "/system/User/UserList",
            },
            {
              children: [],
              code: "sys:role",
              createTime: 1691464271000,
              icon: "el-icon-rank",
              id: 23,
              isHome: 0,
              label: "角色管理",
              name: "roleList",
              orderNum: 4,
              parentId: 17,
              path: "/roleList",
              type: "1",
              updateTime: 1691565988000,
              url: "/system/Role/RoleList",
            },
            {
              children: [],
              code: "sys:menu",
              createTime: 1691464271000,
              icon: "el-icon-menu",
              id: 28,
              isHome: 0,
              label: "权限管理",
              name: "menuList",
              orderNum: 5,
              parentId: 17,
              path: "/menuList",
              type: "1",
              updateTime: 1691565988000,
              url: "/system/Menu/MenuList",
            },
          ],
          code: "sys:manage",
          createTime: 1691464271000,
          icon: "el-icon-document",
          id: 17,
          isHome: 0,
          label: "系统管理",
          orderNum: 1,
          parentId: 0,
          path: "/system",
          type: "0",
          updateTime: 1691565988000,
        },
        {
          children: [
            {
              children: [],
              code: "sys:goodsCategory",
              createTime: 1586703272000,
              icon: "el-icon-s-data",
              id: 36,
              isHome: 0,
              label: "分类管理",
              name: "goodCategory",
              orderNum: 1,
              parentId: 34,
              path: "/goodCategory",
              type: "1",
              updateTime: 1586683590000,
              url: "/goods/goodsCategory/goodsCategoryList",
            },
            {
              children: [],
              code: "sys:goodsBrand",
              createTime: 1586683924000,
              icon: "el-icon-tickets",
              id: 37,
              isHome: 0,
              label: "品牌管理",
              name: "goodsBrand",
              orderNum: 2,
              parentId: 34,
              path: "/goodsBrand",
              type: "1",
              updateTime: 1586683924000,
              url: "/goods/goodsBrand/goodsBrandList",
            },
          ],
          code: "sys:goods",
          createTime: 1586702987000,
          icon: "el-icon-picture",
          id: 34,
          isHome: 0,
          label: "商品管理",
          name: "",
          orderNum: 2,
          parentId: 0,
          path: "/goods",
          type: "0",
          updateTime: 1586683323000,
        },
        {
          children: [
            {
              children: [],
              code: "sys:systemCode",
              createTime: 1587012282000,
              icon: "el-icon-files",
              id: 43,
              isHome: 0,
              label: "代码生成",
              name: "systemCode",
              orderNum: 0,
              parentId: 42,
              path: "/systemCode",
              type: "1",
              updateTime: 1586684646000,
              url: "/system/config/code",
            },
            {
              children: [],
              code: "sys:document",
              createTime: 1586748705000,
              icon: "el-icon-s-operation",
              id: 77,
              isHome: 0,
              label: "接口文档",
              name: "document",
              orderNum: 0,
              parentId: 42,
              path: "/document",
              type: "1",
              updateTime: 1586748705000,
              url: "/system/config/systemDocument",
            },
          ],
          code: "sys:systenConfig",
          createTime: 1586703003000,
          icon: "el-icon-receiving",
          id: 42,
          isHome: 0,
          label: "系统工具",
          name: "",
          orderNum: 3,
          parentId: 0,
          path: "/systenConfig",
          type: "0",
          updateTime: 1586684441000,
        },
      ],
    };
  },
  methods: {
    log() {
      console.log(this.menuList());;
    },
    //请求菜单数据
    async getMenuList() {
      const { data } = await houtaiApi.getPermissionList();
      // this.menuList = data.menuList;
      console.log(data.menuList);
    },
    gettime() {
      //年
      let year = new Date().getFullYear();
      //月
      let month = new Date().getMonth() + 1;
      //日
      let day = new Date().getDate();
      //时
      let hour = new Date().getHours();
      //分
      let minute = new Date().getMinutes();
      //秒
      let second = new Date().getSeconds();
      this.date =
        year +
        "." +
        month +
        "." +
        day +
        "   " +
        hour +
        ":" +
        minute +
        ":" +
        second;
    },
  },
  created() {
    this.getMenuList();
    this.gettime();
  },
};
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #167bd8;
  color: #fff;

  .leftdiv {
    float: left;
    margin-top: 20px;
  }

  .rightdiv {
    float: right;
    display: flex;
    margin-top: 10px;

    p {
      height: 20px;
    }
  }

  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
