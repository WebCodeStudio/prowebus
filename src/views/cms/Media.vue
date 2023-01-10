<template>
  <section class="media-table">
    <h2 class="media-title">Knižnica médií</h2>
    <MediaMenu @open="isOpen = true" />
    <MediaGallery />
    <MainModal :open="isOpen" @close="isOpen = !isOpen" />
  </section>
</template>

<script>
import MediaMenu from "@/components/cms/media/MediaMenu";
import MainModal from "@/components/main/MainModal";
import MediaGallery from "@/components/cms/media/MediaGallery";

export default {
  components: {
    MediaMenu,
    MainModal,
    MediaGallery,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.media-table {
  width: 99%;
  height: 94vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .media-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}
</style>
