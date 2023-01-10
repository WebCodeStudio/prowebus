<template>
  <section class="stats-table">
    <h2 class="stats-title">Štatistiky</h2>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.dashboard {
  .stats-table {
    display: flex;
    width: 100%;
    height: 94vh;
    background: $background;
    align-items: center;
    justify-content: flex-start;
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

    & .stats-title {
      margin: 5.5rem 0;
      text-align: center;
    }
  }
}
</style>
