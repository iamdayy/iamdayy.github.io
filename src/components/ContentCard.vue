<template>
  <v-card
    :variant="variant"
    rounded="xl"
    class="mx-auto"
    :color="color"
    max-width="344"
  >
    <v-img
      :src="content?.image"
      gradient="to bottom, rgba(6, 0, 107, 0.2), rgba(2, 2, 117, 0.2), rgba(0, 212, 255, 0.2)"
      height="200px"
      aspect-ratio="16/9"
      cover
    ></v-img>

    <v-card-title class="justify-center">{{ content?.title }}</v-card-title>

    <v-card-subtitle class="justify-center">{{
      content?.subtitle
    }}</v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>

        <v-card-text> {{ content?.descreption }} </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
interface Data {
  title: string;
  subtitle: string;
  image: string;
  descreption: string;
}
export default defineComponent({
  name: "ContentGrid",
  data() {
    return {
      show: false,
    };
  },
  props: {
    content: {} as PropType<Data>,
    variant: String as PropType<
      | "text"
      | "outlined"
      | "plain"
      | "contained"
      | "contained-flat"
      | "contained-text"
      | undefined
    >,
    color: String,
  },
});
</script>
