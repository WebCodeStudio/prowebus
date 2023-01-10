<template>
  <section class="payments">
    <h2 class="payments-title">Platby</h2>

    <fieldset class="credit-payments">
      <legend>Kreditné a platobné karty</legend>
      <ul class="payments-menu">
        <li>
          <a class="new-items" href="#"
            ><i class="fa-light fa-plus"></i>Nová platobná brána</a
          >
        </li>
      </ul>
      <table class="table-credit-payments">
        <thead>
          <tr>
            <td>Platobná metóda :</td>
            <td>Poskytovateľ :</td>
            <td>Zákaznícky kód :</td>
            <td>Nástroje :</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kreditné a debetné karty</td>
            <td>Tatrabanka</td>
            <td>01234567890</td>
            <td class="payments-tools">
              <ul>
                <li>
                  <a title="Editovať platobnú metódu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť platobnú metódu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>

    <fieldset class="cash">
      <legend>Hotovosť a dobierka</legend>
      <ul class="payments-menu">
        <li>
          <a class="new-items" href="#"
            ><i class="fa-light fa-plus"></i>Nová dobierka alebo hotovosť</a
          >
        </li>
      </ul>

      <table class="table-cash">
        <thead>
          <tr>
            <td>Platobná metóda :</td>
            <td>Nástroje :</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hotovosť na predajni</td>
            <td class="payments-tools">
              <ul>
                <li>
                  <a title="Editovať platobnú metódu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť platobnú metódu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Dobierka</td>
            <td class="payments-tools">
              <ul>
                <li>
                  <a title="Editovať platobnú metódu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť platobnú metódu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>

    <fieldset class="installment-sale">
      <legend>Splátkový predaj</legend>
      <ul class="payments-menu">
        <li>
          <a class="new-items" href="#"
            ><i class="fa-light fa-plus"></i>Nový splátkový systém</a
          >
        </li>
      </ul>
      <table class="table-credit-payments">
        <thead>
          <tr>
            <td>Platobná metóda :</td>
            <td>Poskytovateľ :</td>
            <td>Zákaznícky kód :</td>
            <td>Nástroje :</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quatro</td>
            <td>VÚB, a.s.</td>
            <td>01234567890</td>
            <td class="payments-tools">
              <ul>
                <li>
                  <a title="Editovať platobnú metódu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť platobnú metódu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Cetelem</td>
            <td>BNP Paris</td>
            <td>01234567890</td>
            <td class="payments-tools">
              <ul>
                <li>
                  <a title="Editovať platobnú metódu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť platobnú metódu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.payments {
  display: flex;
  width: 100%;
  height: 94vh;
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

  .payments-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}

.credit-payments,
.cash,
.installment-sale {
  width: 99%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid $head-color-1;
  //background: $lighten-blue;

  & .payments-menu {
    & li {
      margin: 1.5rem 0 3rem;
    }
  }

  & legend {
    background: $background;
    padding: 0 0.5rem;
    border: 1px solid $head-color-1;
    border-radius: 0.5rem;
  }
}

.table-credit-payments {
  width: 100%;
  margin: 1rem 0 0 0;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;

  thead {
    background: $head-color-1;
    color: $text-color-2;

    & td {
      width: 25%;
      padding: 1rem 0 1rem 0.5rem;
    }
  }

  tbody {
    & tr {
      &:hover,
      &:focus {
        background: $border-color-1;
      }

      & td {
        width: 25%;
        padding: 0.5rem 0 0.5rem 0.5rem;
      }

      & .payments-tools ul {
        display: flex;

        & li {
          margin-right: 1rem;
        }
      }
    }
  }
}

.table-cash {
  width: 100%;
  margin: 1rem 0 0 0;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;

  thead {
    background: $head-color-1;
    color: $text-color-2;

    & td {
      width: 50%;
      padding: 1rem 0 1rem 0.5rem;
    }
  }

  tbody {
    & tr {
      &:hover,
      &:focus {
        background: $border-color-1;
      }
    }

    & td {
      width: 50%;
      padding: 0.5rem 0 0.5rem 0.5rem;
    }

    & .payments-tools ul {
      display: flex;

      & li {
        margin-right: 1rem;
      }
    }
  }
}
</style>
