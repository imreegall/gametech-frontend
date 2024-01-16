<script>
import {defineComponent} from 'vue'

import gametechProduct from "./gametech-product.vue";

export default defineComponent({
  name: "gametech-products-list",

  components: {
    gametechProduct,
  },

  props: {
    wishlist: {
      type: Array,
      default() {
        return []
      }
    },

    cart: {
      type: Object,
      default() {
        return {}
      },
    },

    productsList: {
      type: Array,
      default() {
        return []
      },
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
  <div class="gametech-products-list">
    <gametech-product
        v-for="product in productsList"
        :product="product"
        :liked="wishlist.includes(product.id)"
        :in-cart-sum="cart[product.id] || 0"
        @like="like(product.id)"
        @edit-cart-position="isPlus => editCartPosition(product.id, isPlus)"
        @add-to-cart="addToCart(product.id)"
    />
  </div>
</template>

<style scoped lang="sass">
.gametech-products-list
  display: flex
  flex-direction: column
  width: 100%
  gap: 25px
  align-items: flex-end
</style>