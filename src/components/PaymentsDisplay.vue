<template>
  <div class="wrapper">
    <table class="payments-display">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Дата</th>
          <th scope="col">Категория</th>
          <th scope="col">Сумма, руб</th>
          <th scope="col">Меню</th>
        </tr>
      </thead>

      <tbody>
        <transition-group name="element-table">
          <tr v-for="(el, i) in getShowCurrentList" :key="el.id">
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
            <td>
              <div
                :ref="
                  (el) => {
                    if (el) divContextMenu[i] = { [i]: false };
                  }
                "
                @click="showContextMenu(el)"
                class="payments-display__context-menu-box"
              >
                <div
                  @click="closeContextMenu(el)"
                  @click.stop
                  v-if="el.id === getShowContextMenu"
                  class="payments-display__context-menu-close"
                ></div>
                <transition name="animation-memu">
                  <my-context-menu-box
                    v-if="el.id === getShowContextMenu"
                    class="payments-display__context-menu-box-menu"
                  >
                    <my-button
                      @click="cangeCosts(el)"
                      class="payments-display__context-menu-box-button"
                      >Редактировать</my-button
                    >
                    <my-button
                      @click="delCosts(el)"
                      class="payments-display__context-menu-box-button"
                      >Удалить</my-button
                    >
                  </my-context-menu-box>
                </transition>

                <div class="payments-display__context-menu-box-icon">
                  <div
                    class="payments-display__context-menu-box-icon-item"
                  ></div>
                  <div
                    class="payments-display__context-menu-box-icon-item"
                  ></div>
                  <div
                    class="payments-display__context-menu-box-icon-item"
                  ></div>
                </div>
              </div>
            </td>
          </tr>
        </transition-group>
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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PaymentsDisplay",
  data() {
    return {
      divContextMenu: [], // Этот пример я оставил для себя
    };
  },

  methods: {
    ...mapMutations({
      deleteCostsInCostsList: "expenses/deleteCostsInCostsList",
      changeShowFormChangeItemInCosts:
        "expenses/changeShowFormChangeItemInCosts",
      addItemChangingToCosts: "expenses/addItemChangingToCosts",
      changeShowContextMenu: "expenses/changeShowContextMenu",
    }),

    showContextMenu(item) {
      this.changeShowContextMenu(item.id);
    },
    closeContextMenu() {
      this.changeShowContextMenu(false);
    },

    delCosts(costs) {
      this.deleteCostsInCostsList(costs);
    },

    cangeCosts(costs) {
      this.changeShowFormChangeItemInCosts(true);
      this.addItemChangingToCosts(costs);
    },
  },

  computed: {
    ...mapGetters({
      getCostsLength: "expenses/getCostsLength",
      getShowCurrentList: "expenses/getShowCurrentList",
      getStartListShow: "expenses/getStartListShow",
      getShowContextMenu: "expenses/getShowContextMenu",
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
.hiden {
  display: block;
}

.payments-display {
  &__context-menu-box {
    margin: 0 auto;
    position: relative;
  }

  &__context-menu-close {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }

  &__context-menu-box-menu {
    position: absolute;

    top: 30px;
    left: -150px;
    z-index: 2;
  }
  &__context-menu-box-button {
    background-color: inherit;
    padding: 5px;
    display: inline-block;
    margin-top: 4px;
    text-align: center;
    border-radius: 5px;
    transition: 0.3s;
    padding-left: 30px;
    padding-right: 30px;
  }

  &__context-menu-box-button:hover {
    transition: 0.3s;
    transform: scale(1.02);
    box-shadow: 1px 2px 10px rgba(36, 41, 44, 0.2);
    background-color: sandybrown;
  }

  &__context-menu-box-icon {
    width: 7px;
    margin: 0 auto;
  }
  &__context-menu-box-icon-item {
    width: 4px;
    height: 4px;
    margin-bottom: 2px;
    background-color: black;
    border: none;
    border-radius: 50%;
  }
}

.animation-memu-enter-active {
  transition: all 0.3s ease;
}
.animation-memu-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.animation-memu-enter-from, .animation-memu-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

// .element-table-item {
//   display: inline-block;
//   margin-right: 10px;
// }
.element-table-enter-active,
.element-table-leave-active {
  transition: all 1s ease;
}
.element-table-enter-from,
.element-table-leave-to {
  opacity: 0;
  transform: translateX(30px);
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
  width: 20%;
}

thead th:nth-child(3) {
  width: 48%;
  text-align: center;
}

thead th:nth-child(4) {
  width: 30%;
}
thead th:nth-child(5) {
  width: 12%;
  text-align: center;
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
