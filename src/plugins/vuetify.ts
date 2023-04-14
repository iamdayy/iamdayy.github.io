// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { mdi, aliases } from "vuetify/iconsets/mdi";
// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
