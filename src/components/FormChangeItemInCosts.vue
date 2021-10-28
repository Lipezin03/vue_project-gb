<template>
  <h3>Можете изменить категорию или сумму платежа</h3>
  <form @submit.prevent="cangeItemInCosts" class="form">
    <select v-model="newCategore" class="form__input">
      <option v-for="option in getCategoryList" :value="option" :key="option">
        {{ option }}
      </option>
    </select>

    <input
      v-model="newValue"
      class="form__input"
      type="text"
      placeholder="Сумма платежа"
    />
    <button class="form__button">Изменить</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FormChangeItemInCosts",
  data() {
    return {
      newCategore: "",
      newValue: "",
    };
  },

  computed: {
    ...mapGetters({
      getCategoryList: "expenses/getCategoryList",
    }),
  },

  methods: {
    ...mapMutations({
      cangeItemImCosts: "expenses/cangeItemImCosts",
      changeShowContextMenu: "expenses/changeShowContextMenu",
      changeShowFormChangeItemInCosts:
        "expenses/changeShowFormChangeItemInCosts",
    }),

    cangeItemInCosts() {
      if (this.newValue === "" && this.newCategore === "") {
        this.changeShowContextMenu(false);
        this.changeShowFormChangeItemInCosts(false);
        return;
      } else if (this.newValue === "") {
        const newCosts = {
          category: this.newCategore,
        };
        this.cangeItemImCosts(newCosts);
      } else if (this.newCategore === "") {
        const newCosts = {
          value: +this.newValue,
        };
        this.cangeItemImCosts(newCosts);
      } else {
        const newCosts = {
          category: this.newCategore,
          value: this.newValue,
        };
        this.cangeItemImCosts(newCosts);
      }

      this.newValue = "";
      this.newCategore = "";
      this.changeShowContextMenu(false);
      this.changeShowFormChangeItemInCosts(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
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
    padding: 10px;
    width: 150px;
    color: burlywood;
    margin-top: 15px;
    background-color: rgb(128, 43, 43);
    border-radius: 5px;
  }
}
</style>

