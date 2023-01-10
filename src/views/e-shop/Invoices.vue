<template>
  <section class="invoices-table">
    <h2 class="invoices-title">Faktúry</h2>
    <ul class="invoices-menu">
      <li>
        <a class="new-items" href="#"
          ><i class="fa-light fa-plus"></i>Nová predfaktúra</a
        >
      </li>
      <li>
        <a class="new-items" href="#"
          ><i class="fa-light fa-plus"></i>Nová faktúra</a
        >
      </li>
      <li>
        <select name="" id="" class="new-items">
          <option value="none">Žiadne filtrovanie</option>
          <option value="created">Vytvorená</option>
          <option value="paid">Uhradená</option>
          <option value="unpaid">Neuhradená</option>
          <option value="credit-note">Dobropisovaná</option>
          <option value="storno">Zrušená</option>
        </select>
      </li>
    </ul>
    <table class="invoices-list">
      <thead class="invoices-head">
        <tr>
          <td class="invoices-number">Číslo faktúry :</td>
          <td class="re-invoices-number">Číslo predfakúry :</td>
          <td class="order-number">Číslo objednávky :</td>
          <td class="name">Meno zákazníka :</td>
          <td class="date-end-pay">Dátum splatnosti :</td>
          <td class="date-pay">Dátum platby :</td>
          <td class="invoices-tools">Nástroje :</td>
        </tr>
      </thead>
      <tbody class="invoices">
        <tr>
          <td class="invoices-number">20215000123</td>
          <td class="re-invoices-number">20216000123</td>
          <td class="order-number">20214000123</td>
          <td class="name">Juraj Adamči</td>
          <td class="date-end-pay">9.11.2021</td>
          <td class="date-pay">9.11.2021</td>
          <td class="invoices-tools">
            <ul>
              <li>
                <a title="Editovať faktúru / predfaktúru" class="edit" href="#"
                  ><i class="fa-light fa-pencil-alt"></i
                ></a>
              </li>
              <li>
                <a title="Vytvoriť faktúru" class="create-invoices" href="#"
                  ><i class="fa-light fa-file-alt"></i
                ></a>
              </li>
              <li>
                <a
                  title="Odoslať faktúru / predfaktúru zákazníkovi"
                  class="envelope"
                  href="#"
                  ><i class="fa-light fa-envelope"></i
                ></a>
              </li>
              <li>
                <a
                  title="Odstrániť faktúru / predfaktúru"
                  class="delete"
                  href="#"
                  ><i class="fa-light fa-trash-alt"></i
                ></a>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables";

.invoices-table {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .invoices-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .invoices-menu {
    display: flex;
    align-self: flex-start;
    margin: 0rem 2.6rem 3rem 0.5%;
  }

  & .invoices-list {
    width: 99%;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & .invoices-head {
    width: 100%;
    background: $ok-button-hover;
    color: $text-color-1;

    & td {
      padding: 1rem 0 1rem 1rem;
      text-align: center;

      &:first-child {
        text-align: left;
      }
    }
  }

.invoices {
  display: block;
  height: 56vh;
  position: relative;
  overflow-y: scroll;
}

.invoices tr,
.invoices-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

  & .invoices tr {
    &:hover {
      background: $border-color-1;
    }

    &:hover {
      background: $border-color-1;
    }

    & td {
      padding: 1rem 0 1rem 1rem;
      text-align: center;

      &:first-child {
        text-align: left;
      }
    }
  }

  & .invoices-number {
    width: 10%;
  }

  & .pre-invoices {
    width: 11%;
  }

  & .order-number {
    width: 12%;
  }

  & .name {
    width: 35%;
  }

  & .date-end-pay {
    width: 12%;
  }

  & .date-pay {
    width: 10%;
  }

  & .invoices-tools {
    width: 9%;

    & ul {
      display: flex;
      justify-content: space-between;

      & li {
        margin-right: 1rem;
      }
    }
  }
}
</style>
