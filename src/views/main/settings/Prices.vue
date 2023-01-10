<template>
  <h2 class="prices-title">Ceny, zľavy a marže</h2>
  <section class="prices-table">
    <article>
      <fieldset class="prices-settings">
        <legend>Nastavenie DPH</legend>
        <form>
          <label for="allow-vat">Som platca DPH :</label>
          <input type="checkbox" name="allow-vat" />
        </form>
        <form>
          <label for="vat-size">Sadzba DPH :</label>
          <select name="vat-size">
            <option value="0">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
          </select>
        </form>
      </fieldset>
      <fieldset class="prices-settings">
        <legend>Nastavenie globálnej marže</legend>
        <form>
          <label for="global-margin">Používať globálne marže :</label>
          <input type="checkbox" name="global-margin" />
        </form>
        <form>
          <label for="fixed-global-margin">Pevná globálna marža v %:</label>
          <input type="number" min="0" max="100" name="fixed-global-margin" />
        </form>
      </fieldset>
     <fieldset class="prices-settings">
       <legend>Nastavenie zliav</legend>
       <form>
         <label for="global-margin">Používať globálne zľavy :</label>
         <input type="checkbox" name="global-margin" />
       </form>
       <form>
         <label for="fixed-global-discount">Pevná globálna zľava v % :</label>
         <input type="number" min="0" max="100" name="fixed-global-dicount" />
       </form>
     </fieldset>
      <fieldset class="prices-settings">
        <legend>Nastavenie veľkoobchodných cien</legend>
        <form>
          <label for="global-margin">Používať veľkoobchodné ceny :</label>
          <input type="checkbox" name="global-margin" />
        </form>
        <form>
          <label for="fixed-global-discount">Pevná marža veľkoobchodných cien v % :</label>
          <input type="number" min="0" max="100" name="fixed-global-dicount" />
        </form>
      </fieldset>
    </article>

    <article>
      <fieldset class="prices-settings">
        <legend>Nastavenie lokálnej marže</legend>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
        <form>
          <label for="allow-vat">Marža od :</label>
          <input type="text" name="value-text"/> -
          <input type="text" name="value-text"/>
          <input type="number" name="margin-value" id="" />
        </form>
      </fieldset>
    </article>
  </section>
  <SecondaryModal :sopen="isSopen" @close="isSopen = !isSopen" />
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

.prices-menu {
  display: flex;
  align-self: flex-start;
  margin: 0rem 2.6rem 0rem 0.5%;
}

h2 {
  text-align: center;
  margin: 2.5rem 0 3rem;
}

.prices-table {
  display: flex;

  & article {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1rem;

    & .prices-settings {
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
      }

      & input[type="text"],
      & input[type="number"] {
        width: 25%;
        
        outline: none;
        border:none;
        border-bottom: 3px solid $head-color-1;

        font: {
          size: 1.3rem;
        }

        vertical-align: middle;
        padding: 1rem 0;

        &:focus {
          background: $ok-button;
        }
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
}
</style>