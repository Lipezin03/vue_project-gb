<template>
  <form @submit.prevent="sendForm" class="form-costs">
    <h3>Введите транзакцию:</h3>

    <select v-model="paymentDiscription" class="form-costs__input">
      <option v-for="option in getCategoryList" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <input
      v-model.number="paymentAmount"
      class="form-costs__input"
      type="text"
      placeholder="Сумма расхода"
      autofocus
    />
    <div v-show="messageError">Введите сумму цифрами</div>
    <input v-model="paymentDate" class="form-costs__input" type="date" />
    <div class="form-costs__button-block">
      <my-button class="form-costs__button">Создать запись</my-button>
    </div>
  </form>
</template>


<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AddCostsForm",
  data() {
    return {
      paymentDiscription: "",
      paymentAmount: "",
      paymentDate: "",
      messageError: false,
    };
  },

  computed: {
    ...mapGetters({
      getCategoryList: "expenses/getCategoryList",
      getShowFormAddCosts: "expenses/getShowFormAddCosts",
    }),

    getDate() {
      if (this.paymentDate) {
        return this.paymentDate;
      } else {
        const today = new Date();
        const d = this.addLeadingZeroInDate(today.getDate());
        const m = this.addLeadingZeroInDate(today.getMonth() + 1);
        const y = today.getFullYear();
        return `${y}-${m}-${d}`;
      }
    },
  },

  methods: {
    ...mapActions({
      loadCategories: "expenses/loadCategories",
    }),

    ...mapMutations({
      addDataToCostsList: "expenses/addDataToCostsList",
      changeShowFormAddCosts: "expenses/changeShowFormAddCosts",
    }),

    sendForm() {
      if (!this.paymentDiscription || !this.paymentAmount) {
        return;
      }

      const payment = [
        {
          id: Date.now(),
          date: this.getDate,
          category: this.paymentDiscription,
          value: +this.paymentAmount,
        },
      ];

      this.addDataToCostsList(payment);

      if (!this.getShowFormAddCosts) {
        this.$router.push("/");
      } else {
        this.changeShowFormAddCosts(false);
      }

      this.paymentDiscription = "";
      this.paymentAmount = null;
      this.paymentDate = "";
    },

    addLeadingZeroInDate(d) {
      return d < 10 ? "0" + d : d;
    },

    autoAddCategoryAndValueInCosts() {
      this.paymentDiscription = this.$route.name;
      this.paymentAmount = this.$route.query.value;
    },
  },

  mounted() {
    if (!this.getCategoryList.length) {
      this.loadCategories();
    }

    this.autoAddCategoryAndValueInCosts();
  },
};
</script>

<style lang="scss" scoped>
.form-costs {
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;

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

  &__button-block {
    align-self: flex-end;
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
