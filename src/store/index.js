import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import actions from './actions'
import mutations from './mutations'
import m1 from './modules/m1.js'
import m2 from './modules/m2.js'
import createLogger from 'vuex/dist/logger'

Vue.use(vuex)

const  debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    m1,
    m2
  },
  plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})
