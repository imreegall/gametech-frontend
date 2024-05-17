<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

export default defineComponent({
  name: "gametech-favorites",

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
    isWishlistEmpty() {
      return this.wishlist.length === 0
    },

    likedProductsList() {
      return this.products.filter(product => this.wishlist.includes(product.id))
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
  <div class="gametech-favorites">
    <h2>Избранное</h2>

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
  align-items: center

  @media (min-width: $bigScreenStart)
    padding: 100px
    gap: 50px

  @media (max-width: $smallScreenEnd)
    padding: 20px
    gap: 20px
</style>