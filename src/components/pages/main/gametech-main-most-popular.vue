<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

import products from "../../../storage/products/index.js";

export default defineComponent({
  name: "gametech-main-most-popular",

  components: {
    gametechProductsList,
  },

  props: {
    wishlist: {
      type: Array,
      default() {
        return null
      }
    },

    cart: {
      type: Object,
      default() {
        return {}
      },
    },
  },

  computed: {
    mostPopularProductsList() {
      return products.sort((a, b) => b.views - a.views).slice(0, 3)
    },
  },

  methods: {
    like(id) {
      this.$emit('like', id)
    },

    editCartPosition(id, isPlus) {
      this.$emit('editCartPosition', id, isPlus)
    },

    addToCart(id) {
      this.$emit('addToCart', id)
    },
  },
})
</script>

<template>
  <div class="gametech-main-most-popular">
    <h2 class="title">Самые популярные товары</h2>

    <div class="products-wrapper">
      <gametech-products-list
          :wishlist="wishlist"
          :cart="cart"
          :products-list="mostPopularProductsList"
          @like="like"
          @edit-cart-position="editCartPosition"
          @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<style scoped lang="sass">
.gametech-main-most-popular
  width: 100%
  display: flex
  flex-direction: column
  padding: 100px
  gap: 50px
  align-items: center

  > .title
    font-size: 30px
</style>