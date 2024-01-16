<script>
import { defineComponent } from 'vue'

import categories from "../../../storage/categories/index.js";

export default defineComponent({
  name: "gametech-catalog",

  data() {
    return {
      categories,
    }
  },

  methods: {
    handleCategoryClick(path) {
      console.log("test", path)
      this.$router.push({ path: `/catalog/${ path }` })
    },
  },
})
</script>

<template>
  <div class="gametech-catalog">
    <h2 class="title">Выберите категорию</h2>

    <div class="categories-wrapper">
      <div
          class="category-wrapper"
          v-for="category in categories"
          @click="handleCategoryClick(category.route)"
      >
        <div
            class="category"
            :style="{
              backgroundImage: `url(${ category.img })`
            }"
        >
          <h2 class="title">{{ category.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.gametech-catalog
  width: 100%
  display: flex
  flex-direction: column
  padding: 100px calc((1280px - 400px * 2 - 10px - 20px * 2) / 2)
  gap: 50px
  align-items: center

  > .title
    font-size: 30px

  .categories-wrapper
    display: flex
    flex-wrap: wrap
    gap: 10px

    .category-wrapper
      padding: 20px
      width: 400px
      height: 200px
      position: relative
      cursor: pointer
      border: 5px solid rgba(220, 220, 220, .5)

      &::after
        width: 100%
        height: 100%
        background-color: #dcdcdc
        position: absolute
        top: 0
        left: 0
        z-index: 10
        content: ""
        +opacity(50)

      &:hover
        &::after
          background-color: #dcdcdc
          +opacity(20)

      .category
        width: 100%
        height: 100%
        +background-image-settings()
        background-size: contain
        display: flex
        align-items: center
        justify-content: center
        //border: 1px solid #727272

        > .title
          font-size: 40px
          text-align: center
          +user-select(none)
          z-index: 15
          color: transparent
          -webkit-text-stroke: 2px #000000
</style>