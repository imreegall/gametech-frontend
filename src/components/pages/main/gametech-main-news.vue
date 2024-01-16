<script>
import { defineComponent } from 'vue'

import news from "../../../storage/news/index.js";

export default defineComponent({
  name: "gametech-main-news",

  data() {
    return {
      news,
    }
  },
})
</script>

<template>
  <div class="gametech-main-news">
    <h2 class="title">Новости</h2>

    <div class="news-wrapper">
      <div
          class="news-block"
          v-for="newsBlock in news"
      >
        <h3 class="title">{{ newsBlock.title }}</h3>

        <h6 class="date">{{ new Date(newsBlock.date) }}</h6>

        <div
            class="image"
            v-if="newsBlock.image"
            :style="{
              backgroundImage: `url(/assets/images/news/${ newsBlock.id }.webp)`,
            }"
        ></div>

        <h6
            class="description"
            v-for="text in newsBlock.description.split('\n\n')"
            v-html="text"
        ></h6>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.gametech-main-news
  width: 100%
  display: flex
  flex-direction: column
  padding: 0 100px 100px
  gap: 50px
  align-items: center

  > .title
    font-size: 30px

  .news-wrapper
    display: flex
    flex-direction: column
    gap: 50px
    width: 100%
    align-items: center

    .news-block
      display: flex
      flex-direction: column
      gap: 10px
      align-items: flex-start
      width: 100%
      background-color: $gray
      padding: 20px 40px
      +border-radius(20px)

      > .title
        font-size: 30px

      .date
        font-size: 12px
        color: #9d9d9d

      .image
        width: 100%
        height: 300px
        +background-image-settings()
        //background-color: white
        +border-radius(20px)
        display: flex
        align-items: center
        justify-content: center
        margin: 30px 0
        position: relative

        &::before
          content: ""
          width: 100px
          height: 100px
          +background-image-settings()
          background-image: url("/assets/images/svg-icons/not-loaded.svg")
          +opacity(50)
          z-index: -5
          display: block
          position: absolute

      .description
        font-size: 14px
        text-indent: 20px
</style>