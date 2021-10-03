<template>
  <div class="app">
    <calculator v-if="0"></calculator>
    <router-view />
    <header class="header">
      <h1 class="header__title">My personal expenses</h1>
    </header>
    <div class="My-personal-expenses container">
      <div class="payment-block">
        <div class="payment-block__button-block">
          <my-button @click="showAddForm" class="payment-block__button"
            >Добавить расходы</my-button
          >

          <div class="payment-block__fetch-pagination">
            <h5 class="payment-block__fetch-pagination-title">
              Подгрузить страницу с сервера
            </h5>
            <pagination-2></pagination-2>
          </div>

          <my-button @click="showAddCategory" class="payment-block__button"
            >Добавить категории</my-button
          >
        </div>

        <router-link :to="{ name: 'AddCostsForm', params: { value } }"
          ><div class="link">
            Добавить платеж категории Food с ценой 200
          </div></router-link
        >

        <main>
          <payments-display></payments-display>
        </main>

        <my-pagination
          class="payment-block__paginat"
          @showPage="showPage"
        ></my-pagination>

        <my-modal v-show="getShowFormAddCosts">
          <add-costs-form></add-costs-form>
        </my-modal>

        <my-modal v-show="getShowFormAddCategory">
          <add-category-form></add-category-form>
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
// import { computed } from "@vue/reactivity";
import { mapMutations, mapActions, mapGetters } from "vuex";
import AddCategoryForm from "@/components/AddCategoryForm.vue";

export default {
  components: {
    Calculator,
    AddCostsForm,
    PaymentsDisplay,
    AddCategoryForm,
  },

  data() {
    return {
      value: 2,
    };
  },

  methods: {
    ...mapMutations({
      setCostsListData: "expenses/setCostsListData",
      addDataToCostssList: "expenses/addDataToCostssList",
      changeShowFormAddCategory: "expenses/changeShowFormAddCategory",
      changeShowFormAddCosts: "expenses/changeShowFormAddCosts",
    }),

    ...mapActions({
      fetchData: "expenses/fetchData",
    }),

    showAddForm() {
      this.changeShowFormAddCosts(true);
    },

    showAddCategory() {
      this.changeShowFormAddCategory(true);
    },
  },

  computed: {
    ...mapGetters({
      getShowFormAddCategory: "expenses/getShowFormAddCategory",
      getShowFormAddCosts: "expenses/getShowFormAddCosts",
      getCurrentFetchNumberOfPage: "expenses/getCurrentFetchNumberOfPage",
    }),
  },

  created() {
    this.fetchData();
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

.link {
  color: white;
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
  &__fetch-pagination {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__fetch-pagination-title {
    font-size: 16px;
    color: brown;
    text-align: center;
    margin-top: -10px;
  }

  &__button-block {
    display: flex;
    justify-content: space-between;
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

