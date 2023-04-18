<template>
  <v-toolbar color="transparent">
    <v-toolbar-title class="ml-4 text-h5">Iamdayy</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items variant="plain">
      <v-btn href="#skill" class="hidden-sm-and-down">Skill</v-btn>
      <v-btn href="#portfolio" class="hidden-sm-and-down">Portfolio</v-btn>
      <v-btn href="#contact" class="hidden-sm-and-down">Contact</v-btn>
    </v-toolbar-items>
    <v-toolbar-items variant="plain">
      <v-tooltip anchor="bottom" text="Skill">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            href="#skill"
            class="hidden-md-and-up"
            icon="mdi-lightbulb-outline"
          >
          </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip anchor="bottom" text="Portfolio">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            href="#portfolio"
            class="hidden-md-and-up"
            icon="mdi-creation"
          >
          </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip anchor="bottom" text="Contact">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            href="#contact"
            class="hidden-md-and-up"
            icon="mdi-account-outline"
          >
          </v-btn>
        </template>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigatorBarComp",
});
</script>
