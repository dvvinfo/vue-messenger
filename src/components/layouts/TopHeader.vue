<template>
  <div class="v-header">
    <div class="v-header__back" @click="goBack">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="v-header__user-info">
      <span>Tom</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
