import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import BootstrapVue from 'bootstrap-vue';
// import * as VueGoogleMaps from 'vue2-google-maps';
import VueTouch from 'vue-touch';
import Trend from 'vuetrend';
import Toasted from 'vue-toasted';
import VueApexCharts from 'vue-apexcharts';

import layoutMixin from './mixins/layout';
import Widget from './components/Widget/Widget.vue';

Vue.use(BootstrapVue);
Vue.use(VueTouch);
Vue.use(Trend);
Vue.component('Widget', Widget);
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg',
//   },
// });
Vue.component('apexchart', VueApexCharts);
Vue.mixin(layoutMixin);
Vue.use(Toasted, {duration: 10000});

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
