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
        <h3 class="link-underline">КАТАЛОГ</h3>
      </router-link>

      <router-link to="/contacts">
        <h3 class="link-underline">КОНТАКТЫ</h3>
      </router-link>

      <router-link to="/favorites">
        <h3 class="link-underline">ИЗБРАННОЕ</h3>
      </router-link>

      <router-link to="/cart">
        <h3 class="link-underline">КОРЗИНА</h3>
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
  align-items: center

  @media (min-width: $bigScreenStart)
    padding: 50px 100px
    justify-content: space-between

  @media (max-width: $smallScreenEnd)
    padding: 30px 60px
    flex-direction: column
    gap: 50px

  .title
    .red-text
      color: $red

  nav
    display: flex
    gap: 30px
    height: 100%

    @media (min-width: $bigScreenStart)
      align-items: flex-end

    @media (max-width: $smallScreenEnd)
      flex-direction: column
      align-items: center
</style>