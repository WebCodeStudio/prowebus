<template>
  <h2 class="import-title">Import / Export</h2>
  <section class="import-table">
    <article>
      
    </article>
  </section>
</template>

<script>
  export default {
    
  };
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

h2 {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.import-table {
  article {
    display: flex;
    margin: 1rem;
    padding: 2rem;

    & input {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1rem;
      margin: 0 0 0.3rem 1rem;
      vertical-align: middle;
    }
  }
}
</style>
