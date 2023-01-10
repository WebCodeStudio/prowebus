<template>
  <ul class="menus-menu">
    <li>
      <router-link to="/menus/add" class="new-items" @click="open"
        ><i class="fa-light fa-plus"></i>Pridať nové menu</router-link
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

.menus-menu {
  display: flex;
  align-self: flex-start;
  margin: 0rem 2.6rem 3rem 0.5%;
}
</style>
