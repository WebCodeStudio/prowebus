<template>
  <section class="cms-info">
    <h2 class="info-title">Stav redakčného systému</h2>
    <article class="info-wrap">
      <fieldset class="system-info">
        <legend>Posledných 5 nových stránok</legend>
        <ul>
          <li>Testovacia stránka</li>
          <li>Testovacia stránka</li>
          <li>Testovacia stránka</li>
          <li>Testovacia stránka</li>
          <li>Testovacia stránka</li>
        </ul>
      </fieldset>

      <fieldset class="system-info">
        <legend>Posledných 5 nových článkov</legend>
        <ul>
          <li>Testovací článok</li>
          <li>Testovací článok</li>
          <li>Testovací článok</li>
          <li>Testovací článok</li>
          <li>Testovací článok</li>
        </ul>
      </fieldset>

      <fieldset class="system-info">
        <legend>Posledných 5 nových užívateľov</legend>
        <ul>
          <li>Nový užívateľ</li>
          <li>Nový užívateľ</li>
          <li>Nový užívateľ</li>
          <li>Nový užívateľ</li>
          <li>Nový užívateľ</li>
        </ul>
      </fieldset>

      <fieldset class="system-info">
        <legend>Kontola systému</legend>
        <ul>
          <li>Stav systému - OK</li>
          <li>Stav databázy - OK</li>
          <li>E-shop - OK</li>
          <li>Aktualizácie - OK</li>
          <li>Veľkosť systému - OK</li>
        </ul>
      </fieldset>

      <fieldset class="system-info">
        <legend>Posledných 5 prihlásených administrátorov</legend>
        <ul>
          <li>Prihlásený administrátor</li>
          <li>Prihlásený administrátor</li>
          <li>Prihlásený administrátor</li>
          <li>Prihlásený administrátor</li>
          <li>Prihlásený administrátor</li>
        </ul>
      </fieldset>
      <fieldset class="system-info">
        <legend>Login log</legend>
       <ul>
         <li>Prihlásený administrátor - OK</li>
         <li>Prihlásený administrátor - OK</li>
         <li>Prihlásený administrátor - OK</li>
         <li>Prihlásený administrátor - OK</li>
         <li>Prihlásený administrátor - OK</li>
       </ul>
      </fieldset>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.cms-info {
  width: 100%;
  position: relative;
  overflow-y: scroll;
  height: 94vh;
  border-radius: 1rem 0 0;
  border: 1px solid $head-color-1;
  background: $background;

  & .info-title {
    margin: 5.5rem 0 0 0;
    text-align: center;
  }

  & .info-wrap {
    display: flex;

    justify-content: space-around;
    flex-wrap: wrap;

    margin: 1rem 0 2.1rem;

    & .system-info {
      background: $lighten-blue;

      min-width: 30%;
      width: 32rem;

      margin: 3rem 1rem;

      border: 1px solid $head-color-1;
      border-radius: 0.5rem;

      & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }

      ul {
        margin: 1rem 0;

        & li {
          padding: 0.75rem 2rem 1rem;
        }
      }
    }
  }
}
</style>
