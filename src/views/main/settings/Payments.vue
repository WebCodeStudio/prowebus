<template>
  <h2 class="payments-title">Platobné systémy</h2>
  <section class="payments-table">
    <article>
      <fieldset class="payments-settings">
        <legend>Pridanie platobnej brány</legend>
        <form>
          <input type="text" placeholder="Názov poskytovateľa platobnej brány" required />
          <input type="text" placeholder="Testovacia URL adresa platobnej brány" required />
          <input type="text" placeholder="Ostrá URL adresa platobnej brány" required />
          <input type="text" placeholder="URL pre odpoveď" required />
          <input type="text" placeholder="Prihlasovacie meno do platobnej brány" required/>
          <input type="text" placeholder="Prihlasovacie heslo do platobnej brány" required/>
          <input type="submit" class="new-items" value="Uložiť poskytovateľa" />
          <input type="submit" class="test-button" value="Testovať pripojenie poskytovateľa" />
        </form>
      </fieldset>
    </article>
    <article>
      <fieldset class="payments-settings">
        <legend>Zoznam platobných brán:</legend>
        <table>
          <tbody>
            <tr>
              <td>Cetelem</td>
              <td class="tools">
                <router-link to="" @click="isSopen = true" @click.prevent><i class="fa-light fa-pencil-alt"></i></router-link>
                <router-link to="" @click="isSopen = true" @click.prevent><i class="fa-light fa-trash-alt"></i></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </article>
    <SecondaryModal :sopen="isSopen" @close="isSopen = !isSopen" />
  </section>
</template>

<script>
import SecondaryModal from "@/components/main/SecondaryModal";
export default {
  components: {
    SecondaryModal,
  },
  data() {
    return {
      isSopen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.payments-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.payments-table {
  display: flex;
  flex-wrap: wrap;

  & article {
    display: flex;
    flex-direction: column;
    width: 48.5%;
    max-width: 100%;
    margin: 1rem;

    & .payments-settings {
    width: 99%;

    background: $lighten-blue;

    border-radius: 0.5rem;
    border: 1px solid $head-color-1;

    margin-bottom: 1.5rem;
    padding: 1.5rem;

    & legend {
      background: $background;
      padding: 0 0.5rem;
      border: 1px solid $head-color-1;
      border-radius: 0.5rem;
    }
  }

    & form {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;

      & input {
        width: 100%;
        margin: 0 0 0.75rem 0rem;
        vertical-align: middle;
        border: none;
        border-bottom: 3px solid $head-color-1;
        outline: none;
        padding: 0.5rem;

        &:focus {
          background: $ok-button;
        }
      }

      & .new-items,
      & .test-button {
        width: 28rem;
        border: 1px solid $ok-button-border; 

        margin: 2rem 0;
      }
   }

    & table {
      width: 100%;

      & tbody {
        & tr {
          background: $background;

          &:hover,
          &:focus {
            background: $border-color-1;
          }
        }

        & .tools,
        & td {
          min-width: 75%;
          width: 75%;
          padding: 0.5rem 0.5rem;
        }

        .tools {
          min-width: 15%;
          width: 15%;
          text-align: center;

          & .fa-light {
            margin: 0 1.5rem;
          }

          & .fa-pencil-alt {
            color: $ok-button-border;
          }

          & .fa-trash-alt {
            color: $head-color-3;
          }
        }
      }
    }
  }
}
</style>
