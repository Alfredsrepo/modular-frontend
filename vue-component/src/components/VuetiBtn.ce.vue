<script setup lang="ts">
// import component files inside SFC or App
// import { VBtn } from "vuetify/lib/components/VBtn/index.mjs"; // Import VBtn
// import { VIcon } from "vuetify/lib/components/VIcon/index.mjs"; // Import VIcon
// import { VTooltip } from "vuetify/lib/components/VTooltip/index.mjs"; // Import VTooltip
// import { VComponentIcon, VSvgIcon, VLigatureIcon, VClassIcon } from 'vuetify/lib/composables/icons.mjs'
import { onMounted, toRefs, defineProps, defineEmits } from "vue";
import type { Ref } from "vue";

type BtnProps = {
  label?: Ref<string>;
  is_first?: Ref<boolean>;
  disabled?: Ref<boolean>;
};
const props = defineProps({
  label: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  is_first: { type: Boolean, default: false }
});

// const label: Ref<string> = toRef(props, "label");
const { label, disabled, is_first }: BtnProps = toRefs(props);
// const is_first: Ref<boolean> = toRef(props, "is_first") || false;
const emit = defineEmits(["click"]);

onMounted(() => {});

const onClick = ($event: Event) => {
  return emit("click", $event);
};

</script>

<template>
  <v-tooltip location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        flat
        :class="[is_first ? 'bottom-nav-first-btn ml-1 mr-1' : '__btn']"
        :disabled="disabled"
        @click="onClick"
        v-bind="props">
        <!-- v-tooltip:top="'top tip'"> -->
        <v-icon icon="mdi-warning" />
        <v-icon>mdi-warning</v-icon>
        <v-icon icon="md:home" />
        <v-icon icon="md:warning" />
        <v-icon color="grey-lighten-1">mdi-cart</v-icon>
        <template v-if="disabled && is_first"> </template>
        {{ label }}
        <!-- <v-tooltip activator="parent" location="top">Inside tooltip</v-tooltip> -->
      </v-btn>
    </template>
    <span>tooltip</span>
  </v-tooltip>
</template>
