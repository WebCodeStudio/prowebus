<template>
  <section class="update-table">
    <h2 class="update-title">Update</h2>

    <table class="update-data">
      <tr class="update-description">
        <td>Súčasná verzia systému</td>
        <td>2022.01.00</td>
      </tr>
      <tr class="update-version">
        <td>Nová verzia systému</td>
        <td>2022.01.05</td>
      </tr>
    </table>
    <button>Aktualizovať na novú verziu</button>

    <label for="update">Aktualizácia systému: 5 z 10</label>
    <progress id="update" value="50" max="100"></progress>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.update-table {
  display: flex;
  width: 100%;
  height: 94vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
  position: relative;
  overflow-y: scroll;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .update-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .update-data {
    width: 99%;

    & .update-description,
    & .update-version {
      width: 100%;

      & td {
        width: 50%;
        padding: 2rem 1rem;
        font: {
          weight: 700;
        }
      }
    }
  }

  & button {
    margin: 7rem 0;
    padding: 1rem 2rem;
    background: $warehouse;
    color: $text-color-2;
    border: none;
    border-radius: 0.5rem;

    font: {
      weight: 700;
    }

    &:hover,
    &:focus {
      background: $info-color-3;
      color: $text-color-1;
      transition: 0.15s all;
    }
  }

  & progress,
  & label {
    width: 93%;
    height: 2rem;
  }
}
</style>
