<template>
  <div>
    <div
      class="card xs-12 mb-12 lg-12"
      style="width: 18rem; min-width: 280px; max-width: 18rem"
    >
      <img :src="product.picURL" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>

        <p class="card-text">
          {{ product.price }}€ <br />
          {{ product.shortdescription }}
        </p>

        <button
          type="button"
          class="btn btn-primary"
          @click="addToCart(product)"
        >
          Ajouter au panier
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Infos
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ product.name }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <img :src="product.picURL" /><br />
                {{ product.price }}€<br />
                {{ product.longdescription }}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  Ajouter au panier
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["product"],
  
  data(){
      return{
        cart: [],
      }
  },
  methods: {
  addToCart(product) {
    this.cart.push(product);
    console.log(this.cart);
  }
}
  
};
</script>