import Vue from "vue";
import Vuex from "vuex";
import {getUserInfo,setuserinfo} from '../utils/auth'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userinfo: getUserInfo()|| ""
  },
  getters: {
    userinfo(state){
      console.log(JSON.stringify(state.userinfo));
      return state.userinfo
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
