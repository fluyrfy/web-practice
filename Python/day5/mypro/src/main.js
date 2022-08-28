import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import querystring from "querystring";
import qs from "qs";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios, qs);

Vue.axios.defaults.baseURL = "http://127.0.0.1:8000";

Vue.axios.defaults.headers = {
  "content-type": "application/x-www-form-urlencoded",
};

new Vue({
  render: (h) => h(App),
}).$mount("#app");
