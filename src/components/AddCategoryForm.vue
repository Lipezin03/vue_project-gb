<template>
  <form @submit.prevent="addNewCategory" class="form-add-category">
    <h3>Добавить новую категорию</h3>
    <input
      v-model="newCategory"
      class="form-add-category__input"
      type="text"
      placeholder="Название категории"
    />
    <my-button class="form-add-category__button">Создать категорию</my-button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AddCategoryForm",

  data() {
    return {
      newCategory: "",
    };
  },

  methods: {
    ...mapMutations({
      setCategories: "expenses/setCategories",
      changeShowFormAddCategory: "expenses/changeShowFormAddCategory",
    }),

    addNewCategory() {
      this.setCategories(this.newCategory);
      this.newCategory = "";
      this.changeShowFormAddCategory(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-add-category {
  width: 400px;
  height: auto;

  &__input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid black;
    background-color: rgb(202, 180, 150);
    outline: none;
    border: none;
    border-radius: 5px;
  }

  &__button {
    width: 150px;
    color: burlywood;
    margin-top: 15px;
    background-color: rgb(128, 43, 43);
    border-radius: 5px;
  }
}
</style>

