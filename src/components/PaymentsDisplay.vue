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
        <tr v-for="el in getShowCurrentList" :key="el.id">
          <th scope="row">
            {{ getShowCurrentList.indexOf(el) + 1 + getStartListShow }}
          </th>
          <td>
            {{ el.date }}
          </td>
          <td>
            {{ el.category }}
          </td>
          <td>
            {{ el.value }}
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th scope="row" colspan="2">Общее число записей</th>
          <td colspan="2">
            {{ getCostsLength }}
          </td>
        </tr>
      </tfoot>
    </table>
    <div v-if="!getShowCurrentList.length > 0" class="message">
      Список расходов пуст, загрузите данные с сервера или добавте свои
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PaymentsDisplay",

  methods: {},

  computed: {
    ...mapGetters({
      getCostsLength: "expenses/getCostsLength",
      getShowCurrentList: "expenses/getShowCurrentList",
      getStartListShow: "expenses/getStartListShow",
    }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}
.message {
  color: brown;
  font-size: 32px;
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
