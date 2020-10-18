import Vue from "vue";
import VueApollo from "vue-apollo";

import "@/components/globals";

import App from "./App.vue";
import router from "./router";
import { apolloClient } from "./apollo-client";

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
