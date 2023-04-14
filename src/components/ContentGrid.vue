<template>
  <v-row class="mt-4">
    <v-col cols="12" class="d-flex justify-center">
      <slot name="title" />
    </v-col>
    <slot />
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentGrid",
});
</script>
