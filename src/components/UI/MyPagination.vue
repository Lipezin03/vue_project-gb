<template>
  <div class="pagination">
    <div class="pagination__block">
      <button
        @click="click"
        v-for="n in olNamberofPages"
        :key="n"
        class="pagination__button"
        :class="{
          'current-page': currentPage === n,
        }"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: {
    olNamberofPages: {
      type: Number,
      defoult: 1,
      required: true,
    },
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  methods: {
    click(event) {
      this.currentPage = +event.target.textContent;
      this.$emit("showPage", event.target.textContent);
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

