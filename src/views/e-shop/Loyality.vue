<template>
  <section class="loyality">
    <h2 class="loyality-title">Vernostný program</h2>
    <fieldset class="loyality-catalog">
      <legend>Katalóg vernostných odmien</legend>

      <ul class="loyality-menu">
        <li>
          <a class="new-items" href="#">
            <i class="fa-light fa-plus"></i>Nová vernostná kategória</a>
        </li>
      </ul>

      <ul class="loyality-products">
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
        <li class="loyality-category">
          <a href="#">Testovacia kategoria</a>
        </li>
      </ul>
    </fieldset>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.loyality {
  display: flex;
  width: 100%;
  height: 94vh;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 0.5rem 0 0.5rem 0;
  position: relative;
  overflow-y: scroll;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  & .loyality-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .loyality-catalog {
    width: 99%;

    border-radius: 0.5rem;

    margin-bottom: 1.5rem;
    border: 1px solid $head-color-1;

    & .loyality-menu {
      & li {
        margin: 2rem 0rem 2rem 0.5%;
      }
    }

    & legend {
      background: $background;
      padding: 0 0.5rem;
      border: 1px solid $head-color-1;
      border-radius: 0.5rem;
    }
  }

  & .loyality-products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & .loyality-category {
      width: 16%;
      min-width: 16rem;

      background: $lighten-blue;

      border-radius: 0.6rem;

      margin: 1rem 0 0 0.5%;

      text-align: center;

      & a {
        display: inline-block;

        width: 100%;

        color: $text-color-1;

        padding: 2rem;

        font: {
          weight: 700;
        }

        &:hover,
        &:focus {
          background: $head-color-1;
          color: $text-color-2;
          transition: all 0.1s;
          border-radius: 0.5rem;
        }
      }
    }
  }
}
</style>
