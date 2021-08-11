import Vue from "vue";
import Vuex from "vuex";

import Anima from "./modules/Anima.modules.js";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Anima,
  },
});
