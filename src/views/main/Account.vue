<template>
  <section class="user-account">
    <h2 class="user-account-title">Užívateľský účet</h2>
    <fieldset class="user-account-settings">
      <legend>Nastavenia užívateľa</legend>
      <form action="" class="user-account-login">
       <aside>
          <label for="">Používateľské meno</label>
          <input type="text" value="test">
          <label for="">Meno užívateľa</label>
          <input type="text">
          <label for="">Priezvisko užívateľa</label>
          <input type="text">
        </aside>
        <aside>
          <label for="">Prihlasovacie meno</label>
          <input type="text">
          <label for="">Prihlasovacie heslo</label>
          <input type="password" name="" id="">
          <label for="">Rola užívateľa</label>
          <select name="" id="">
            <option value="superadmin">Super-administrátor</option>
            <option value="admin">Administrátor</option>
            <option value="user">Užívateľ</option>
          </select>
        </aside>
      </form>
    </fieldset>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.user-account {
  display: flex;
  width: 100%;
  height: 94vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
  position: relative;
  overflow-y: scroll;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .user-account-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .user-account-settings {
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

    & .user-account-login,
    & .user-account-login-role {
      display: flex;
      width: 100%;

      aside {
        display: flex;
        flex-direction: column;
       
        width: 100%;

        margin: 1rem;

        & input {
          width: 100%;
          margin-bottom: 0.75rem;
        }
      }
    }

    & .user-account-login-role {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.75rem;
      padding: 0 0.5rem;
      
      aside {
        width: 24%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        

        label {
          width: 50%;
        }

        input {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 0 0.3rem 1rem;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
