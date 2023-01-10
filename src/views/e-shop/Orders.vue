<template>
  <section class="orders-table">
    <h2 class="orders-title">Objednávky</h2>
    <ul class="orders-menu">
      <li>
        <a class="new-items" href="#"
          ><i class="fa-light fa-plus"></i>Nová objednávka</a
        >
      </li>
      <li>
        <select name="" id="" class="new-items">
          <option value="none">Žiadne filtrovanie</option>
          <option value="created">Vytvorená</option>
          <option value="confirmed">Potvrdená</option>
          <option value="working">Rozpracovaná</option>
          <option value="published">Vydaná</option>
          <option value="storno">Zrušená</option>
        </select>
      </li>
    </ul>
    <table class="orders-list">
      <thead class="orders-head">
        <tr>
          <td class="orders-number">Číslo objednávky :</td>
          <td class="name">Meno zákazníka :</td>
          <td class="phone">Kontakt :</td>
          <td class="date-create">Vytvorenie :</td>
          <td class="date-end-pay">Splatnosť :</td>
          <td class="date-pay">Platba :</td>
          <td class="state">Stav :</td>
          <td class="track-number">Číslo zásielky :</td>
          <td class="orders-tools">Nástroje :</td>
        </tr>
      </thead>
      <tbody class="orders">
        <tr>
          <td class="orders-number">20214000123</td>
          <td class="name">Juraj Adamči</td>
          <td class="phone">+421 32 64 84 052</td>
          <td class="date-create">2.11.2021</td>
          <td class="date-end-pay">9.11.2021</td>
          <td class="date-pay">9.11.2021</td>
          <td class="state">Rozpracovaná</td>
          <td class="track-number">06501234567890</td>
          <td class="orders-tools">
            <ul>
              <li>
                <a title="Editovať objednávku" class="edit" href="#"
                  ><i class="fa-light fa-pencil-alt"></i
                ></a>
              </li>
              <li>
                <a title="Vytvoriť faktúru" class="warehouse" href="#"
                  ><i class="fa-light fa-file-alt"></i
                ></a>
              </li>
              <li>
                <a title="Poznámka k objednávke" class="info" href="#"
                  ><i class="fa-light fa-info-circle"></i
                ></a>
              </li>
              <li>
                <a title="Odstrániť objednávku" class="delete" href="#"
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

.orders-table {
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
  

  & .orders-title {
    margin: 5.5rem 0;
    text-align: center;
  }

  & .orders-menu {
    display: flex;
    align-self: flex-start;
    margin: 0rem 2.6rem 3rem 0.5%;
  }

  & .orders-list {
    width: 99%;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & .orders-head {
    width: 100%;
    background: $head-color-2;
    color: $text-color-1;

    & td {
      padding: 1rem 0 1rem 1rem;
      text-align: center;

      &:first-child {
        text-align: left;
      }
    }
  }

.orders {
  display: block;
  height: 56vh;
}

.orders tr,
.orders-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

  & .orders tr {
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

  & .orders-number {
    width: 12%;
  }

  & .name {
    width: 20%;
  }

  & .phone {
    width: 11%;
  }

  & .date-create,
  & .date-end-pay,
  & .date-pay {
    width: 9%;
  }

  & .state {
    width: 10%;
  }

  & .track-number {
    width: 12%;
  }

  & .orders-tools {
    width: 9%;

    & ul {
      display: flex;
      justify-content: space-between;

      & .fas,
      & .far {
        font: {
          size: $content-font-md;
        }
      }
      & li {
        margin-right: 1rem;
      }

      & .info {
        color: $info-color-1;
      }
    }
  }
}
</style>
