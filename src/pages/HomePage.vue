<template>
  <div
    class="container py-[50px] flex flex-col justify-center items-center gap-16"
  >
    <div class="flex justify-between items-center w-full">
      <h2 class="text-center text-3xl text-gray-700">SuperMarket</h2>
      <button
        @click="$router.push({ name: 'CreateProduct' })"
        class="border-[2px] bg-blue-500 text-white border-blue-500 btn bg-bleborder-blue-500 w-[120px] rounded-md py-[5px] flex justify-center items-center gap-[5px] active:text-bleborder-blue-500 active:opacity-40 duration-200 shadow-lg"
      >
        <i class="fa-solid fa-plus"></i>
        <span>Add New</span>
      </button>
    </div>
    <div
      class="wrapper w-full flex flex-row flex-wrap justify-start items-center gap-6"
    >
      <ProductCart v-for="item in 10" :key="item" />
    </div>
  </div>
</template>
<script>
import ProductCart from "../components/ProductCart.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    ProductCart,
  },
};
</script>
<style scoped></style>
