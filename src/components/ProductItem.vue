<template>
  <div class="col-md-4 mb-2">
    <div class="card">
      <img :src="product.image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, praesentium.
        </p>
        <p>
          <span class="badge bg-danger"> ${{ product.price }} </span>
        </p>
        <button class="btn btn-primary">
          <i class="bi bi-cart-check"></i>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
