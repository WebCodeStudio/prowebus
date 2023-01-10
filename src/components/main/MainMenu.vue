<template>
  <nav class="head-navigation">
    <hr />
    <ul class="head-menu">
      <li>
        <router-link to="/dashboard" title="Súhrn"
          ><i class="fa-light fa-home"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/pages" title="Stránky"
          ><i class="fa-light fa-memo"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/articles" title="Články"
          ><i class="fa-light fa-newspaper"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/menus" title="Menu"
          ><i class="fa-light fa-bars"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/media" title="Médiá"
          ><i class="fa-light fa-photo-film-music"></i
        ></router-link>
      </li>
    </ul>
    <hr />
    <ul class="head-menu">
      <li>
        <router-link to="/eshop" title="Eshop - Súhrn"
          ><i class="fa-light fa-chart-line-up"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/customers" title="Zákazníci"
          ><i class="fa-light fa-users"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/warehouse" title="Sklad"
          ><i class="fa-light fa-warehouse"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/orders" title="Objednávky"
          ><i class="fa-light fa-store"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/invoices" title="Faktúry"
          ><i class="fa-light fa-file-invoice"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/complaints" title="Reklamácie"
          ><i class="fa-light fa-tools"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/payments" title="Platby"
          ><i class="fa-light fa-credit-card"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/shipping" title="Doprava"
          ><i class="fa-light fa-truck"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/loyality" title="Vernostný program"
          ><i class="fa-light fa-gifts"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/stats" title="Štatistiky"
          ><i class="fa-light fa-chart-pie"></i
        ></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.head-navigation {
  width: 5rem;
  background: transparent; //$head-color-1

  .title {
    background: $head-color-4;
    color: $text-color-2;
    text-align: center;
    margin: 2rem 0 0.25rem;
    padding: 0.5rem 0;

    &:first-child {
      margin: 1rem 0 0.25rem;
    }
  }

  & hr {
    width: 100%;
    border: 1px solid transparent;
    background: transparent;
  }

  .head-menu {
    padding-left: 0.25rem;
  }

  .head-menu li {
    &:first-child {
      margin-top: 0rem;
    }

    a {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      padding: 1rem 0rem;
      font-weight: 700;
      border: 1px solid $info-color-1;
      border-radius: 50%; //1rem 0 0 1rem;
      background: $background;
      color: $text-color-1;
      text-align: center;     

      &:hover,
      &:focus {
        background: $head-color-4;
        color: $text-color-2;
        box-shadow: 0 0 1rem $lighten-blue;
        transition: all 0.3s;
      }
    }

    &.selected > a {
      background: $background;
      color: $text-color-1;
      border-radius: 1rem 0 0 1rem;
      box-shadow: 0 0 0 $lighten-blue;
      transition: all 0.3s;
    }
  }

  .head-menu li a > i {
    width: 4rem;
  }
}
</style>
