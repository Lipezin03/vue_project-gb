<template>
  <div class="app">
    <calculator></calculator>
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";

export default {
  components: { Calculator },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

.app {
  padding: 20px;
}
</style>

