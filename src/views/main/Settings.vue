<template>
  <section class="settings-table">
    <h2 class="settings-title">Nastavenia</h2>
    <ul>
      <li>
        <router-link to="/settings/company" @click="isOpen = true">Firemné údaje</router-link>
      </li>
      <li>
        <router-link to="/settings/import" @click="isOpen = true">Import / Export</router-link>
      </li>
      <li>
        <router-link to="/settings/prices" @click="isOpen = true">Ceny, zľavy a marže</router-link>
      </li>
      <li>
        <router-link to="/settings/shipping" @click="isOpen = true">Doprava a dobierka</router-link>
      </li>
      <li>
        <router-link to="/settings/payments" @click="isOpen = true">Platobné systémy</router-link>
      </li>
      <li>
        <router-link to="/settings/loyality" @click="isOpen = true">Vernostný systém</router-link>
      </li>
      <li>
        <router-link to="/settings/compare" @click="isOpen = true">Porovnávače cien</router-link>
      </li>
      <li>
        <router-link to="/settings/texts" @click="isOpen = true">Texty e-mailov a info panelu</router-link>
      </li>
      <li>
        <router-link to="/settings/banners" @click="isOpen = true">Bannery</router-link>
      </li>
      <li>
        <router-link to="/settings/users" @click="isOpen = true">Užívatelia</router-link>
      </li>
      <li>
        <router-link to="/settings/numerals" @click="isOpen = true">Číselníky</router-link>
      </li>
      <!-- <li>
        <router-link to="/settings/webpages" @click="isOpen = true">Webstránky</router-link>
      </li> -->
      <li>
        <router-link to="/settings/system" @click="isOpen = true">Systém</router-link>
      </li>
    </ul>
    <MainModal :open="isOpen" @close="isOpen = !isOpen" />
  </section>
</template>

<script>
  import MainModal from "@/components/main/MainModal";

  export default {
    components: {
      MainModal,
    },

    data() {
      return {
        isOpen: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.settings-table {
  display: flex;
  width: 100%;
  height: 94vh;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  border-radius: 1rem 0 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .settings-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    & li {
      width: 16%;
      min-width: 16rem;

      background: $lighten-blue;

      border-radius: 0.6rem;

      margin: 1rem 0 0 0.5%;

      text-align: center;

      & a {
        display: inline-block;

        width: 100%;

        color: $text-color-1;

        padding: 2rem;

        &:hover,
        &:focus {
          background: $head-color-1;
          color: $text-color-2;
          border-radius: 0.5rem;
          transition: all 0.1s;
        }
      }

      &.selected > a {
        background: $head-color-1;
        color: $text-color-1;
        transition: all 0.3s;
        border-radius: 0.5rem 0.5rem 0 0;
        text-decoration: underline;
      }
    }
  }
}
</style>
