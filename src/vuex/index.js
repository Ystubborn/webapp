/*
 * @Author: your name
 * @Date: 2019-11-08 22:13:35
 * @LastEditTime: 2019-11-10 18:24:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webapp/webapp/src/vuex/index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';
import user from "./modules/user";
import list from "./modules/list"
import VuexPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		user,
		list
	},
	plugins: [VuexPersistedState({
		storage: window.sessionStorage,
		paths: ['user']
	})],
});