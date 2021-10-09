<template>
  <div class="pagination">
    <div class="pagination__block">
      <button
        @click="click"
        v-for="n in getAllNumberOfPages"
        :key="n"
        class="pagination__button"
        :class="{
          'current-page': getCurrentNumberOfPage === n,
        }"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "MyPagination",

  computed: {
    ...mapGetters({
      getAllNumberOfPages: "expenses/getAllNumberOfPages",
      getCurrentNumberOfPage: "expenses/getCurrentNumberOfPage",
    }),
  },

  methods: {
    ...mapMutations({
      changeCurrentNumberOfPage: "expenses/changeCurrentNumberOfPage",
      changeShowMainListAndStartList: "expenses/changeShowMainListAndStartList",
    }),

    click(event) {
      this.changeCurrentNumberOfPage(+event.target.textContent);
      this.changeShowMainListAndStartList();
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  width: 100%;
  padding-right: 10px;
  &__block {
    width: 205px;
    margin: auto;
    overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
  &__block::-webkit-scrollbar {
    display: none;
  }
  &__button {
    display: inline-block;
    margin: 5px;
    padding: 15px;
    background: rgb(75, 34, 34);
  }
  &__button:hover {
    cursor: pointer;
  }
}

.current-page {
  background-color: teal;
}
</style>

