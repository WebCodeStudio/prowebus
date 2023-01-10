<template>
  <table class="articles-list">
    <thead class="articles-head">
      <tr>
        <td class="articles-name">Názov článku :</td>
        <td class="articles-description">Krátky popis článku :</td>
        <td class="articles-tools">Nástroje :</td>
      </tr>
    </thead>
    <tbody class="articles">
      <tr>
        <td class="articles-name">Testovací článok</td>
        <td class="articles-description">
          Článok o zaujímavej téme plnej poznania
        </td>
        <td class="articles-tools">
          <ul>
            <li>
              <router-link
                to="/articles/edit"
                title="Upraviť článok"
                class="edit"
                @click="edit"
                ><i class="fa-light fa-pencil-alt"></i
              ></router-link>
            </li>
            <li>
              <router-link
                to="/articles/delete"
                title="Odstrániť článok"
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
@import "@/assets/scss/_variables";

.articles-list {
  width: 99%;
  overflow: hidden;
  border-radius: 0.5rem 0.5rem 0 0;
}

.articles-head {
  width: 100%;
  background: $head-color-1;
  color: $text-color-2;

  & td {
    padding: 1rem;
    text-align: left;
  }

  & .articles-tools {
    width: 10rem;
  }
}

.articles {
  display: block;
  height: 56vh;
}

.articles tr,
.articles-head {
  display: table;
  table-layout: fixed;
  width: 100%;
}

.articles tr {
  &:hover {
    background: $border-color-1;
  }
  & td {
    padding: 1rem 0 1rem 1rem;
    text-align: left;
  }
}

.articles-name {
  min-width: 12rem;
  width: auto;
}

.articles-description {
  width: auto;
}

.articles-tools {
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
