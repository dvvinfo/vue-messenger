<template>
  <div class="v-contact-list">
    <contact-user
      v-for="contact in contacts"
      :key="contact.id"
      :contactData="contact"
      @to-contact-info="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import ContactUser from "./ContactUser.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "ContactList",
  components: {
    ContactUser,
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    ...mapActions(["FETCH_CONTACTS"]),
    toContactInfo(contact) {
      this.$router.push({
        name: "contact",
        query: { id: contact.id },
      });
    },
  },
  mounted() {
    this.FETCH_CONTACTS();
  },
};
</script>

<style></style>
