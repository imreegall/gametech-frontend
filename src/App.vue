<script>
import { defineComponent } from 'vue'

import gametechHeader from "./components/ui-kit/gametech-header.vue";

export default defineComponent({
  name: "app",

  components: {
    gametechHeader,
  },
})
</script>

<template>
  <div class="app">
    <gametech-header />
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
