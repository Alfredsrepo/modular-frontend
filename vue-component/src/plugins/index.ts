// Plugins
import vuetify from "./vuetify";
// import pinia from "@/stores";
// import router from '../router'

// Types
// import type { App } from "vue";

// export function registerPlugins(app: App) {
//   app
//     .use(vuetify)
//     .use(router)
//     .use(pinia)
// }

export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue;
    Vue.use(vuetify);
  }
};
