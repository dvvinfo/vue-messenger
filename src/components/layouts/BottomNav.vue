<template>
  <div class="v-bottom-nav">
    <router-link v-for="link in links" :key="link.iconsName" :to="link.url">
      <i class="material-icons"> {{ link.iconsName }} </i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      links: [
        {
          url: "/",
          iconsName: "person_pin",
        },
        {
          url: "/chat",
          iconsName: "chat",
        },
        {
          url: "/setting",
          iconsName: "settings",
        },
        {
          url: "/call",
          iconsName: "call",
        },
        {
          url: "/home",
          iconsName: "home",
        },
      ],
    };
  },
};
</script>

<style></style>
