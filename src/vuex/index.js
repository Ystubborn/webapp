import Vue from 'vue';
import Vuex from 'vuex';
import user from "./modules/user";
import list from "./modules/list"
import detail from './modules/detail'
import VuexPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		user,
		list,
		detail
	},
	plugins: [VuexPersistedState({
		storage: window.sessionStorage,
		paths: ['user','list']
	})],
});