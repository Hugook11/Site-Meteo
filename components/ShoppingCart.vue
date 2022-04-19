<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Mon panier</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      
      
      <p><ProductInCart v-for="product in shoppingCart" :key="product.itemid" :product="product" />
      <!-- {{ $store.getters.getStoreCart }} -->
      </p>
    </div>
  </div>
</template>

<script>
import ProductInCart from "~/components/ProductInCart.vue";

export default{
  name: "ShoppingCart",
  components: {
    ProductInCart,
  },

  computed: {
    shoppingCart(){
      return this.$store.state.cart
    }
  }
}
</script>
