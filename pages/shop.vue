<template>
  <div>
    <div class="card-group">
      <Product v-for="item in products" :key="item.itemid" :product="item" />
    </div>
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
            "https://www.femmesdelartisanat.com/wp-content/uploads/2014/05/img-test-medium-330x215.jpg",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          itemid: 1,
        },
        {
          name: "item2",
          price: 600,
          picURL:
            "https://www.femmesdelartisanat.com/wp-content/uploads/2014/05/img-test-medium-330x215.jpg",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          itemid: 2,
        },
        {
          name: "item3",
          price: 700,
          picURL:
            "https://www.femmesdelartisanat.com/wp-content/uploads/2014/05/img-test-medium-330x215.jpg",
          shortdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          longdescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, officiis.",
          itemid: 3,
        },
      ],
    };
  },

};
</script>