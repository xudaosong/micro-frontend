import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import Root from "./root";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#app2",
    template: `
      <div id="vue-app">
        Vue Home
      </div>
    `
  }
});

export const bootstrap = [vueLifecycles.bootstrap];

export const mount = [vueLifecycles.mount];

export const unmount = [vueLifecycles.unmount];
