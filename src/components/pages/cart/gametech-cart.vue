<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

export default defineComponent({
  name: "gametech-cart",

  components: {
    gametechProductsList,
  },

  data() {
    return {
      products: []
    }
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

  mounted() {
    this.fetchProducts()
  },

  computed: {
    isCartEmpty() {
      return Object.keys(this.cart).length === 0
    },

    cartSum() {
      let sum = 0

      Object.keys(this.cart).forEach(productId => {
        const productObj = this.products.find(product => product.id === productId)

        if (!productObj) {
          return 0
        }

        sum += productObj.price / 100 * this.cart[productId]
      })

      return sum
    },

    cartProductsList() {
      return this.products.filter(product => Object.keys(this.cart).includes(product.id))
    },
  },

  methods: {
    async fetchProducts() {
      await fetch(`http://localhost:8080/api/good`).then(async (res) => {
        const result = await res.json()

        console.log('Fetching Goods Result (success):', result)

        this.products = result
      }).catch(err => {
        console.log('Fetching Goods Error:', err)
      })
    },

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