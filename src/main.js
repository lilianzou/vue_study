import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false;
Vue.use(ViewUI);


Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
