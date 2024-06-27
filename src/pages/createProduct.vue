<template>
  <main
    class="container py-[50px] flex flex-col justify-between items-center gap-5"
  >
    <div class="head w-full flex justify-between items-center">
      <h2 class="text-3xl text-gray-700">Create product</h2>
      <button
        @click="$router.push({ name: 'HomePage' })"
        class="border-[2px] bg-blue-500 text-white border-blue-500 btn bg-bleborder-blue-500 w-[100px] rounded-md py-[5px] flex justify-center items-center gap-[5px] active:text-bleborder-blue-500 active:opacity-40 duration-200 shadow-lg"
      >
        <i class="fa-solid fa-house"></i>
        <span>Go back</span>
      </button>
    </div>
    <form
      @submit.prevent="createProduct"
      class="form w-full max-w-[400px] mx-auto p-5 rounded bg-white shadow"
    >
      <h3 class="mb-5">New Product</h3>
      <div class="form-control mb-4">
        <label
          class="inline-block w-full text-sm text-gray-400 mb-2"
          for="name"
        >
          Product name
        </label>
        <input
          v-model.trim="poruct.name"
          autocomplete="off"
          id="name"
          class="inline-block w-full rounded p-2 shadow outline-blue-400"
          type="text"
          placeholder="Enter here name of product"
        />

        <p
          v-if="errors.name"
          class="error-message text-xs text-red-600 font-bold"
        >
          {{ errors.name }}
        </p>
      </div>

      <div class="form-control mb-4">
        <label
          class="inline-block w-full text-sm text-gray-400 mb-2"
          for="description"
        >
          Product description
        </label>
        <input
          v-model.trim="poruct.description"
          autocomplete="off"
          id="description"
          class="inline-block w-full rounded p-2 shadow outline-blue-400"
          type="text"
          placeholder="Enter here product's description"
        />

        <p
          v-if="errors.description"
          class="error-message text-xs text-red-600 font-bold"
        >
          {{ errors.description }}
        </p>
      </div>

      <div class="form-control mb-4">
        <label
          class="inline-block w-full text-sm text-gray-400 mb-2"
          for="price"
        >
          Product price
        </label>
        <input
          v-model.number="poruct.price"
          autocomplete="off"
          id="price"
          class="inline-block w-full rounded p-2 shadow outline-blue-400"
          type="number"
          placeholder="Enter here price of product"
        />

        <p
          v-if="errors.price"
          class="error-message text-xs text-red-600 font-bold"
        >
          {{ errors.price }}
        </p>
      </div>

      <div class="form-control mb-5">
        <label
          class="inline-block w-full text-sm text-gray-400 mb-2"
          for="image"
        >
          Product image
        </label>
        <input
          v-model.trim="poruct.image"
          autocomplete="off"
          id="image"
          class="inline-block w-full rounded p-2 shadow outline-blue-400"
          type="text"
          placeholder="Ente here address of image url"
        />

        <p
          v-if="errors.image"
          class="error-message text-xs text-red-600 font-bold"
        >
          {{ errors.image }}
        </p>
      </div>

      <div class="action w-full flex justify-end">
        <button
          class="btn border-[2px] bg-blue-500 text-white border-blue-500 btn bg-bleborder-blue-500 w-[100px] rounded-md py-[5px] flex justify-center items-center gap-[5px] active:text-bleborder-blue-500 active:opacity-40 duration-200 shadow-lg"
        >
          <i class="fa-solid fa-plus"></i>
          <span>Create</span>
        </button>
      </div>
    </form>
  </main>
</template> 
<script>
export default {
  data() {
    return {
      poruct: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
      errors: {
        name: "",
        description: "",
        price: "",
        image: "",
      },
      isButtonActive: "",
    };
  },
  computed: {
    isValid() {
      if (
        this.errors.name &&
        this.errors.description &&
        this.errors.price &&
        this.errors.image
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    poruct: {
      handler(newValue) {
        if (newValue.name.length < 4) {
          this.errors.name = "*Minimum length is 4 characters";
        } else if (newValue.name.length > 15) {
          this.errors.name = "*At least 15 characters";
        } else {
          this.errors.name = "";
        }

        if (newValue.description.length < 4) {
          this.errors.description = "*Minimum length is 4 characters";
        } else if (newValue.description.length > 10) {
          this.errors.description = "*At least 10 characters";
        } else {
          this.errors.description = "";
        }

        if (newValue.price < 1) {
          this.errors.price = "*Minimum length is 1 characters";
        } else if (typeof newValue.price !== "number") {
          this.errors.price = "*Please enter here only numbers";
        } else {
          this.errors.price = "";
        }

        const httpRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

        if (newValue.image.length < 1) {
          this.errors.image = "*Minimum length is 1 characters";
        } else if (!httpRegex.test(newValue.image)) {
          this.errors.image =
            "*Please enter here correct address of image's url";
        } else {
          this.errors.image = "";
        }
      },
      deep: true,
    },
  },
  methods: {
    createProduct() {
      console.log(this.poruct);
      console.log(this.isValid);
    },
  },
};
</script>
<style></style> 
