<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

import products from "../../../storage/products/index.js";

export default defineComponent({
  name: "gametech-favorites",

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
    isWishlistEmpty() {
      return this.wishlist.length === 0
    },

    likedProductsList() {
      return products.filter(product => this.wishlist.includes(product.id))
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
  <div class="gametech-favorites">
    <h2 class="title">Избранное</h2>

    <h3
        v-if="isWishlistEmpty"
    >Пусто</h3>

    <gametech-products-list
        v-else
        :wishlist="wishlist"
        :cart="cart"
        :products-list="likedProductsList"
        @like="like"
        @edit-cart-position="editCartPosition"
        @add-to-cart="addToCart"
    />
  </div>
</template>

<style scoped lang="sass">
.gametech-favorites
  width: 100%
  display: flex
  flex-direction: column
  padding: 100px
  gap: 50px
  align-items: center

  > .title
    font-size: 30px
</style>