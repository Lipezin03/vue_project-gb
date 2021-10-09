<template>
  <div class="wrapper">
    <div class="context-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "MyContextMenuBox",

  computed: {
    // ...mapGetters({
    //   getShowContextMenu: "expenses/getShowContextMenu",
    // }),
  },
};
</script>


<style lang="scss" scoped>
.context-menu {
  width: 200px;
  height: 80px;
  background-color: blanchedalmond;
  padding: 10px;

  border-radius: 5px;
}
.context-menu::before {
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
</style>

