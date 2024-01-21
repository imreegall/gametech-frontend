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
    <h2>Корзина</h2>

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
        <h3>Итого:</h3>

        <h2>{{ cartSum.toLocaleString() }} ₽</h2>
      </div>
    </template>
  </div>
</template>

<style scoped lang="sass">
.gametech-cart
  width: 100%
  display: flex
  flex-direction: column
  align-items: center

  @media (min-width: $bigScreenStart)
    padding: 100px
    gap: 50px

  @media (max-width: $smallScreenEnd)
    padding: 20px
    gap: 20px

  .itogo
    display: flex
    flex-direction: column
    gap: 20px
    align-items: flex-start

    @media (min-width: $bigScreenStart)
      min-width: 200px
      align-self: flex-end

    @media (max-width: $smallScreenEnd)
      align-self: flex-start
</style>