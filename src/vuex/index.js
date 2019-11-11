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
		paths: ['user','list']
	})],
});