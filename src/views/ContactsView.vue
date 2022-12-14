<template>
  <div>
    <contact-list />
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/contacts/ContactList.vue";
export default {
  name: "ContactsView",
  components: {
    ContactList,
  },
};
</script>
