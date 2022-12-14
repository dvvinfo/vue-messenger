<template>
  <div class="v-main-wrapper">
    <top-header />
    <router-view />
    <bottom-nav />
  </div>
</template>

<script>
import TopHeader from "./layouts/TopHeader.vue";
import BottomNav from "./layouts/BottomNav.vue";
export default {
  name: "MainWrapper",
  components: {
    TopHeader,
    BottomNav,
  },
};
</script>

<style></style>
