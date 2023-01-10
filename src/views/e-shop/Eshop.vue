<template>
  <section class="dashboard-table">
    <h2 class="info-title">Prehľad základných informácií</h2>
    <article class="info-wrap">
      <fieldset class="orders">
        <legend class="section-title">Objednávky - Predfaktúry :</legend>
        <ul class="sale-stats">
          <li class="stat-name"><h3>Celkovo :</h3></li>
          <li class="stat-value"><h3>999.999.999,00 €</h3></li>
          <li class="stat-name ok"><h4>Uhradené :</h4></li>
          <li class="ok"><h4>+ 999.999.000,00 €</h4></li>
          <li class="stat-name nok"><h4>Neuhradené :</h4></li>
          <li class="nok"><h4>- 999,00 €</h4></li>
        </ul>
      </fieldset>
      <fieldset class="invoices">
        <legend class="section-title">Faktúry :</legend>
        <ul class="sale-stats">
          <li class="stat-name"><h3>Celkovo :</h3></li>
          <li class="stat-value"><h3>999.999.999,00 €</h3></li>
          <li class="stat-name ok"><h4>Uhradené :</h4></li>
          <li class="ok"><h4>+ 999.999.000,00 €</h4></li>
          <li class="stat-name nok"><h4>Neuhradené :</h4></li>
          <li class="nok"><h4>- 999,00 €</h4></li>
        </ul>
      </fieldset>
      <fieldset class="complaints">
        <legend class="section-title">Reklamácie :</legend>
        <ul class="sale-stats">
          <li class="stat-name"><h3>Celkovo :</h3></li>
          <li class="stat-value"><h3>20</h3></li>
          <li class="stat-name ok"><h4>Vyriešené :</h4></li>
          <li class="ok"><h4>19</h4></li>
          <li class="stat-name nok"><h4>Nevyriešené :</h4></li>
          <li class="nok"><h4>1</h4></li>
        </ul>
      </fieldset>
    </article>
    <article class="login-info">
      <fieldset class="orders-stats">
        <legend class="section-title">Posledných 5 nových objednávok</legend>
        <ul>
          <li>20190001</li>
          <li>20190002</li>
          <li>20190003</li>
          <li>20190004</li>
          <li>20190005</li>
          <li><a class="more-info" href="#">Viac informácií...</a></li>
        </ul>
      </fieldset>
      <fieldset class="registrations">
        <legend class="section-title">Posledných 5 nových registrácií</legend>
        <ul>
          <li>Ferko Mrkvička</li>
          <li>Ferko Mrkvička</li>
          <li>Ferko Mrkvička</li>
          <li>Ferko Mrkvička</li>
          <li>Ferko Mrkvička</li>
          <li><a class="more-info" href="#">Viac informácií...</a></li>
        </ul>
      </fieldset>
      <fieldset class="logins">
        <legend class="section-title">Posledných 5 nových prihlásení</legend>
        <ul>
          <li>Administrátor</li>
          <li>Administrátor</li>
          <li>Administrátor</li>
          <li>Administrátor</li>
          <li>Administrátor</li>
          <li><a class="more-info" href="#">Viac informácií...</a></li>
        </ul>
      </fieldset>
    </article>
  </section>
  <div id="overlay">test</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.dashboard-table {
  width: 100%;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  position: relative;
  overflow-y: scroll;
  height: 94vh;
  border-radius: 1rem 0 1rem 0;
  border: 1px solid $head-color-1;
  background: $background;

  & .info-title {
    margin: 5.5rem 0 0 0;
    text-align: center;
  }

  & .info-wrap,
  & .login-info {
    display: flex;

    justify-content: space-around;
    flex-wrap: wrap;

    margin: 1rem 0 2.1rem;

    & .orders,
    & .invoices,
    & .complaints {
      background: $lighten-blue;

      min-width: 30%;
      width: 32rem;

      margin: 3rem 1rem;

      border: 1px solid $head-color-1;
      border-radius: 0.5rem;

      & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }

      & .section-title {
        text-align: left;

      }

      & .sale-stats {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        padding: 1rem;

        text-align: right;

        & h3,
        & h4 {
          margin: 0.5rem 0;
        }

        & .ok {
          color: $standard-green;
        }

        & .nok {
          color: $head-color-3;
        }

        & .stat-name {
          text-align: left;
        }

        & li {
          width: 50%;
        }
      }
    }

    & .registrations,
    & .logins,
    & .orders-stats {
      min-width: 30%;
      width: 32rem;

      background: $lighten-blue;
     
      margin: 3rem 1rem;

      border: 1px solid $head-color-1;
      border-radius: 0.5rem;

      & legend {
        background: $background;
        padding: 0 0.5rem;
        border: 1px solid $head-color-1;
        border-radius: 0.5rem;
      }

      & .section-title {
          text-align: left;
      }

      & a {
        text-decoration: underline;
        color: $head-color-3;
        font: {
          weight: 700;
        }
      }

      ul {
        padding: 1rem;

        & li {
          padding: 0.75rem 1rem 1rem;
        }
      }
    }
  }
}
#overlay {
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  position: absolute;
  z-index: 9999;
  top: 0;
  color: $text-color-2;
}
</style>
