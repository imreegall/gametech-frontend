<script>
import { defineComponent } from 'vue'

import gametechHeader from "./components/ui-kit/gametech-header.vue";
import gametechFooter from "./components/ui-kit/gametech-footer.vue";

export default defineComponent({
  name: "app",

  data() {
    return {
      wishlist: [],

      cart: {},
    }
  },

  components: {
    gametechHeader,
    gametechFooter,
  },

  watch: {
    $route() {
      document.title = this.$route.meta.title
    },

    wishlist: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('wishlist', JSON.stringify(newVal));
      },
    },

    cart: {
      deep: true,
      handler(newVal) {
        localStorage.setItem('cart', JSON.stringify(newVal));
      },
    },
  },

  mounted() {
    this.getWishlistFromLS()
    this.getCartFromLS()
  },

  methods: {
    like(id) {
      if (this.wishlist.includes(id)) {
        const indexOfId = this.wishlist.indexOf(id)
        this.wishlist.splice(indexOfId, 1)
      } else {
        this.wishlist.push(id)
      }
    },

    getWishlistFromLS() {
      const stringWishlist = localStorage.getItem('wishlist')

      if (stringWishlist) {
        this.wishlist = JSON.parse(stringWishlist)
      }
    },

    getCartFromLS() {
      const stringCart = localStorage.getItem('cart')

      if (stringCart) {
        this.cart = JSON.parse(stringCart)
      }
    },

    editCartPosition(id, isPlus) {
      if (this.cart[id] === undefined) {
        return
      }

      if (isPlus) {
        if (this.cart[id] >= 99) {
          return
        }

        this.cart[id]++
      } else {
        this.cart[id]--

        if (this.cart[id] === 0) {
          delete this.cart[id]
        }
      }
    },

    addToCart(id) {
      this.cart[id] = 1
    },
  },
})
</script>

<template>
  <div class="app">
    <gametech-header
        :favorites-length="wishlist.length"
        :cart-length="Object.keys(cart).length"
    />

    <router-view
        :wishlist="wishlist"
        :cart="cart"
        @like="like"
        @edit-cart-position="(id, isPlus) => editCartPosition(id, isPlus)"
        @add-to-cart="(id) => addToCart(id)"
    />

    <gametech-footer />
  </div>
</template>

<style scoped lang="sass">
.app
  width: 100%
  max-width: 1280px
  padding: 0 20px
  min-height: 100vh
  margin: 0 auto
  display: flex
  flex-direction: column
  align-items: center
</style>
