<template>
  <div class="app">
    <calculator v-if="0"></calculator>
    <router-view />
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";

export default {
  components: {
    Calculator,
  },
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
</style>

