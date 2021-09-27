<template>
  <button class="my-button"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style lang="scss" scoped>
.my-button {
  padding: 15px;
  background: none;

  background-color: teal;
  transition: 0.5s;
}
.my-button:hover {
  cursor: pointer;
}
</style>
