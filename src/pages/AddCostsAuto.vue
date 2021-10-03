<template>
  <div>
    <my-modal><add-costs-form></add-costs-form></my-modal>
  </div>
</template>

<script>
import AddCostsForm from "@/components/AddCostsForm";
export default {
  name: "AddCostsAuto",
  components: {
    AddCostsForm,
  },
};
</script>

<style>
</style>