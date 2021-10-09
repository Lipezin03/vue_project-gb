<template>
  <div>
    <div class="pagination2">
      <div class="pagination2__block">
        <button
          @click="click"
          v-for="n in getAllFetchPage"
          :key="n"
          class="pagination2__button"
          :class="{ active: getClassIsActivInPagination2 === n }"
        >
          {{ n }}
        </button>
      </div>
    </div>
  </div>
</template>

 <script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Pagination2",

  computed: {
    ...mapGetters({
      getAllFetchPage: "expenses/getAllFetchPage",
      getCurrentFetchNumberOfPage: "expenses/getCurrentFetchNumberOfPage",
      getClassIsActivInPagination2: "expenses/getClassIsActivInPagination2",
    }),
  },

  methods: {
    ...mapMutations({
      setFetchPage: "expenses/setFetchPage",
      cangeClassIsActivInPagination2: "expenses/cangeClassIsActivInPagination2",
    }),

    ...mapActions({
      fetchData: "expenses/fetchData",
    }),

    click(event) {
      this.setFetchPage(event.target.textContent);
      this.cangeClassIsActivInPagination2(+event.target.textContent);
      this.fetchData(event.target.textContent);
    },
  },
};
</script>

 <style lang="scss" scoped>
.pagination2 {
  width: 100%;
  padding-right: 10px;
  margin-top: 10px;
  &__block {
    width: 205px;
    margin: auto;
    overflow: auto;
    overflow-y: hidden;
    white-space: nowrap;
    text-align: center;
  }
  &__block::-webkit-scrollbar {
    display: none;
  }
  &__button {
    display: inline-block;
    //     // display: block;
    //     // margin: auto;
    padding: 5px;
    width: 50px;
    background: rgb(75, 34, 34);
    margin-left: 5px;
  }
  &__button:hover {
    cursor: pointer;
  }
}

.current-page {
  background-color: teal;
}
.active {
  background-color: teal;
}
</style>

