// Style Framework -- Import before application styles in case we require overwriting
import 'materialize-css/dist/css/materialize.min.css'

// Google's Material Icons Icon Font - A Materialize-css dependency
import 'material-icons/iconfont/material-icons.css'

// Google Maps Javascript API Component Library for Vue2 -- https://github.com/xkjyeah/vue-google-maps
import * as VueGoogleMaps from 'vue2-google-maps'

import Vue from 'vue'
import store from './store/index'
import App from './App'

Vue.config.productionTip = true

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR API KEY HERE',
    v: 3.32,
    libraries: 'places'
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
