<template>
  <h2>Upraviť menu</h2>
  <form class="edit-menu">
    <input
      type="text"
      class="heading"
      placeholder="Názov stránky"
      maxlength="70"
    />
    <input
      type="text"
      class="description"
      placeholder="Popis stránky"
      maxlength="160"
    />
    <textarea class="main-text" placeholder="Napíšte text stránky"></textarea>
    <section class="page-settings">
      <fieldset>
        <legend>Rola stránky</legend>
        <input type="radio" id="main-page" name="page-role" />
        <label for="main-page">Hlavná stránka</label>
        <input type="radio" id="sub-page" name="page-role" />
        <label for="sub-page">Podstránka</label>
      </fieldset>
      <button type="submit">Uložiť</button>
    </section>
  </form>
</template>

<script>
export default {
  props: {
    edit: {
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

h2 {
  text-align: center;
}

.edit-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0rem 1rem;

  input,
  textarea {
    width: 99%;
    margin-bottom: 2rem;
    border: none;
    border-bottom: 1px solid $text-color-1;

    &:focus {
      outline: none;
    }
  }

  & .heading {
    line-height: 5rem;
    font: {
      size: 3rem;
    }
  }

  & .description,
  & .main-text {
    font-size: $content-font-lg;
  }

  & .main-text {
    resize: none;
    width: 99%;
    height: 53vh;
    position: relative;
    overflow-y: scroll;
  }

  & .page-settings {
    display: flex;
    justify-content: space-between;

    width: 99%;

    & fieldset {
      display: flex;
      justify-content: space-between;
      width: 25%;

      & input {
        width: 6%;
        margin: 0;
      }
      & label {
        margin-right: 4rem;
      }
    }

    & button {
      width: 50%;
    }
  }
}
</style>
