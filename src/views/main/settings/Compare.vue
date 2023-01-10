<template>
  <h2 class="compare-title">Porovnávače cien</h2>
  <section class="compare-table">
    <article class="compare-form">
      <fieldset class="compare-settings">
        <legend>Pridanie nového porovnávača</legend>
        <form>
          <input type="text" placeholder="Názov porovnávača" required />
          <input type="text" placeholder="XML feed porovnávača" required />
          <input type="submit" value="Uložiť porovnávač" />
        </form>
      </fieldset>
    </article>

    <article class="compare-list">
      <fieldset class="compare-settings">
        <legend>Zoznam porovnávačov cien</legend>
        <table>
          <tbody>
            <tr>
              <td>Heureka - SK</td>
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

.compare-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.compare-table {
  display: flex;

  & article {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem;
    padding: 2rem;

    & .compare-settings {
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
      flex-direction: column;

      & input {
        margin: 0 0 0.75rem 0rem;
        vertical-align: middle;
        border: none;
        border-bottom: 3px solid $head-color-1;
        outline: none;
        padding: 0.5rem;
      }

      & input[type="submit"] {
        width: 25%;
        padding: 1rem;
        background: $ok-button;
        border: 1px solid $ok-button-border;
        border-radius: 1rem;
        color: $ok-button-border;
        margin-top: 2rem;

        &:hover,
        &:focus {
          background: $ok-button-hover;
          color: $text-color-1;
          transition: 0.15s all;
        }
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
          width: 75%;
          padding: 0.5rem 0.5rem;
        }

        .tools {
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
