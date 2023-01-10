<template>
  <h2 class="loyality-title">Vernostný systém</h2>
  <section class="loyality-table">
    <fieldset class="loyality-settings">
      <legend>Prepočet bodov</legend>

      <p>
        Nastavenie bodov za 1 € z veľkoobchodnej ceny tovaru - Po vložení
        hodnoty sa automaticky prepočítajú všetky body tovarov a služieb
      </p>
      <form class="settings-form">
        <span>1 € = </span>
        <input type="input" name="point-value" id="" /> bod / body / bodov
      </form>

      <p>
        Nastavenie hodnoty 1 bodu - Po vložení hodnoty sa automaticky prepočíta
        hodnota všetky tovarov a služieb v katalógu odmien
      </p>
      <form class="settings-form">
        <span>1 bod = </span>
        <input type="input" name="point-value" id="" /> €
      </form>
    </fieldset>
    <fieldset class="loyality-settings">
      <legend>Súčasná hodnota bodov / €</legend>
     <article class="info">
       <p>Súčasná hodnota za 1 € je : -- bodov.</p>
       <p>V súčasnosti má 1 bod hodnotu : -- €.</p>
     </article>
   </fieldset>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.loyality-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.loyality-table {
  display: flex;
  width: 100%;
  height: 94vh;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
  flex-wrap: wrap;
  padding: 1rem;

  & .loyality-settings {
    width: 100%;

    border-radius: 0.5rem;
    margin: 0;
    margin-bottom: 1.5rem;
    border: 1px solid $head-color-1;

    background: $lighten-blue;

    & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }

    & .settings-form {
      display: flex;
      width: 100%;
      justify-content: flex-start;

      input {
        margin: 0rem 1rem;
        padding: 0;
        outline: none;
        border: none;
        border-bottom: 3px solid $head-color-1;
        text-align: center;
   
        &:focus {
          
          background: $ok-button;
        }
      }
    }

    & .loyality-menu {
      & li {
        margin: 2rem 0rem 2rem 0.5%;
      }
    }
  }

  & .info {
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    text-align: left;
    color: $standard-red;
    padding: 1rem 0;

    & p {
      display: inline-block;
      width: 49%;
      min-width: 40rem;
      background: $head-color-3;
      color: $text-color-2;

      border-radius: 0.5rem;

      margin: 1rem 0;
      padding: 1rem 0.5rem;
    }
  }
}
</style>
