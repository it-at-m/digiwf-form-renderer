import Vue, {VNode} from 'vue';
import Dev from './serve.vue';
import vuetify from './plugins/vuetify'
import {VMultiFileInput} from "@muenchen/digiwf-multi-file-input";

Vue.config.productionTip = false
Vue.component('VMultiFileInput', VMultiFileInput);

new Vue({
    vuetify,
    render: (h): VNode => h(Dev),
}).$mount('#app');
