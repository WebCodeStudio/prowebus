<template>
  <table class="page-list">
    <thead class="page-head">
      <tr>
        <td class="page-name">Názov stránky :</td>
        <td class="page-description">Popis stránky :</td>
        <td class="page-tools">Nástroje :</td>
      </tr>
    </thead>
    <tbody class="page">
      <tr>
        <td class="page-name">Home</td>
        <td class="page-description">
          Domovská stránka na ktorej sa nachádza všetko podstatné.
        </td>
        <td class="page-tools">
          <ul>
            <li>
              <router-link
                to="/pages/edit"
                title="Upraviť stránku"
                class="edit"
                @click="edit"
                ><i class="fa-light fa-pencil-alt"></i
              ></router-link>
            </li>
            <li>
              <router-link
                to="/pages/delete"
                title="Odstrániť stránku"
                class="delete"
                @click="remove"
                ><i class="fa-light fa-trash-alt"></i
              ></router-link>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="page-name">Home</td>
        <td class="page-description">
          Domovská stránka na ktorej sa nachádza všetko podstatné.
        </td>
        <td class="page-tools">
          <ul>
            <li>
              <router-link
                to="/pages/edit"
                title="Upraviť stránku"
                class="edit"
                @click="edit"
                ><i class="fa-light fa-pencil-alt"></i
              ></router-link>
            </li>
            <li>
              <router-link
                to="/pages/delete"
                title="Odstrániť stránku"
                class="delete"
                @click="remove"
                ><i class="fa-light fa-trash-alt"></i
              ></router-link>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td class="page-name">Home</td>
        <td class="page-description">
          Domovská stránka na ktorej sa nachádza všetko podstatné.
        </td>
        <td class="page-tools">
          <ul>
            <li>
              <router-link
                to="/pages/edit"
                title="Upraviť stránku"
                class="edit"
                @click="edit"
                ><i class="fa-light fa-pencil-alt"></i
              ></router-link>
            </li>
            <li>
              <router-link
                to="/pages/delete"
                title="Odstrániť stránku"
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

.page-list {
  width: 99%;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
}

.page-head {
  width: 100%;
  background: $head-color-1;
  color: $text-color-2;

  & td {
    padding: 1rem;
    text-align: left;
  }

  & .page-tools {
    width: 10rem;
  }
}

.page {
  display: block;
  height: 56vh;
  position: relative;
  overflow-y: scroll;
}

.page tr,
.page-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.page tr {
  &:hover,
  &:focus {
    background: $border-color-1;
  }

  & td {
    padding: 1rem 0 1rem 1rem;
    text-align: left;
  }
}

.page-name {
  min-width: 12rem;
  width: auto;
}

.page-description {
  width: auto;
}

.page-tools {
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
