<template>
  <div id="app">
    <main-wrapper />
  </div>
</template>
<script>
import MainWrapper from "@/components/MainWrapper.vue";
export default {
  components: {
    MainWrapper,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
