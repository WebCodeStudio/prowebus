<template>
  <h2 class="shipping-title">Doprava</h2>
  <section class="shipping-table">
    <article>
      <fieldset class="shipping-settings">
        <legend>Nastavenie dobierky a cena za dobierku</legend>
        <form>
          <label for="allow-delivery">Používať dobierku:</label>
          <input type="checkbox" name="allow-delivery" />
        </form>
        <form>
          <label for="delivery-price">Pevná cena za dobierku v €:</label>
          <input type="number" name="delivery-price" step="0.1" />
        </form>
      </fieldset>
      <fieldset class="shipping-settings">
        <legend>Manipulačný poplatok</legend>
        <form>
          <label for="allow-personal-collection">Používať manipulačný polatok:</label>
          <input type="checkbox" name="allow-personal-collection" />
        </form>
        <form>
          <label for="delivery-price">Pevná cena manipulačného poplatku v €:</label>
          <input type="number" name="delivery-price" step="0.1" />
        </form>
        <form>
          <label for="delivery-price">Suma v €, do ktorej účtovať manipulačný poplatok:</label>
          <input type="number" name="delivery-price" step="0.1" />
        </form>
      </fieldset>
      <fieldset class="shipping-settings">
        <legend>Osobný odber</legend>
        <form>
          <label for="allow-personal-collection">Používať osobný odber:</label>
          <input type="checkbox" name="allow-personal-collection" />
        </form>
      </fieldset>
      <fieldset class="shipping-settings">
        <legend>Sledovací link (odkaz)</legend>
        <form>
          <label for="allow-tracking-link">Používať sledovací odkaz od dopravcu:</label>
          <input type="checkbox" name="allow-tracking-link" />
        </form>
      </fieldset>
      <fieldset class="shipping-settings">
        <legend>Číslo balíka</legend>
        <form>
          <label for="allow-tracking-number">Používať číslo balíka:</label>
          <input type="checkbox" name="allow-tracking-number" />
        </form>
      </fieldset>
    </article>

    <article class="add-delivery-company">
      <fieldset class="shipping-settings">
        <legend>Pridanie nového dopravcu</legend>
        <form>
          <label for="name-delivery-company">Názov dopravcu :</label>
          <input type="text" name="name-delivery-company" />
          <label for="api-delivery-company">API dopravcu :</label>
          <input type="text" name="api-delivery-company" />
          <label for="tracking-delivery-company">Sledovací link dopravcu :</label>
          <input type="text" name="tracking-delivery-company" />
          <button type="submit" class="new-items">Uložiť dopravcu</button>
        </form>
      </fieldset>
      <fieldset class="shipping-settings">
        <legend>Zoznam dopravcov</legend>
        <table>
          <tr>
            <td>UPS / SPS / InTime</td>
            <td class="tools">
              <router-link to="" @click="isSopen = true" @click.prevent><i class="fa-light fa-pencil-alt"></i></router-link>
              <router-link to=""><i class="fa-light fa-trash-alt"></i></router-link>
            </td>
          </tr>
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

h2 {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.shipping-table {
  display: flex;

  & article {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem;

   & .shipping-settings {
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
      padding: 0 0.5rem;

      & input {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0 0.3rem 1rem;
        vertical-align: middle;
      }

      & input[type="text"],
      & input[type="number"] {
        width: 40%;
        height: 1.8rem;

        font: {
          size: 1.3rem;
        }
        vertical-align: middle;

        outline: none;
        border: none;
        border-bottom: 3px solid $head-color-1;

        padding: 1rem 0;

        &:focus {
          background: $ok-button;
        }
      }

      & .new-items,
      & .test-button {
        width: 100%;
        border: 1px solid $ok-button-border; 

        margin: 2rem 0;
        padding: 0.5rem;
      }

      & input[type="number"] {
        width: 10%;
      }

      & select {
        margin: 0 0 0.3rem 1rem;
        vertical-align: middle;
      }
    }
  }

  & .add-delivery-company {
    width: 50%;
    display: flex;

    form {
      width: 100%;
      flex-direction: column;
      padding: 0 0.5rem;

      label {
        margin: 0.1rem 0 0 0;
      }

      input[type="text"] {
        width: 100%;
        margin: 0;
        margin-bottom: 0.75rem;
      }
    }

    table {
      width: 100%;

      tr {
        background: $background;

        td {
          padding: 0.5rem 0.5rem;
        }

        .tools {
          text-align: right;

          & .fa-light {
            margin: 0 1rem;
          }

          & .fa-pencil-alt {
            color: $ok-button-border;
          }

          & .fa-trash-alt {
            color: $head-color-3;
          }
        }

        &:hover,
        &:focus {
          background: $border-color-1;
        }
      }
    }
  }
}
</style>
