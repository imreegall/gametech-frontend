<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "gametech-product",

  props: {
    product: {
      type: Object,
      default() {
        return null
      },
    },

    liked: {
      type: Boolean,
      default() {
        return false
      },
    },

    inCartSum: {
      type: Number,
      default() {
        return 0
      },
    },
  },

  methods: {
    handleLikeButtonClick() {
      this.$emit('like')
    },

    editCartPosition(isPlus) {
      this.$emit('editCartPosition', isPlus)
    },

    addToCart() {
      this.$emit('addToCart')
    },
  },

  computed: {
    isInCart() {
      return this.inCartSum > 0
    },
  },
})
</script>

<template>
  <div
      class="gametech-catalog-product"
  >
    <div class="image-wrapper">
      <div
          class="image"
          :style="{
          backgroundImage: `url(/assets/images/products/${ product.id }.webp)`
        }"
      ></div>
    </div>

    <aside>
      <h4>{{ product.name }}</h4>

      <h5 class="description">{{ product.description }}</h5>

      <h3 class="price">Цена: <span class="number">{{ (product.price / 100).toLocaleString() }} ₽</span></h3>
    </aside>

    <div class="buttons-group">
      <button
          class="wishlist"
          :class="{
            'active': liked,
          }"
          @click="handleLikeButtonClick"
      >❤</button>

      <div
          class="cart-buttons"
          v-if="isInCart"
      >
        <button
            @click="editCartPosition(false)"
        >-</button>

        <h5 class="count">{{ inCartSum }}</h5>

        <button
            @click="editCartPosition(true)"
        >+</button>
      </div>

      <button
          v-else
          @click="addToCart"
      >В КОРЗИНУ</button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.gametech-catalog-product
  width: 100%
  display: flex
  background-color: $gray
  padding: 10px
  +border-radius(10px)

  @media (min-width: $bigScreenStart)
    gap: 50px
    justify-content: flex-start

  @media (max-width: $smallScreenEnd)
    gap: 30px
    flex-direction: column

  .image-wrapper
    background-color: white
    +border-radius(10px)

    @media (min-width: $bigScreenStart)
      padding: 20px

    @media (max-width: $smallScreenEnd)
      padding: 10px

    .image
      aspect-ratio: 1
      +background-image-settings()
      +border-radius(10px)
      position: relative

      @media (min-width: $bigScreenStart)
        width: 100px

      @media (max-width: $smallScreenEnd)
        width: 100%

      &::before
        content: ""
        width: 100%
        height: 100%
        position: absolute
        top: 0
        left: 0
        +background-image-settings()
        background-image: url("/assets/images/svg-icons/not-loaded.svg")
        z-index: -5

  aside
    display: flex
    flex-direction: column
    align-items: flex-start
    flex: 1

    @media (min-width: $bigScreenStart)
      justify-content: space-between

    @media (max-width: $smallScreenEnd)
      gap: 15px

    .description
      display: -webkit-box
      -webkit-box-orient: vertical
      overflow: hidden
      -webkit-line-clamp: 3

    .price
      .number
        color: $red

  .buttons-group
    display: flex
    justify-content: space-between

    @media (min-width: $bigScreenStart)
      flex-direction: column
      align-items: flex-end
      margin-left: auto

    @media (max-width: $smallScreenEnd)
      align-items: center

    > button
      padding: 10px 20px
      border: 3px solid black
      +border-radius(10px)
      cursor: pointer
      font-family: 'Tektur', 'Calibri Light', sans-serif
      font-weight: 700
      +user-select(none)

      &:active
        padding-top: 12px
        padding-bottom: 8px

      &:hover
        background-color: #d9d9d9

      &.wishlist
        &:active
          padding-top: 12px
          padding-bottom: 8px

        &:hover
          background-color: #d9d9d9

        &.active
          background-color: #8f0000
          color: white

          &:hover
            background-color: #a90000

    .cart-buttons
      display: flex
      gap: 10px

      button
        padding: 10px 20px
        border: 3px solid black
        cursor: pointer
        font-family: 'Tektur', 'Calibri Light', sans-serif
        font-weight: 700
        +user-select(none)

        &:first-child
          +border-radius(10px 0 0 10px)

        &:last-child
          +border-radius(0 10px 10px 0)

        &:active
          padding-top: 12px
          padding-bottom: 8px

        &:hover
          background-color: #d9d9d9

      .count
        padding: 10px 20px
        border: 3px solid black
        +user-select(none)
        width: 70px
        text-align: center
</style>