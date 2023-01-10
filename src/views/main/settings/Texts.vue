<template>
  <h2 class="texts-title">Texty</h2>
  <section class="texts-table">
    <article>
      <fieldset>
        <legend>Vytvorená objednávka</legend>
        <form action="">
          <textarea name="" id="" ></textarea>
        </form>
      </fieldset>
    </article>
     <article>
      <fieldset>
        <legend>Potvrdená objednávka</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article> 
    <article>
      <fieldset>
        <legend>Rozpracovaná objednávka</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article> 
    <article>
      <fieldset>
        <legend>Vydaná objednávka</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article> 
    <article>
      <fieldset>
        <legend>Zrušená objednávka</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article> 
    <article>
      <fieldset>
        <legend>Vytvorená predfaktúra</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article> 
    <article>
      <fieldset>
        <legend>Prijatá reklamácia</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article>
    <article>
      <fieldset>
        <legend>Uznaná reklamácia</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article>
    <article>
      <fieldset>
        <legend>Neuznaná reklamácia</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article>
    <article>
      <fieldset>
        <legend>Odoslaná reklamácia</legend>
        <form action="">
          <textarea name="" id=""></textarea>
        </form>
      </fieldset>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.texts-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.texts-table {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

  & article {
      min-width: 40rem;
      width: 40rem;
      margin: 1rem;

     & fieldset {
      display: flex;
      width: 98.5%;
      padding: 0rem 1rem;
      justify-content: space-between;
      border-radius: 0.5rem;
      border: 1px solid $head-color-1;
      background: $lighten-blue;

      & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }


      form {
        width: 100%;
       

        & textarea {
          margin: 0.5rem 0;
          width: 100%;
          height: 28vh;
          resize: none;
        }
      }
    }
  }
}
</style>