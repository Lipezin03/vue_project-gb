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
  border-radius: 3px;
  background-color: teal;
  transition: 0.5s;
}
.my-button:hover {
  transition: 0.3s;
  transform: scale(1.02);
  box-shadow: 1px 2px 10px rgba(63, 171, 179, 0.2);
  cursor: pointer;
}
</style>
