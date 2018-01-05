import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
// import user from './user'
import createLogger from 'vuex/dist/logger' // Vuex 自带一个日志插件用于一般的调试

Vue.use(Vuex)

// const debug = progress.env.NODE_ENV !== 'production'
const debug = false

export default new Vuex.Store({
  modules: {
    player
 //   user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
