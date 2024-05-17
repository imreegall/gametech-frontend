<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

export default defineComponent({
  name: "gametech-main-most-popular",

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
    mostPopularProductsList() {
      return this.products.sort((a, b) => b.popular - a.popular).slice(0, 3)
    },
  },

  methods: {
    async fetchProducts() {
      await fetch(`http://localhost:8080/api/good`).then(async (res) => {
        const result = await res.json()

        this.products = result

        console.log('Fetching Goods Result (success):')

        console.table(result)
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
  align-items: center

  @media (min-width: $bigScreenStart)
    padding: 100px
    gap: 50px

  @media (max-width: $smallScreenEnd)
    padding: 20px
    gap: 20px

  > .title
    text-align: center

  .products-wrapper
    width: 100%
</style>