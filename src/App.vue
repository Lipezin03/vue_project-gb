<template>
  <div class="app">
    <calculator v-if="0"></calculator>
    <header class="header">
      <h1 class="header__title">My personal expenses</h1>
    </header>
    <div class="My-personal-expenses container">
      <div class="payment-block">
        <my-button @click="show" class="payment-block__button"
          >Создать запись расходов</my-button
        >

        <main>
          <payments-display
            :countItem="countItem"
            :costsList="costsList"
            :numberOfPage="currentNumberOfPage"
          ></payments-display>
        </main>

        <my-pagination
          class="payment-block__paginat"
          :olNamberofPages="olNamberofPages"
          @showPage="showPage"
        ></my-pagination>

        <my-modal v-model:show="showForm">
          <add-costs-form @getPaymentForm="getPaymentForm"></add-costs-form>
        </my-modal>
      </div>

      <div class="schedule">Сдесь дальше по заданию будет график</div>
    </div>
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
import AddCostsForm from "@/components/AddCostsForm";
import PaymentsDisplay from "@/components/PaymentsDisplay";
import { computed } from "@vue/reactivity";

export default {
  components: {
    Calculator,
    AddCostsForm,
    PaymentsDisplay,
  },
  data() {
    return {
      costsList: [],
      countItem: 0,
      showForm: false,
      currentNumberOfPage: 1,
      olNamberofPages: computed(() => Math.ceil(this.countItem / 5)),
    };
  },

  methods: {
    showPage(number) {
      this.currentNumberOfPage = +number;
    },

    show() {
      this.showForm = true;
    },

    getPaymentForm(discription, amount, date) {
      this.showForm = false;
      const payment = [
        {
          count: ++this.countItem,
          id: Date.now(),
          date: date,
          category: discription,
          value: amount,
        },
      ];

      this.costsList = [...payment, ...this.costsList];
    },

    fetchData() {
      return [
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
        {
          count: ++this.countItem,
          id: Date.now(),
          date: "2021-09-14",
          category: "Транапорт",
          value: 360,
        },
      ];
    },
  },

  created() {
    this.costsList = this.fetchData();
  },
};
</script>


<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

.container {
  max-width: 1160px;
  padding: 0 10px;
  margin: 0 auto;
}
.app {
  background-color: rgb(35, 44, 44);
  height: 100vh;
  width: 100%;
}

.My-personal-expenses {
  display: flex;
  // padding-bottom: 150px;
  justify-content: space-between;
  align-items: center;
}

.schedule {
  color: rgb(129, 71, 71);
  font-size: 30px;
}

.header {
  width: 100%;
  height: 80px;
  background-color: rgb(48, 13, 13);
  box-shadow: 0 0px 10px 2px rgb(29, 27, 27);
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(105, 90, 66);
}

.payment-block {
  width: 50%;
  &__paginat {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  &__button {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 1023px) {
  .My-personal-expenses {
    display: block;
    padding-bottom: 50px;

    flex-direction: column;
  }

  .app {
    height: 100%;
  }

  .payment-block {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

