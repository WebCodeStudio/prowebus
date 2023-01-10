<template>
  <section class="page-table">
    <h2 class="page-title">Stránky</h2>
    <PagesMenu @open="isOpen = true" />
    <PagesTable @edit="isOpen = true" @remove="isOpen = true" />
    <MainModal :open="isOpen" @close="isOpen = !isOpen" />
  </section>
</template>

<script>
import PagesMenu from "@/components/cms/pages/PagesMenu";
import PagesTable from "@/components/cms/pages/PagesTable";
import MainModal from "@/components/main/MainModal";

export default {
  components: {
    PagesMenu,
    PagesTable,
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

.page-table {
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

  & .page-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}
</style>
