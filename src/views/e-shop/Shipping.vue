<template>
  <section class="shipping">
    <h2 class="shipping-title">Doprava</h2>

    <fieldset class="shipping-list">
      <legend>Doprava</legend>
      <ul class="payments-menu">
        <li>
          <a class="new-items" href="#"
            ><i class="fa-light fa-plus"></i>Nová doprava</a
          >
        </li>
      </ul>
      <table class="table-shipping">
        <thead>
          <tr>
            <td>Doprava :</td>
            <td>Poskytovateľ :</td>
            <td>Cena za dopravu :</td>
            <td>Nástroje :</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doprava</td>
            <td>UPS</td>
            <td>6 € s DPH</td>
            <td class="shipping-tools">
              <ul>
                <li>
                  <a title="Editovať dopravu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť dopravu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Doprava s dobierkou</td>
            <td>UPS</td>
            <td>8 € s DPH</td>
            <td class="shipping-tools">
              <ul>
                <li>
                  <a title="Editovať dopravu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť dopravu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Nadrozmerná doprava</td>
            <td>UPS</td>
            <td>-- € s DPH</td>
            <td class="shipping-tools">
              <ul>
                <li>
                  <a title="Editovať dopravu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť dopravu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Zásielkovňa</td>
            <td>Packeta</td>
            <td>4 € s DPH</td>
            <td class="shipping-tools">
              <ul>
                <li>
                  <a title="Editovať dopravu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť dopravu" class="delete" href="#"
                    ><i class="fa-light fa-trash-alt"></i
                  ></a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Doprava</td>
            <td>UPS</td>
            <td>6 € s DPH</td>
            <td class="shipping-tools">
              <ul>
                <li>
                  <a title="Editovať dopravu" class="edit" href="#"
                    ><i class="fa-light fa-pencil-alt"></i
                  ></a>
                </li>
                <li>
                  <a title="Odstrániť dopravu" class="delete" href="#"
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

.shipping {
  display: flex;
  width: 100%;
  height: 94vh;
  position: relative;
  overflow-y: scroll;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  font: {
    weight: 600;
  }

  .shipping-title {
    margin: 5.5rem 0;
    text-align: center;
  }
}

.shipping-list {
  width: 99%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid $head-color-1;

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

.table-shipping {
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

      & .shipping-tools ul {
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
