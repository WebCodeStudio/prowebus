<template>
  <table class="menus-list">
    <thead class="menus-head">
      <tr>
        <td class="menus-name">Názov menu :</td>
        <td class="menus-description">Krátky popis menu :</td>
        <td class="menus-tools">Nástroje :</td>
      </tr>
    </thead>
    <tbody class="menus">
      <tr>
        <td class="menus-name">Hlavné menu</td>
        <td class="menus-description">Základné menu webstránky</td>
        <td class="menus-tools">
          <ul>
            <li>
              <router-link
                to="/menus/edit"
                title="Upraviť menu"
                class="edit"
                @click="edit"
                ><i class="fa-light fa-pencil-alt"></i
              ></router-link>
            </li>
            <li>
              <router-link
                to="/menus/delete"
                title="Odstrániť menu"
                class="delete"
                @click="remove"
                ><i class="fa-light fa-trash-alt"></i
              ></router-link>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  methods: {
    edit() {
      this.$emit("edit");
    },
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.menus-list {
  width: 99%;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
}

.menus-head {
  width: 100%;
  background: $head-color-1;
  color: $text-color-2;

  & td {
    padding: 1rem;
    text-align: left;
  }

  & .menus-tools {
    width: 10rem;
  }
}

.menus {
  display: block;
  height: 56vh;
}

.menus tr,
.menus-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.menus tr {
  &:hover {
    background: $border-color-1;
  }

  & td {
    padding: 1rem 0 1rem 1rem;
    text-align: left;
  }
}

.menus-name {
  min-width: 12rem;
  width: auto;
}

.menus-description {
  width: auto;
}

.menus-tools {
  width: 8rem;

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
</style>
