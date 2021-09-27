<template>
  <div v-if="show" @click="hidenModal" class="modal-block">
    <div @click.stop class="modal-block__content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    show: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    hidenModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-block {
  position: fixed;
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
