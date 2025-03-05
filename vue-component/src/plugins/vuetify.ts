// CSP inline is required (into one file)
// import '@mdi/font/css/materialdesignicons.css';
// import 'vuetify/dist/vuetify.min.css';

// Vuetify related packages
import { createVuetify, type ThemeDefinition } from "vuetify";
import { VBtn, VIcon, VTooltip } from "vuetify/components";
// import { Tooltip } from "vuetify/directives";

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#27A5BD",
    primary2: "#EFA61D",
    money_color: "#FF5722",
    menu: "#073346",
    input_bg: "#D7F2F3",
    disable_color: "#EEEEEE",
    ripple_color: "#D2ECF1",
    alert_color: "#F50057",
    dlg_btn: "#007A96",
    icon_color: "#007A96"
  }
};

export default createVuetify({
  theme: {
    // defaultTheme: 'dark',
    defaultTheme: "customTheme",
    themes: {
      customTheme
    }
  },
  components: { VBtn, VIcon, VTooltip },
  // directives: { Tooltip }
});
