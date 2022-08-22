import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import ImageUploader from "vue-image-upload-resize";

Vue.config.productionTip = false;
Vue.use(ImageUploader);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
