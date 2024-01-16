<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

import products from "../../../storage/products/index.js";

export default defineComponent({
  name: "gametech-cart",

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
    isCartEmpty() {
      return Object.keys(this.cart).length === 0
    },

    cartSum() {
      let sum = 0

      Object.keys(this.cart).forEach(productId => {
        const productObj = products.find(product => product.id === productId)

        sum += productObj.price * this.cart[productId]
      })

      return sum
    },

    cartProductsList() {
      return products.filter(product => Object.keys(this.cart).includes(product.id))
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
  <div class="gametech-cart">
    <h2 class="title">Корзина</h2>

    <h3
        v-if="isCartEmpty"
    >Пусто</h3>

    <template v-else>
      <gametech-products-list
          :wishlist="wishlist"
          :cart="cart"
          :products-list="cartProductsList"
          @like="like"
          @edit-cart-position="editCartPosition"
          @add-to-cart="addToCart"
      />

      <div class="itogo">
        <h2 class="title">Итого:</h2>

        <h1 class="value">{{ cartSum.toLocaleString() }} ₽</h1>
      </div>
    </template>
  </div>
</template>

<style scoped lang="sass">
.gametech-cart
  width: 100%
  display: flex
  flex-direction: column
  padding: 100px
  gap: 50px
  align-items: center

  > .title
    font-size: 30px

  .itogo
    display: flex
    flex-direction: column
    gap: 20px
    align-items: flex-start
    align-self: flex-end
    min-width: 200px

    .title
      font-size: 20px

    .value
      font-size: 24px
</style>