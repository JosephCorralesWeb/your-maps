export default {
  state: {
    iconMap: {}
  },
  getters: {
    iconMap: state => state.iconMap
  },
  mutations: {
    setIconMap (state, map) {
      state.iconMap = map
    }
  },
  actions: {
    fetchIconMap ({commit}) {
      fetch('https://raw.githubusercontent.com/google/material-design-icons/master/iconfont/MaterialIcons-Regular.ijmap')
        .then(response => response.json())
        .then(jsonParsed => {
          commit('setIconMap', jsonParsed.icons)
        })
    }
  }
}
