<template>
  <section class="search">
    <i class="fa-light fa-search"></i>
    <input
      class="search-input"
      type="text"
      maxlength="70"
      placeholder="Vyhľadať zákazníkov, tovary, objednávky, faktúry, reklamácie, nastavenia, atď..."
    />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.search {
  width: 36%;
  max-width: 55rem;
  margin: 0.2rem 1rem;
  padding: 0.1rem 0;
  position: relative;

  & .search-input {
    width: 100%;
    height: 3.5rem;
    padding-left: 0.5rem;
    background: transparent;
    color: $text-color-2;
    border: none;
    border-bottom: 2px solid lighten(#282745, 60%);
    
    padding: 0 0 0 3.5rem;

    &:focus {
      outline: 2px solid $background;
      border-radius: 0.5rem;
      box-shadow: 0 0 1rem $background;
      transition: all 0.05s;

    }
  }

  & .fa-light {
    color: $text-color-2;
    margin: 0 1rem;
    position: absolute;
    top: 1.2rem;
    left: 0;
  }
}
</style>
