import Vue from 'vue'
import Vuex from 'vuex'

import xxxx from './module/xxxx'
import xxx from './module/xxx'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		xxxx,
		xxx
	}
})