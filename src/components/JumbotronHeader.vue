<template>
  <v-card class="glassmorphismCard" rounded="xl">
    <v-card-text>
      <v-row dense align="center">
        <v-col cols="12" md="8">
          <v-card-title>
            <v-row dense>
              <!-- <v-col cols="12">
                <v-avatar
                  class="ml-4"
                  size="127px"
                  image="https://randomuser.me/api/portraits/men/21.jpg"
                ></v-avatar>
              </v-col> -->
              <v-col cols="12" class="d-flex justify-center">
                <div class="mx-auto">
                  <p class="text-h4">Hi,</p>
                  <div class="typewriter">
                    <p class="text-h4 font-weight-bold">
                      I'am
                      <span class="hidden-md-and-down">Muhammad </span>Dayyan
                      Syauqi <br />
                    </p>
                  </div>
                  <p>
                    <v-divider
                      thickness="3"
                      class="mr-6 border-opacity-50"
                    ></v-divider>
                    <span class="text-h5">a Junior web developer</span>
                    <v-divider></v-divider>
                    Fullstack developer based in Pekalongan, Indonesian I’am
                    coding with a clean and beautiful problem solving in mind.
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-card-title>
        </v-col>
        <v-col cols="4" class="hidden-md-and-down">
          <v-img
            :src="require('@/assets/image/web-designer-with-idea.gif')"
            class="mx-auto"
            width="320px"
          />
        </v-col>
      </v-row>
      <ContentGrid id="skill">
        <template v-slot:title>
          <span class="text-h5 text-white text-decoration-underline"
            >My Skills</span
          >
        </template>
        <v-col v-for="skill in skills" :key="skill.title" cols="12" md="4">
          <ContentCard :content="skill" variant="outlined" color="white" />
        </v-col>
      </ContentGrid>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContentGrid from "./ContentGrid.vue";
import ContentCard from "./ContentCard.vue";
import { skills } from "@/data/data";
export default defineComponent({
  name: "JumbotronHeaderComponent",
  components: {
    ContentGrid,
    ContentCard,
  },
  data() {
    return {
      show: "",
      skills,
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
.typewriter {
  max-width: fit-content;
}
.typewriter p {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
}
.typewriter p:nth-child(1) {
  width: 100%;
  border-right: 0.15em solid white;
  -webkit-animation: type 4s steps(40, end),
    blink 0.2s step-end infinite alternate;
  -webkit-animation-delay: 3s;
  animation: type 4s steps(40, end), blink 0.2s step-end infinite alternate;
  animation-delay: 3s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
@keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid white;
  }
  100% {
    border: none;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: 0.15em solid white;
  }
  100% {
    border: none;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: tranparent;
  }
}
.glassmorphismCard {
  background: rgba(255, 255, 255, 0.38);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  border: 1px solid rgba(255, 255, 255, 0.24);
}
</style>
