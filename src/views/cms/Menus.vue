<template>
  <section class="menus-table">
    <h2 class="menus-title">Menus</h2>
    <MenusMenu @open="isOpen = true" />
    <MenusTable @edit="isOpen = true" @remove="isOpen = true" />
    <MainModal :open="isOpen" @close="isOpen = !isOpen" />
  </section>
</template>

<script>
import MenusMenu from "@/components/cms/menus/MenusMenu";
import MenusTable from "@/components/cms/menus/MenusTable";
import MainModal from "@/components/main/MainModal";

export default {
  components: {
    MenusMenu,
    MenusTable,
    MainModal,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.menus-table {
  width: 100%;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .menus-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}
</style>
