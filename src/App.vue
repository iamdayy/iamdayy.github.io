<template>
  <v-app full-height>
    <NavigatorBar />
    <v-main>
      <v-container fluid>
        <JumbotronHeader />
        <ContentGrid>
          <template v-slot:title>
            <span class="text-h3 text-white text-decoration-underline"
              >My Portfolio Check</span
            >
          </template>
          <v-col
            v-for="portfolio in portfolios"
            :key="portfolio.title"
            cols="4"
          >
            <ContentCard :content="portfolio" />
          </v-col>
        </ContentGrid>
      </v-container>
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigatorBar from "./components/NavigatorBar.vue";
import JumbotronHeader from "./components/JumbotronHeader.vue";
import FooterBar from "@/components/FooterBar.vue";
import ContentGrid from "./components/ContentGrid.vue";
import ContentCard from "./components/ContentCard.vue";
export default defineComponent({
  name: "App",
  components: {
    NavigatorBar,
    JumbotronHeader,
    FooterBar,
    ContentGrid,
    ContentCard,
  },

  data() {
    return {
      show: false,
      portfolios: [
        {
          title: "",
          subtitle: "",
          image: "",
          descreption: "",
        },
        {
          title: "",
          subtitle: "",
          image: "",
          descreption: "",
        },
        {
          title: "",
          subtitle: "",
          image: "",
          descreption: "",
        },
      ],
    };
  },
});
</script>
<style>
.v-application {
  background: rgb(6, 0, 107);
  background: linear-gradient(
    0deg,
    rgba(6, 0, 107, 1) 0%,
    rgba(2, 2, 117, 1) 10%,
    rgba(0, 212, 255, 1) 100%
  );
}

.v-container {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='1200' preserveAspectRatio='none' viewBox='0014401200'%3e%3cg clip-path='url(%26quot%3b%23SvgjsClipPath1199%26quot%3b)' fill='none'%3e%3ccircle r='75.26' cx='685.41' cy='138.87' fill='url(%23SvgjsLinearGradient1200)'%3e%3c/circle%3e%3ccircle r='31.795' cx='1141.44' cy='830.15' fill='url(%23SvgjsLinearGradient1201)'%3e%3c/circle%3e%3ccircle r='54.14' cx='463' cy='271.63' fill='url(%23SvgjsLinearGradient1202)'%3e%3c/circle%3e%3ccircle r='62.495' cx='552.23' cy='1149.79' fill='url(%23SvgjsLinearGradient1203)'%3e%3c/circle%3e%3ccircle r='44.675' cx='551.36' cy='414.37' fill='url(%23SvgjsLinearGradient1204)'%3e%3c/circle%3e%3ccircle r='45.435' cx='698.3' cy='506.97' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='47.795' cx='1096.11' cy='225.75' fill='url(%23SvgjsLinearGradient1205)'%3e%3c/circle%3e%3ccircle r='64.405' cx='807.48' cy='928.56' fill='url(%23SvgjsLinearGradient1206)'%3e%3c/circle%3e%3ccircle r='34.38' cx='485.07' cy='447.06' fill='url(%23SvgjsLinearGradient1207)'%3e%3c/circle%3e%3ccircle r='109.935' cx='260.35' cy='1082.31' fill='url(%23SvgjsLinearGradient1208)'%3e%3c/circle%3e%3ccircle r='109.985' cx='925.54' cy='214.2' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='48.95' cx='233.83' cy='200.04' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='72.465' cx='978.77' cy='253.21' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='90.025' cx='630.48' cy='512.83' fill='%2343468b'%3e%3c/circle%3e%3ccircle r='64.9' cx='420.58' cy='301.71' fill='url(%23SvgjsLinearGradient1209)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cclipPath id='SvgjsClipPath1199'%3e%3crect width='1440' height='1200' x='0' y='0'%3e%3c/rect%3e%3c/clipPath%3e%3clinearGradient x1='534.89' y1='138.87' x2='835.9300000000001' y2='138.87' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1200'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1077.8500000000001' y1='830.15' x2='1205.0300000000002' y2='830.15' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1201'%3e%3cstop stop-color='%23f29b7c' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%237e6286' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='354.72' y1='271.63' x2='571.28' y2='271.63' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1202'%3e%3cstop stop-color='%23e298de' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23484687' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='427.24' y1='1149.79' x2='677.22' y2='1149.79' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1203'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='462.01' y1='414.37' x2='640.71' y2='414.37' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1204'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='1000.5199999999999' y1='225.75' x2='1191.6999999999998' y2='225.75' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1205'%3e%3cstop stop-color='%2384b6e0' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23464a8f' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='678.6700000000001' y1='928.56' x2='936.2900000000001' y2='928.56' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1206'%3e%3cstop stop-color='%23ab3c51' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%234f4484' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='416.31' y1='447.06' x2='553.83' y2='447.06' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1207'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='40.48000000000002' y1='1082.31' x2='480.22' y2='1082.31' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1208'%3e%3cstop stop-color='%2332325d' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%23424488' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='290.78' y1='301.71' x2='550.38' y2='301.71' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1209'%3e%3cstop stop-color='%23f29b7c' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='%237e6286' offset='0.9'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
</style>
