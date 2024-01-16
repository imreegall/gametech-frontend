<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "gametech-footer",
})
</script>

<template>
  <footer class="gametech-footer">
    <router-link to="/">
      <h1 class="title">GAME<span class="red-text">TECH</span></h1>
    </router-link>

    <nav>
      <router-link to="/catalog">
        <h4 class="link-underline">КАТАЛОГ</h4>
      </router-link>

      <router-link to="/contacts">
        <h4 class="link-underline">КОНТАКТЫ</h4>
      </router-link>

      <router-link to="/favorites">
        <h4 class="link-underline">ИЗБРАННОЕ</h4>
      </router-link>

      <router-link to="/cart">
        <h4 class="link-underline">КОРЗИНА</h4>
      </router-link>
    </nav>
  </footer>
</template>

<style scoped lang="sass">
.gametech-footer
  width: 100%
  background-color: $gray
  margin-top: auto
  +border-radius(20px 20px 0 0)
  display: flex
  justify-content: space-between
  align-items: center
  padding: 50px 100px

  .title
    font-size: 50px

    .red-text
      color: $red

  nav
    display: flex
    gap: 30px
    height: 100%
    align-items: flex-end
</style>