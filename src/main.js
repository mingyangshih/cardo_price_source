//  eslint absolute path should set before relative path
import Vue from 'vue';
import 'bootstrap';
import $ from 'jquery';
// vue type plugin
import VueTyperPlugin from 'vue-typer';
// vee validate
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import store from './store';

window.$ = $;
// vue type plugin
Vue.use(VueTyperPlugin);
// vee validate
Vue.component('ValidationProvider', ValidationProvider);
extend('email', {
  ...email,
  message: messages.email,
});
// Override the default message.
extend('required', {
  ...required,
  message: messages.required,
});
extend('minmax', {
  validate: (value, args) => {
    const { length } = value;
    return length >= args.min && length <= args.max;
  },
  params: ['min', 'max'],
  message: '有字數限制',
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
