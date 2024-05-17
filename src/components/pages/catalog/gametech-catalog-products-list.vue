<script>
import { defineComponent } from 'vue'

import gametechProductsList from "../../ui-kit/gametech-products-list.vue";

import categories from "../../../storage/categories/index.js";

import gametech404 from "../404/gametech-404.vue";
import gametechProduct from "../../ui-kit/gametech-product.vue";

export default defineComponent({
  name: "gametech-catalog-products-list",

  components: {
    gametechProduct,
    gametechProductsList,

    gametech404,
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

  data() {
    return {
      products: []
    }
  },

  mounted() {
    this.fetchProducts()
  },

  computed: {
    categoryPath() {
      return this.$route.params.id
    },

    categoryObject() {
      const categoriesObjectKeys = Object.keys(categories)

      let findResult = null

      categoriesObjectKeys.forEach(categoryKey => {
        if (categories[categoryKey].route === this.categoryPath) {
          findResult = categories[categoryKey]
          return findResult
        }
      })

      return findResult
    },

    categoryTitle() {
      if (!this.categoryObject) {
        return null
      }

      return this.categoryObject.title
    }
  },

  methods: {
    async fetchProducts() {
      if (!this.categoryObject) {
        return
      }

      const currentCategory = this.categoryObject.category

      await fetch(`http://localhost:8080/api/good?category=${ currentCategory }`).then(async (res) => {
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

  watch: {
    categoryTitle: {
      immediate: true,
      handler(newVal) {
        document.title += " " + newVal
      },
    },
  },
})
</script>

<template>
  <div
      class="gametech-catalog-products-list"
      v-if="this.categoryObject"
  >
    <h2>{{ categoryTitle }}</h2>

    <gametech-products-list
        :wishlist="wishlist"
        :cart="cart"
        :products-list="products"
        @like="like"
        @edit-cart-position="editCartPosition"
        @add-to-cart="addToCart"
    />
  </div>

  <gametech404
      v-else
  />
</template>

<style scoped lang="sass">
.gametech-catalog-products-list
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