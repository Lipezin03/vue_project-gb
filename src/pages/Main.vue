<template>
  <div class="app">
    <router-view />
    <header class="header">
      <h1 class="header__title">My personal expenses</h1>

      <div class="block-auto-costs">
        <h3 class="block-auto-costs__title">Авто добавлениу расходов:</h3>
        <p
          class="block-auto-costs__text"
          @click="clickAutoCosts(getAutoCostsFood, 'Food')"
        >
          Food с ценой 200
        </p>
        <p
          class="block-auto-costs__text"
          @click="clickAutoCosts(getAutoCostsTransport, 'Transport')"
        >
          Transport с ценой 50
        </p>
        <p
          class="block-auto-costs__text"
          @click="clickAutoCosts(getAutoCostsEntertainment, 'Entertainment')"
        >
          Entertainment с ценой 2000
        </p>
      </div>
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

      <my-modal v-show="getShowFormChangeItemInCosts">
        <form-change-item-in-costs></form-change-item-in-costs>
      </my-modal>

      <div class="schedule">Сдесь дальше по заданию будет график</div>
    </div>
  </div>
</template>

<script>
import AddCostsForm from "@/components/AddCostsForm";
import PaymentsDisplay from "@/components/PaymentsDisplay";
// import { computed } from "@vue/reactivity";
import { mapMutations, mapActions, mapGetters } from "vuex";
import AddCategoryForm from "@/components/AddCategoryForm.vue";
import Pagination2 from "@/components/Pagination2";
import MyPagination from "@/components/MyPagination";
import FormChangeItemInCosts from "@/components/FormChangeItemInCosts.vue";

export default {
  components: {
    AddCostsForm,
    PaymentsDisplay,
    AddCategoryForm,
    Pagination2,
    MyPagination,
    FormChangeItemInCosts,
  },

  data() {
    return {
      rew: 200,
    };
  },

  methods: {
    ...mapMutations({
      setCostsListData: "expenses/setCostsListData",
      addDataToCostssList: "expenses/addDataToCostssList",
      changeShowFormAddCategory: "expenses/changeShowFormAddCategory",
      changeShowFormAddCosts: "expenses/changeShowFormAddCosts",

      clickAutoCosts(event, value, name) {
        this.$router.push({
          name: name,
          query: { value: value },
        });
      },
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
      getShowFormChangeItemInCosts: "expenses/getShowFormChangeItemInCosts",
      getCurrentFetchNumberOfPage: "expenses/getCurrentFetchNumberOfPage",
      getAutoCostsEntertainment: "expenses/getAutoCostsEntertainment",
      getAutoCostsTransport: "expenses/getAutoCostsTransport",
      getAutoCostsFood: "expenses/getAutoCostsFood",
    }),
  },

  created() {
    this.fetchData();
  },
};
</script>


<style lang="scss" scoped>
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
  justify-content: space-between;
  align-items: center;
}

.schedule {
  color: rgb(129, 71, 71);
  font-size: 30px;
}

.header {
  width: 100%;
  height: 83px;
  background-color: rgb(48, 13, 13);
  box-shadow: 0 0px 10px 2px rgb(29, 27, 27);

  &__title {
    text-align: center;
    padding-top: 20px;
    color: rgb(105, 90, 66);
  }
}
.block-auto-costs {
  position: relative;
  top: -58px;

  &__title {
    color: rgb(92, 86, 75);
  }

  &__text {
    padding-top: 2px;
    text-decoration: underline;
    color: rgb(105, 90, 66);
    cursor: pointer;
  }
}

.payment-block {
  width: 60%;
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