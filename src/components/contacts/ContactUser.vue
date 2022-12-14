<template>
  <div class="v-contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{ contactData.name }}</span>
    </div>
    <div class="user__status" :class="className"></div>
  </div>
</template>

<script>
export default {
  name: "ContactUser",
  props: {
    contactData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    className() {
      return {
        online: this.contactData.status === "online",
        offline: this.contactData.status === "offline",
      };
    },
  },
  methods: {
    toContactInfo() {
      this.$emit("to-contact-info");
    },
  },
};
</script>

<style></style>
