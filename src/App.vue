<template>
  <nav class="sub-navigation">
    <img
      class="logo"
      src="./assets/img/logo-admin-2022.png"
      alt="Logo ProWEB-Slovakia"
      width="229"
      height="50"
    />
    <SearchInput />
    <SettingsMenu />
  </nav>
  <main class="dashboard">
    <MainMenu />
    <router-view />
  </main>
</template>

<script>
import SearchInput from "@/components/main/SearchInput";
import SettingsMenu from "@/components/main/SettingsMenu";
import MainMenu from "@/components/main/MainMenu";

export default {
  components: {
    SearchInput,
    SettingsMenu,
    MainMenu,
  },

  data() {
    return {
      title: "test",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/variables";

.sub-navigation {
  background: $gradient;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & .logo,
  & span {
    width: 15rem;
    height: auto;
    margin: 1rem 3rem 1rem 1rem;
  }
}

.dashboard {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: $head-color-1;
}
</style>
