<template>
  <section class="customers-table">
    <h2 class="customers-title">Zákazníci</h2>
    <ul class="customers-menu">
      <li>
        <a class="new-items" href="#"
          ><i class="fa-light fa-plus"></i>Nový zákazník</a
        >
      </li>
    </ul>
    <table class="customers-list">
      <thead class="customers-head">
        <tr>
          <td class="customers-name">Názov / Meno a Priezvisko :</td>
          <td class="phone">Kontakt :</td>
          <td class="ico">IČO :</td>
          <td class="customers-address">Adresa :</td>
          <td class="customers-postal-code">PSČ :</td>
          <td class="customers-city">Mesto :</td>
          <td class="customers-tools">Nástroje :</td>
        </tr>
      </thead>
      <tbody class="customers">
        <tr>
          <td class="customers-name">Juraj Adamči</td>
          <td class="phone">+421 32 72 40 517</td>
          <td class="ico">43 686 672</td>
          <td class="customers-address">Generála M. R. Štefánika 2785/33</td>
          <td class="customers-postal-code">913 04</td>
          <td class="customers-city">Chocholná - Velčice</td>
          <td class="customers-tools">
            <ul>
              <li>
                <a title="Editovať zákazníka" class="edit" href="#"
                  ><i class="fa-light fa-pencil-alt"></i
                ></a>
              </li>
              <li>
                <a
                  title="Nastaviť veľkoobchodné ceny"
                  class="warehouse"
                  href="#"
                  ><i class="fa-light fa-warehouse"></i
                ></a>
              </li>
              <li>
                <a
                  title="Odoslať e-mail s prístupovými údajmi"
                  class="envelope"
                  href="#"
                  ><i class="fa-light fa-envelope"></i
                ></a>
              </li>
              <li>
                <a title="Nastaviť základné heslo" class="key" href="#"
                  ><i class="fa-light fa-key"></i
                ></a>
              </li>
              <li>
                <a title="Zákázať prístup do e-shopu" class="ban" href="#"
                  ><i class="fa-light fa-ban"></i
                ></a>
              </li>
              <li>
                <a title="Odstrániť zákazníka" class="delete" href="#"
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

.customers-table {
  width: 100%;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .customers-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .customers-menu {
    display: flex;
    align-self: flex-start;
    margin: 0rem 2.6rem 3rem 0.5%;
  }

  & .customers-list {
    width: 99%;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & .customers-head {
    width: 100%;
    background: $head-color-1;
    color: $text-color-2;

    & td {
      padding: 1rem;
      text-align: center;

      &:first-child {
        text-align: left;
      }
    }
  }

.customers {
  display: block;
  height: 56vh;
  position: relative;
  overflow-y: scroll;
}

.customers tr,
.customers-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

  & .customers tr {
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

  & .customers-name {
    max-width: 14%;
  }

  & .ico {
    max-width: 10%;
  }

  & .customers-address,
  & .customers-city {
    max-width: 20%;
  }

  & .phone {
    max-width: 14%;
  }

  & .customers-postal-code {
    max-width: 6%;
  }

  & .customers-tools {
    max-width: 20%;

    & ul {
      display: flex;
      justify-content: space-between;

      & li {
        margin-right: 0.25rem;
      }

      & li:last-child {
        margin-right: 1rem;
      }
    }
  }
}
</style>
