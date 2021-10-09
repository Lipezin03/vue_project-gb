<template>
  <div @click="hidenModal" class="modal-block">
    <div @click.stop class="modal-block__content"><slot></slot></div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "MyModal",

  computed: {
    ...mapGetters({
      getShowFormAddCosts: "expenses/getShowFormAddCosts",
    }),
  },

  methods: {
    ...mapMutations({
      changeShowFormAddCategory: "expenses/changeShowFormAddCategory",
      changeShowFormAddCosts: "expenses/changeShowFormAddCosts",
      cangeShowFormCangeItemInCosts: "expenses/cangeShowFormCangeItemInCosts",
    }),

    hidenModal() {
      if (!this.getShowFormAddCosts) {
        this.$router.push("/");
      } else {
        this.changeShowFormAddCosts(false);
      }
      this.changeShowFormAddCategory(false);
      this.cangeShowFormCangeItemInCosts(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-block {
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(44, 46, 45, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    border-radius: 5px;
    padding: 25px;
    max-width: 500px;
    background-color: teal;
  }
}
</style>
