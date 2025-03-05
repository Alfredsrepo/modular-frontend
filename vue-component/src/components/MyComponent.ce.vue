<template>
  <BaseComponent />
  <div id="test">Hello, Web Component!</div>
  <slot></slot>
</template>

<script lang="ts">
import BaseComponent from "./BaseComponent.ce.vue";
export default {
  components: { BaseComponent },
  name: "MyComponent"
};
</script>

<style scoped>
#test {
  color: blue;
}
</style>
