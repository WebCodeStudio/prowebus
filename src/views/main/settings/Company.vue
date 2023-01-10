<template>
  <h2 class="company-settings-title">Firemné nastavenia</h2>
  <section class="company-settings">
    <article>
      <fieldset class="company-identity">
        <legend>Fakturačné údaje</legend>
        <form action="">
          <input type="text" placeholder="Názov firmy / Meno a priezvisko" />
        </form>
        <form>
          <input type="text" placeholder="Ulica" />
        </form>
        <form>
          <input type="text" placeholder="Mesto" />
        </form>
        <form>
          <input type="text" placeholder="PSČ" />
        </form>
        <form>
          <input type="text" placeholder="IČO" />
        </form>
        <form>
          <input type="text" placeholder="DIČ" />
        </form>
        <form>
          <input type="text" placeholder="IČ DPH" />
        </form>
      </fieldset>

      <fieldset class="company-pictures">
        <legend>Logo a favicon</legend>
        <form action="">
          <label for="Favicon"
            >Favicon - odporúčaný rozmer : 64 x 64px<input
              type="file"
              name=""
              id=""
            />
            <img
              src="../../../assets/img/logo-admin-2022-2.png"
              alt=""
              width="256"
              height="256"
            />
          </label>
        </form>
        <form action="">
          <label for="Logo"
            >Logo - odporúčaný rozmer : 250 x 250px<input
              type="file"
              name=""
              id=""
            />
            <img
              src="../../../assets/img/logo-admin-2022-2.png"
              alt=""
              width="250"
              height="250"
            />
          </label>
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

h2 {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.company-settings {
  display: flex;
  width: 100%;
  background: $background;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
 
  font: {
    weight: 600;
  }

  & .company-settings-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & article {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;

    & .company-identity,
    & .company-pictures {
      width: 100%;
      min-width: 35rem;

      border: 1px solid $head-color-1;
      border-radius: 1rem;

      background: $lighten-blue;

      padding: 2rem;

      margin: 0.5rem 2rem;

      & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }

      & form {
        display: flex;
        width: 100%;
        min-width: 35rem;
        flex-direction: row;

        & label {
          width: 75%;
        }

        & input {
          width: 100%;
          margin: 1rem 0;
          outline: none;
          border: none;
          border-bottom: 3px solid $head-color-1;
          padding: 0.5rem;
          
          &:focus {
            background: $ok-button;
          }
        }
      }
    }

    .company-pictures {
      display: flex;

      & form {
        & img {
          margin: 0.25rem 0;
        }
      }
    }
  }
}
</style>
