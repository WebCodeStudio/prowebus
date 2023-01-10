<template>
  <h2 class="numerals-title">Číselníky</h2>
  <section class="numerals-table">
    <article>
      <fieldset class="invoices">
        <legend>Fakturácia</legend>
        <div>
          <form action="">
            <p>Objednávky - OB :</p>
            <input type="text" placeholder="2022100000" />
          </form>
          <form action="">
            <p>Predfaktúry - PR :</p>
            <input type="text" placeholder="2022200000" />
          </form>
          <form action="">
            <p>Faktúry - FA :</p>
            <input type="text" placeholder="2022300000" />
          </form>
          <form action="">
            <p>Reklamácie - RE :</p>
            <input type="text" placeholder="2022400000" />
          </form>
          <form action="">
            <p>Interný doklad - IN :</p>
            <input type="text" placeholder="2022500000" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset class="tax">
        <legend>Dane</legend>
        <div>
          <form action="">
            <p>Nulová sadzba :</p>
            <input type="text" placeholder="0" />
          </form>
          <form action="">
            <p>Znížená sadzba:</p>
            <input type="text" placeholder="10" />
          </form>
          <form action="">
            <p>Štandardná sadzba :</p>
            <input type="text" placeholder="20" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset class="currency">
        <legend>Mena</legend>
        <div>
          <form action="">
            <p>1. mena :</p>
            <input type="text" placeholder="Euro" />
            <input type="text" class="currency-icon" placeholder="€" />
          </form>
          <form action="">
            <p>2. mena :</p>
            <input type="text" placeholder="Dolár" />
            <input type="text" class="currency-icon" placeholder="$" />
          </form>
          <form action="">
            <p>3. mena :</p>
            <input type="text" placeholder="Bitcoin" />
            <input type="text" class="currency-icon" placeholder="B" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset class="years">
        <legend>Roky</legend>
        <div>
          <form action="">
            <p>1. rok :</p>
            <input type="text" placeholder="2022" />
          </form>
          <form action="">
            <p>2. rok :</p>
            <input type="text" placeholder="2023" />
          </form>
          <form action="">
            <p>3. rok :</p>
            <input type="text" placeholder="2024" />
          </form>
          <form action="">
            <p>4. rok :</p>
            <input type="text" placeholder="2025" />
          </form>
          <form action="">
            <p>5. rok :</p>
            <input type="text" placeholder="2026" />
          </form>
        </div>
      </fieldset>
    </article>

     <article>
      <fieldset class="orders-status">
        <legend>Stavy objednávok</legend>
        <div>
          <form action="">
            <p>1. status :</p>
            <input type="text" placeholder="Vytvorená" />
          </form>
          <form action="">
            <p>2. status :</p>
            <input type="text" placeholder="Potvrdená" />
          </form>
          <form action="">
            <p>3. status :</p>
            <input type="text" placeholder="Rozpracovaná" />
          </form>
          <form action="">
            <p>4. status :</p>
            <input type="text" placeholder="Vydaná" />
          </form>
          <form action="">
            <p>5. status :</p>
            <input type="text" placeholder="Zrušená" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset class="invoices-status">
        <legend>Stavy faktúr a predfaktúr</legend>
        <div>
          <form action="">
            <p>1. status :</p>
            <input type="text" placeholder="Vytvorená" />
          </form>
          <form action="">
            <p>2. status :</p>
            <input type="text" placeholder="Uhradená" />
          </form>
          <form action="">
            <p>3. status :</p>
            <input type="text" placeholder="Neuhradená" />
          </form>
          <form action="">
            <p>4. status :</p>
            <input type="text" placeholder="Dobropisovaná" />
          </form>
          <form action="">
            <p>5. status :</p>
            <input type="text" placeholder="Zrušená" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset class="complaints-status">
        <legend>Stavy reklamácií</legend>
        <div>
          <form action="">
            <p>1. status :</p>
            <input type="text" placeholder="Prijatá" />
          </form>
          <form action="">
            <p>2. status :</p>
            <input type="text" placeholder="V riešení" />
          </form>
          <form action="">
            <p>3. status :</p>
            <input type="text" placeholder="Uznaná" />
          </form>
          <form action="">
            <p>4. status :</p>
            <input type="text" placeholder="Neuznaná" />
          </form>
          <form action="">
            <p>5. status :</p>
            <input type="text" placeholder="Odoslaná k zákazníkovi" />
          </form>
        </div>
      </fieldset>
    </article>

    <article>
      <fieldset>
        <legend>Jednotky</legend>
        <div>
          <form action="">
            <p>1. jednotka :</p>
            <input type="text" placeholder="Kusy" />
            <input type="text" class="currency-icon" placeholder="ks" />
          </form>
          <form action="">
            <p>2. jednotka :</p>
            <input type="text" placeholder="Balenie" />
            <input type="text" class="currency-icon" placeholder="bal" />
          </form>
          <form action="">
            <p>3. jednotka :</p>
            <input type="text" placeholder="Meter" />
            <input type="text" class="currency-icon" placeholder="m" />
          </form>
          <form action="">
            <p>4. jednotka :</p>
            <input type="text" placeholder="Meter" />
            <input type="text" class="currency-icon" placeholder="m" />
          </form>
        </div>
      </fieldset>
    </article>
    <article>
      <fieldset>
        <legend>Užívateľské role</legend>
        <div>
          <form action="">
            <p>1. rola :</p>
            <input type="text" placeholder="Super-administrátor" />
          </form>
          <form action="">
            <p>2. rola :</p>
            <input type="text" placeholder="Administrátor" />
          </form>
          <form action="">
            <p>3. rola :</p>
            <input type="text" placeholder="Užívateľ" />
          </form>
          <form action="">
            <p>4. rola :</p>
            <input type="text" placeholder="Demo" />
          </form>
        </div>
      </fieldset>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.numerals-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.numerals-table {  
  & article {
    & fieldset {
      display: flex;
      width: 98.5%;
      margin: 1rem;
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

      div {
        display: flex;
      }

      & form {
        max-width: 100%;
        margin: 1rem;

        & p {
          margin: 0.2rem 1rem 1rem 0;
        }

        & input {
          max-width: 100%;
          width: 15rem;
          border: none;
          border-bottom: 3px solid $head-color-1;
          outline: none;
          color: $text-color-1;
          text-align: center;
          padding: 0.5rem;
        }

        & .currency-icon {
          width: 5rem;
          margin-left: 0.5rem;
          text-align: center;
        }
      }

      & h2 {
        align-self: flex-end;
        margin: 2.2rem;
      }
    }
  }
}
</style>
