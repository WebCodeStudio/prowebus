<template>
  <div class="modal" v-show="open">
    <article class="modal-content">
      <button @click="close">X</button>
      <router-view />
    </article>
  </div>
</template>

<script>
export default {
  props: {
    open: {
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

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 83, 179, 0.5);

  & .modal-content {
    background: $background;
    position: relative;
    overflow-y: scroll;

    width: 90%;
    height: 90%;

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

      &:hover,
      &:focus {
        box-shadow: 0 0 1rem $head-color-3;
        transition: all 0.1s;
      }
    }

    & h2 {
      text-align: center;
    }
  }
}
</style>
