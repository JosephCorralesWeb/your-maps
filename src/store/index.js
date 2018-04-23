import Vue from 'vue'
import Vuex from 'vuex'

import Maps from './modules/Maps'
import Markers from './modules/Markers'
import Icons from './modules/Icons'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iconSizeMultiplier: 1
  },
  modules: {
    Maps,
    Markers,
    Icons
  }
})
