<template>
  <section class="complaints-table">
    <h2 class="complaints-title">Reklamácie</h2>
    <ul class="complaints-menu">
      <li>
        <a class="new-items" href="#"><i class="fa-light fa-plus"></i>Nová reklamácia</a>
      </li>
      <li>
        <select name="" id="" class="new-items">
          <option value="none">Žiadne filtrovanie</option>
          <option value="recived">Prijatá</option>
          <option value="process">V riešení</option>
          <option value="ok">Uznaná</option>
          <option value="nok">Neuznaná</option>
          <option value="send">Odoslaná k zákazníkovi</option>
        </select>
      </li>
    </ul>
    <table class="complaints-list">
      <thead class="complaints-head">
        <tr>
          <td class="complaints-number">Číslo reklamácie :</td>
          <td class="name">Meno zákazníka :</td>
          <td class="phone">Kontakt :</td>
          <td class="date-create">Dátum vytvorenia :</td>
          <td class="date-billing">Dátum nákupu :</td>
          <td class="date-end">Dátum ukončenia :</td>
          <td class="track-number">Číslo zásielky :</td>
          <td class="complaints-tools">Nástroje :</td>
        </tr>
      </thead>
      <tbody class="complaints">
        <tr class="nok">
          <td class="complaints-number">20214000123</td>
          <td class="name">Juraj Adamči</td>
          <td class="phone">+421 32 64 84 052</td>
          <td class="date-create">2.11.2021</td>
          <td class="date-end-pay">9.11.2021</td>
          <td class="date-pay">9.11.2021</td>
          <td class="track-number">06501234567890</td>
          <td class="complaints-tools">
            <ul>
              <li>
                <a title="Editovať reklamáciu" class="edit" href="#"
                  ><i class="fa-light fa-pencil-alt"></i
                ></a>
              </li>
              <li>
                <a
                  title="Odoslať e-mail s vybavenou reklamáciou"
                  class="envelope"
                  href="#"
                  ><i class="fa-light fa-envelope"></i
                ></a>
              </li>
              <li>
                <a title="Odstrániť reklamáciu" class="delete" href="#"
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

.complaints-table {
  display: flex;
  width: 100%;
  height: 94vh;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 0.5rem 0 0.5rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  & .complaints-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .complaints-menu {
    display: flex;
    align-self: flex-start;
    margin: 0rem 2.6rem 3rem 0.5%;

    .select > option {
      background: $background;
    }
  }

  & .complaints-list {
    width: 99%;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & .complaints-head {
    width: 100%;
    background: $head-color-3;
    color: $text-color-1;

    & td {
      padding: 1rem 0 1rem 1rem;
      text-align: center;

      &:first-child {
        text-align: left;
      }
    }
  }
  & .complaints {
    .none {
      background: $background;
    }
    .done {
      background: #adff2f;
    }
    .nok {
      background: pink;
    }
  }

.complaints {
  display: block;
  height: 56vh;
  position: relative;
  overflow-y: scroll;
}

.complaints tr,
.complaints-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

  & .complaints tr {
    &:hover,
    &:focus {
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

  & .complaints-number {
    width: 11%;
  }

  & .name {
    width: 19%;
  }

  & .phone {
    width: 10%;
  }

  & .date-create {
    width: 11%;
  }

  & .date-billing {
    width: 10%;
  }

  & .date-end {
    width: 12%;
  }

  & .track-number {
    width: 12%;
  }

  & .complaints-tools {
    width: 8%;

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
