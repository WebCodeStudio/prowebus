<template>
  <section class="articles-table">
    <h2 class="articles-title">Články</h2>
    <ArticlesMenu @open="isOpen = true" />
    <ArticlesTable @edit="isOpen = true" @remove="isOpen = true" />
    <MainModal :open="isOpen" @close="isOpen = !isOpen" />
  </section>
</template>

<script>
import ArticlesMenu from "@/components/cms/articles/ArticlesMenu";
import ArticlesTable from "@/components/cms/articles/ArticlesTable";
import MainModal from "@/components/main/MainModal";

export default {
  components: {
    ArticlesMenu,
    ArticlesTable,
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

.articles-table {
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

  & .articles-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}
</style>
