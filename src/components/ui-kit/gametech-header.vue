<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "gametech-header",
})
</script>

<template>
  <header class="gametech-header">
    <nav class="left">
      <h3>КАТАЛОГ</h3>

      <h3>КОНТАКТЫ</h3>
    </nav>

    <h1 class="title">GAME<span class="red-text">TECH</span></h1>

    <nav class="right">
      <div class="favorites"></div>

      <div class="cart"></div>
    </nav>
  </header>
</template>

<style scoped lang="sass">
.gametech-header
  width: 100%
  max-width: 1280px
  display: flex
  align-items: center
  padding: 10px 0
  background-color: #a4a4a4

  nav
    width: 100%
    display: flex
    gap: 20px
    font-size: 30px
    
    > *
      cursor: pointer

      &:hover
        color: $red

    &.left
      justify-content: flex-start

    &.right
      justify-content: flex-end

    .favorites
      width: 40px
      aspect-ratio: 1
      +background-image-settings()
      background-image: url("/assets/images/svg-icons/favorites.svg")

      &:hover
        background-image: url("/assets/images/svg-icons/favorites-hover.svg")

    .cart
      width: 40px
      aspect-ratio: 1
      +background-image-settings()
      background-image: url("/assets/images/svg-icons/cart.svg")

      &:hover
        background-image: url("/assets/images/svg-icons/cart-hover.svg")
    
  > .title
    font-size: 50px

    .red-text
      color: $red
</style>