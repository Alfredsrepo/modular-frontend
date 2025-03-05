// CSP
// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

// ----------- Wrap Vuetify up ------------------

import CustomButton from "./components/VuetiBtn.ce.vue";
import { pluginsWrapper } from "./plugins";
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance
} from "vue";
import Wrapper from "vue-web-component-wrapper";

Wrapper({
  rootComponent: CustomButton,
  elementName: "cus-btn",
  plugins: pluginsWrapper,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  disableShadowDOM: true
});

// ----------------------- Wrap Whole app up by wrapper ------------------------------
// inline style is not working in csp

// import App from "./App.vue";
// import { pluginsWrapper } from "./plugins";
// import {
//   defineCustomElement as VueDefineCustomElement,
//   h,
//   createApp,
//   getCurrentInstance
// } from "vue";
// import CEWrapper from "vue-web-component-wrapper";
// // import style from '@/style.css?inline';

// CEWrapper({
//   rootComponent: App,
//   elementName: "ce-btn",
//   plugins: pluginsWrapper,
//   // cssFrameworkStyles: style,
//   VueDefineCustomElement,
//   h,
//   createApp,
//   getCurrentInstance,
//   // disableShadowDOM: true
// });

// ----------------------- Wrap component up by wrapper ------------------------------

// not working wiht vuetify since there is no app.use(vuetify)

// import MyComponent from "./components/MyComponent.ce.vue";

// import { defineCustomElementSFC } from 'vue-web-component-wrapper';

// const myElement = defineCustomElementSFC(MyComponent, { shadowRoot: true });
// customElements.define('my-element', myElement);
