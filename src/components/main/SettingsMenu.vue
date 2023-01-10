<template>
  <ul class="settings-menu">
    <li>
      <a href="/marketing" title="Marketing"
        ><i class="fa-light fa-chart-line"></i
      ></a>
    </li>
    <li>
      <a href="/update" title="Aktualizácia"
        ><i class="fa-light fa-upload"></i
      ></a>
      <p class="notification"></p>
    </li>
    <li>
      <a href="/settings" title="Nastavenia"
        ><i class="fa-light fa-cogs"></i
      ></a>
    </li>
    <li>
      <a href="/account" title="Účet"><i class="fa-light fa-user"></i></a>
    </li>
    <li>
      <a href="/logout" title="Odhlásiť sa"
        ><i class="fa-light fa-power-off"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables";

.settings-menu {
  display: flex;
  margin: 0 1rem 0;
  align-items: center;

  & li {
    width: 5rem;
    font-weight: 700;

    &:first-child {
      max-width: 5rem;
    }

    &:nth-child(2) {
      position: relative;
    }

    & .notification {
      position: absolute;
      top: -1rem;
      right: 1rem;
      width: 1rem;
      height: 1rem;
      background: $info-color-2;
      border-radius: 50%;
    }
  }

  & li a {
    display: inline-block;
    width: 100%;
    color: $text-color-2;
    padding: 1rem 0;
    text-align: center;
    border-bottom: 3px solid $text-color-2;

    &:hover,
    &:focus {
      border-bottom: 3px solid $head-color-3;
      transition: all 0.3s;
    }

    & i {
      width: 1.6rem;
      margin-right: 0.5rem;
      font-size: $content-font-xxl;
    }
  }
}
</style>
