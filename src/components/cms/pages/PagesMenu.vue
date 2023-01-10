<template>
  <ul class="page-menu">
    <li>
      <router-link to="/pages/add" class="new-items" @click="open"
        ><i class="fa-light fa-plus"></i>Pridať novú stránku</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    open() {
      this.$emit("open");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.page-menu {
  display: flex;
  align-self: flex-start;
  margin: 0rem 2.6rem 3rem 0.5%;
}
</style>
