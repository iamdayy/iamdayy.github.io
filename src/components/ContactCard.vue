<template>
  <v-card
    class="d-flex justify-center align-center"
    height="240"
    width="240"
    :href="item?.link"
  >
    <v-img class="mx-auto" size="90" :src="item?.image"></v-img>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContactCard",
  props: {
    item: Object,
  },
});
</script>
<style scoped>
.v-card {
  background: rgb(6, 0, 107);
  background: linear-gradient(
    180deg,
    rgb(95, 0, 107) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
}
</style>
