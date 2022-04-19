<template>
  <div>
    <div class="card-group">
      <Product v-for="item in products" :key="item.itemid" :product="item" />
    </div>
    <pre>{{ $store.state.cart }}</pre>
  </div>
</template>

<script>
import Product from "~/components/Product.vue";

export default {
  name: "shop",
  layout: "default",

  components: {
    Product,
  },

  data() {
    return {
      cart: [],
      products: [
        {
          name: "item1",
          price: 500,
          picURL:
            "https://www.formica.com/fr-lu/-/media/formica/emea/products/swatch-images/f7914/f7914-swatch.jpg?rev=e148fd19c9764cd8b4555b210e343343",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          itemid: 1,
        },
        {
          name: "item2",
          price: 600,
          picURL:
            "https://professionnels.tarkett.be/media/img/M/TH_3917011_3707003_3708011_3912011_3914011_800_800.jpg",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
         itemid: 2,
        },
        {
          name: "item3",
          price: 700,
          picURL:
            "https://www.formica.com/fr-fr/-/media/formica/emea/products/swatch-images/f7940/f7940-swatch.jpg?rev=044cda722f514ae68016a1e8668c1046",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          itemid: 3,
        },
      ],
    };
  },

};
</script>