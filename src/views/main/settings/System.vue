<template>
  <h2 class="system-title">Systém</h2>
  <section class="system-table">
    <article>
      <fieldset class="system-settings">
        <legend>Globálne systémové nastavenia</legend>
        <div>
          <aside>
            <label for="language">Jazyk aplikácie : </label>
            <select name="" id="language">
              <option value="default">Predvolený</option>
              <option value="sk">Slovenčina</option>
            </select>
          </aside>
          
          <aside>
            <label for="google-analytics">GA 4 : </label>
            <input type="text" id="google-analytics">
          </aside>
          
          <aside>
            <label for="google-verify">Google verify : </label>
            <input type="text" id="google-verify">
          </aside>
        </div>

        <div>
          <aside>
            <label for="cms">CMS : </label>
            <input type="text" id="cms" placeholder="Licenčný kľúč">
          </aside>
          
          <aside>
            <label for="e-shop">E-shop : </label>
            <input type="text" id="e-shop" placeholder="Licenčný kľúč">
          </aside>
          
          <aside>
            <label for="cms-eshop">CMS + e-shop : </label>
            <input type="text" id="cms-eshop" placeholder="Licenčný kľúč">
          </aside>
        </div>

      </fieldset>
    </article>

    <article>
      <fieldset class="system-settings">
        <legend>Nastavenie e-mailového servera</legend>
        <div>
          <aside>
            <label for="protocol">E-mailový protokol :</label>
            <select name="" id="protocol">
              <option value="pop">POP3</option>
              <option value="imap">IMAP</option>
            </select>
          </aside>
          
          <aside>
           <label for="ports">Prichádzajúca pošta :</label>
            <select name="" id="ports">
              <option value="995">POP3 - TLS / SSL - 995 </option>
              <option value="110">POP3 - 110</option>
              <option value="993">IMAP - TLS / SSL - 993</option>
              <option value="143">IMAP - 143</option>
            </select>
          </aside>
          
          <aside>
            <label for="ports">Odchádzajúca pošta :</label>
            <select name="" id="ports">
              <option value="465">SMTP - TLS / SSL - 465 </option>
              <option value="25">SMTP - 25</option>
            </select>
          </aside>
        </div>

        <div>
          <aside>
            <label for="cms">Prihlasovacie meno :</label>
            <input type="text" id="cms" placeholder="Prihlasovacie meno">
          </aside>
          <aside>
            <label for="cms">Prihlasovacie heslo :</label>
            <input type="text" id="cms" placeholder="Prihlasovacie heslo">
          </aside>
          
          <aside>
            <label for="e-shop">POP3 / IMAP :</label>
            <input type="text" id="e-shop" placeholder="Adresa prichádzajúcej pošty">
          </aside>
          
          <aside>
            <label for="cms-eshop"> SMTP :</label>
            <input type="text" id="cms-eshop" placeholder="Adresa odchádzajúcej pošty">
          </aside>
        </div>

      </fieldset>
    </article>

    <article>
      <fieldset class="system-settings">
        <legend>Info - panel</legend>
        <div>
          <aside>
            <label for="protocol">Zapnúť info - panel :</label>
            <select name="" id="protocol">
              <option value="true">Áno</option>
              <option value="false">Nie</option>
            </select>
          </aside>
        </div>
        <div>
          <aside>
            <label for="protocol">Text info - panelu :</label>
            <form action="">
              <textarea name="" id=""></textarea>
            </form>
          </aside>
        </div>
      </fieldset>
    </article>
  </section>
</template>

<script>
  export default {
    
  };
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.system-title {
  text-align: center;
  margin: 2.5rem 0 5rem;
}

.system-table {
  & article {
    display: flex;
    justify-content: center;
    width: 100%;


    & .system-settings {
      display: flex;
      justify-content: center;
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

      div {
        width: 100%;
      }

      aside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 81%;
        margin: 0.5rem 1rem;
        vertical-align: middle;

        & label {
          margin-bottom: 1rem;          
        }

        & input,
        & select {
          width: 40rem;
          //background: $lighten-blue;
          border: none;
          border-bottom: 3px solid $head-color-1;
          outline: none;
          padding: 0.5rem;
        }

        & textarea {
          width: 40rem;
          height: 10vh;
          resize: none;
        }

        & input,
        & select,
        & textarea {
          &:focus {
            background: $ok-button;
          }
        }
      }
    }
  }
}
</style>
