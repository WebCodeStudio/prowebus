<template>
  <h2 class="users-title">Užívatelia</h2>
  <section class="users-table">
    <article>
      <fieldset class="users-settings">
        <legend>Pridanie nového užívateľa</legend>
        <form action="/api/register">
          <input type="text" placeholder="Meno" required />
          <input type="text" placeholder="Priezvisko" required />
          <select name="user-role" id="role" required>
            <option value="none">Vyberte rolu užívateľa</option>
            <option value="super-admin">Super administrátor</option>
            <option value="admin">Administrátor</option>
            <option value="user">Užívateľ</option>
          </select>
          <input type="text" placeholder="Prihlasovacie meno" id="username" required />
          <input type="text" placeholder="Prihlasovacie heslo" id="password" required />
          <fieldset class="user-account-settings">
            <legend>Nastavenia oprávnení užívateľa</legend>
            <aside>
              <label for="">Nastavenia</label>
              <input type="checkbox" name="" id="settings">
              <label for="">Update systému</label>
              <input type="checkbox" name="" id="update">
              <label for="">Zmena už. práv</label>
              <input type="checkbox" name="" id="change-user">
              <label for="">Marketing</label>
              <input type="checkbox" name="" id="marketing">
              <label for="">Fakturácia</label>
              <input type="checkbox" name="" id="invoices">
              <label for="">Reklamácie</label>
              <input type="checkbox" name="" id="complaint">
              <label for="">Sklad</label>
              <input type="checkbox" name="" id="warehouse">
              <label for="">Vernostný program</label>
              <input type="checkbox" name="" id="loyality">
              <label for="">Zmena objednávok</label>
              <input type="checkbox" name="" id="change-order">
              <label for="">Zmena faktúr a predfaktúr</label>
              <input type="checkbox" name="" id="change-invoices">
              <label for="">Štatistiky</label>
              <input type="checkbox" name="" id="stats">
              <label for="">Prehľady</label>
              <input type="checkbox" name="" id=""> 
              <label for="">Prístup na server</label>
              <input type="checkbox" name="" id="change-invoices">
              <label for="">Prístup na e-mail server</label>
              <input type="checkbox" name="" id="marketing">
              <label for="">Prístup do databázy</label>
              <input type="checkbox" name="" id="change-user">
              <label for="">Prístup do databázy</label>
              <input type="checkbox" name="" id="change-user">
            </aside>
          </fieldset>
          <button>Uložiť užívateľa</button>
        </form>
     </fieldset>
    </article>


    <article>
      <fieldset class="users-settings">
        <legend>Zoznam užívateľov</legend>
        <table>
          <tbody>
            <tr>
              <td>Juraj Adamči</td>
              <td class="role">Super-administrátor</td>
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
      info: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.users-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.users-table {
  display: flex;

  & article {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem;

    & .users-settings {
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

  & .user-account-settings {
    width: 100%;

    background: $background;

    border-radius: 0.5rem;
    border: 1px solid $head-color-1;

    margin: 1.5rem 0;
    padding: 0rem;

    & legend {
      background: $background;
      padding: 0 0.5rem;
      border: 1px solid $head-color-1;
      border-radius: 0.5rem;
    }

    & aside {
      display: flex;
      flex-direction: row;
      width: 24%;
      flex-wrap: wrap;
      
      width: 100%;

      margin: 1rem;

      & input {
        width: 100%;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 3rem;
      }

      label {
        width: 40%;
      }
    }
  }

    & form {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.75rem;
      flex-direction: column;

      & input,
      & select {
        margin: 0 0 0.75rem 0rem;
        vertical-align: middle;
        border: none;
        border-bottom: 1px solid $text-color-1;
        outline: none;
        padding: 0.5rem;
      }

      & button {
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
        }

        & .tools,
        & td {
          width: 35%;
          padding: 0.5rem 0.5rem;
        }

        & .tools,
        & .role {
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

        & .role {
          width: 35%;
        }

      }
    }
  }
}
</style>
