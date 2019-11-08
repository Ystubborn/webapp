import Vue from 'vue';
import VuexPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex';

Vue.use(Vuex);
function generate(name) {
	return function (state, value) {
		state[name] = value || state[name];
	};
}
const store = {
	state: {
		userCtx: {
			uid: '',
			uname:'管理员',
			isLoginIn: !1,
			role:[]
		}
	},
	mutations: {},
	plugins: [VuexPersistedState({
		storage: window.sessionStorage,
		paths: ['userCtx']
	})]
};
Object.keys(store.state).forEach((key) => {
	store.mutations[key] = generate(key);
});
export default new Vuex.Store(store);