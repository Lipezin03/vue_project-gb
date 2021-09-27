<template>
  <div class="wrapper">
    <table class="payments-display">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Дата</th>
          <th scope="col">Категория</th>
          <th scope="col">Сумма, руб</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="n in showTheNumberOfItems || showListSecond" :key="n">
          <th scope="row">{{ n + startListShow }}</th>
          <td>
            {{ costsList[n - 1 + startListShow].date }}
          </td>
          <td>
            {{ costsList[n - 1 + startListShow].category }}
          </td>
          <td>{{ costsList[n - 1 + startListShow].value }}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th scope="row" colspan="2">Общее число записей</th>
          <td colspan="2">{{ countItem }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    costsList: {
      type: Array,
      defoult: () => [],
      required: true,
    },
    numberOfPage: {
      type: Number,
      defoult: 1,
      required: true,
    },
    countItem: {
      type: Number,
      defoult: 0,
      required: true,
    },
  },
  data() {
    return {
      startListShow: 0,
      frontier: 5,
      showMainList: 5,
      showListSecond: 0,
      lengthList: this.costsList.length,
    };
  },

  methods: {},

  computed: {
    showTheNumberOfItems() {
      if (this.lengthList < this.showMainList) {
        return this.lengthList;
      } else {
        return this.showMainList;
      }
    },
  },
  beforeUpdate() {
    this.showMainList = 5;

    if (this.numberOfPage === 1) {
      this.startListShow = 0;
      this.frontier = 5;
    } else {
      const finalFrontier = this.showMainList * this.numberOfPage;

      this.frontier = finalFrontier;

      this.startListShow = this.frontier - this.showMainList;

      let currentArrLengthShow = this.costsList.filter((el, idx) => {
        return idx + 1 > this.startListShow && idx + 1 <= this.frontier;
      });

      if (currentArrLengthShow.length === 5) {
        this.showMainList = 5;
      } else {
        this.showListSecond = currentArrLengthShow.length;

        this.showMainList = 0;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}

table {
  table-layout: fixed;
  width: 100%;
  height: auto;
  // font-size: 1.1vw;
  font-size: 14px;
  border-collapse: collapse;
}

thead th:nth-child(1) {
  width: 15%;
}

thead th:nth-child(2) {
  width: 25%;
}

thead th:nth-child(3) {
  width: 55%;
  text-align: center;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px 10px;
  // border: 1px solid black;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
  // color: white;
  color: #000000;
  // text-shadow: 1px 1px 1px rgb(36, 35, 32);
}

tfoot th {
  text-align: right;
}

thead,
tfoot {
  color: lighten($color: wheat, $amount: 6);
  text-shadow: 1px 1px 1px black;
}

tfoot th {
  // color: lighten($color: wheat, $amount: 6);
  color: teal;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #6e7174;
}

tbody tr:nth-child(even) {
  background-color: #444043;
}

table {
  background-color: #383836;
}

@media screen and (max-width: 1023px) {
  table {
    font-size: 12px;
  }
}
</style>
