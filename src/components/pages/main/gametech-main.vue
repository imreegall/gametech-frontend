<script>
import { defineComponent } from 'vue'

import GametechMainMostPopular from "./gametech-main-most-popular.vue";
import gametechMainNews from "./gametech-main-news.vue";

export default defineComponent({
  name: "gametech-main",

  components: {
    GametechMainMostPopular,
    gametechMainNews,
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
  <main class="gametech-main">
    <gametech-main-most-popular
        :wishlist="wishlist"
        :cart="cart"
        @like="like"
        @edit-cart-position="(id, isPlus) => editCartPosition(id, isPlus)"
        @add-to-cart="(id) => addToCart(id)"
    />

    <gametech-main-news />
  </main>
</template>

<style scoped lang="sass">
.gametech-main
  width: 100%
  display: flex
  flex-direction: column
</style>