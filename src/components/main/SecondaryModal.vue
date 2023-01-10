<template>
  <div class="s-modal" v-show="sopen">
    <article class="s-modal-content">
      <button @click="close">X</button>
      <router-view />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    sopen: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.s-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.9);

  & .s-modal-content {
    background: $background;
    position: relative;

    width: 60%;
    height: 40%;

    border: 1px solid $text-color-1;
    border-radius: 0.5rem;

    & button {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      text-align: center;

      background: $head-color-3;
      color: $text-color-1;

      position: absolute;
      top: 1rem;
      right: 1rem;

      font: {
        size: 2rem;
        weight: 700;
      }
      border: 1px solid $standard-red;
      border-radius: 50%;
      padding: 0.1%;
    }

    & h2 {
      text-align: center;
    }
  }
}
</style>
