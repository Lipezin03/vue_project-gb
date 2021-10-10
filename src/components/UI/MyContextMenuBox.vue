<template>
  <div>
    <div class="wrapper">
      <div @click.stop class="wrapper__context-menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContextMenuBox",
};
</script>


<style lang="scss" scoped>
.wrapper {
  &__context-menu {
    width: 100%;
    height: auto;
    background-color: blanchedalmond;

    padding: 10px;

    border-radius: 5px;
  }
  &__context-menu::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -10px;
    right: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid blanchedalmond;
  }
}
</style>

