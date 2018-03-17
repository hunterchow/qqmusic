import Vue from 'vue'
import App from './App'
import router from './router'
import 'common/stylus/index.styl'
import 'babel-polyfill'
import fastclick from 'fastclick'
import store from './store'
import VueLazyload from 'vue-lazyload'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading:require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

//手机浏览器全屏
window.addEventListener('DOMContentLoaded', function() {
  var page = document.getElementById('app'),
    nav = window.navigator,
    ua = nav.userAgent,
    isFullScreen = nav.standalone;
  if (ua.indexOf('Android') !== -1) {
    // 56对应的是Android Browser导航栏的高度
    page.style.height = window.innerHeight + 56 + 'px';
  } else if (/iPhone|iPod|iPad/.test(ua)) {
    // 60对应的是Safari导航栏的高度
    page.style.height = window.innerHeight + (isFullScreen ? 0 : 60) + 'px'
  }
  setTimeout(scrollTo, 0, 0, 1);
}, false);
