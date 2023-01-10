<template>
  <section class="login-panel">
    <aside>
      <h2>Prihlásenie do administrácie</h2>
      <form action="/dashboard">
        <input type="text" placeholder="Prihlasovacie meno" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Prihlasovacie heslo"
        />
        <input type="submit" value="Prihlásiť sa" />
        <p>Verzia : 2022.01.00</p>
      </form>
    </aside>
    <p class="pixabay">
      Obrázok od
      <a
        href="https://pixabay.com/sk/users/janbaby-3005373/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2168233"
        >Jan Alexander</a
      >
      z
      <a
        href="https://pixabay.com/sk//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2168233"
        >Pixabay</a
      >
    </p>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.login-panel {
  background: url("../assets/img/security.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;

  & aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.8);

    min-width: 35rem;
    width: 50%;

    border-radius: 0.5rem;
    padding: 0rem 3rem 4rem;
    margin: 0 auto;

    & form {
      display: flex;
      flex-direction: column;

      background: $background;

      min-width: 35rem;
      width: 100%;

      padding: 5rem 3rem 4rem;

      border-radius: 0.5rem;
    }

    & h2 {
      text-align: center;
      margin: 5rem 0;
    }

    & input {
      margin-top: 2rem;
      text-align: center;
      &:focus {
        outline: none;
      }
    }

    & input:not([type="submit"]) {
      border: none;
      border-bottom: 1px solid $head-color-1;
    }

    & input[type="submit"] {
      background: $lighten-blue;
      color: $text-color-1;

      border: none;
      border-radius: 1rem;

      margin-top: 4rem;
      padding: 1.5rem 0;

      font: {
        weight: 700;
      }

      &:hover,
      &:focus {
        background: $head-color-1;
        color: $text-color-2;

        transition: 0.15s all;
      }
    }

    & p {
      text-align: center;

      margin-top: 4rem;
      font: {
        weight: 700;
      }
    }
  }
  & .pixabay {
    display: none;
  }
}
</style>
