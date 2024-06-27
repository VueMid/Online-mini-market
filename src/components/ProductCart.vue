<template>
  <div
    class="product-card py-[20px] px-[20px] rounded-lg bg-white shadow-lg w-[300px] flex flex-col justify-center items-center"
  >
    <div class="image">
      <img
        class="w-full h-[250px] object-contain"
        src="https://olcha.uz/image/600x600/products/2023-01-19/gazirovannyy-napitok-pepsi-1-l-191451-0.jpg"
        alt="product-image"
      />

      <div class="text-content">  
        <h3 class="product-name text-xl text-black mt-10 mb-3">Product name</h3>
        <p class="product-description text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          nulla expedita placeat dignissimos, facilis iure quas ratione alias
          porro fugit!
        </p>
        <div class="product-price">
          <p class="text-cyan-800 font-bold my-3 text-xl">$5600</p>
        </div>
      </div>

      <div class="actions w-full flex flex-row justify-between items-center">
        <button
          class="product-edit border-[2px] text-white border-yellow-400 btn bg-yellow-400 w-[120px] rounded-md py-[5px] flex justify-center items-center gap-[5px] active:text-yellow-400 active:opacity-40 duration-200 shadow-lg"
        >
          <i class="fa-solid fa-pen-to-square"></i>
          Edit
        </button>
        <button
          class="product-delete border-[2px] border-red-700 btn bg-red-700 w-[120px] rounded-md py-[5px] flex justify-center items-center gap-[5px] active:text-red-700 active:opacity-40 duration-200 shadow-lg"
        >
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.btn {
  @apply text-lg text-white font-semibold;
}
</style>
