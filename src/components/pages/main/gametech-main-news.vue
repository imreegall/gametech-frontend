<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "gametech-main-news",

  data() {
    return {
      news: []
    }
  },

  mounted() {
    this.getAllPosts()
  },

  methods: {
    async getAllPosts() {
      await fetch('http://localhost:8080/api/post').then(async res => {
        const result = await res.json()

        this.news = result

        console.log('Fetching Posts Result (success):')

        console.table(result)
      }).catch(err => {
        console.error('Fetching Posts Error:', err)
      })
    }
  }
})
</script>

<template>
  <div class="gametech-main-news">
    <h2>Новости</h2>

    <div class="news-wrapper">
      <div
          class="news-block"
          v-for="newsBlock in news"
      >
        <h3>{{ newsBlock.title }}</h3>

        <h6 class="date">{{ (new Date(newsBlock.created)).toLocaleString() }}</h6>

        <div
            class="image"
            :style="{
              backgroundImage: `url(/assets/images/news/${ newsBlock.id }.webp)`
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
  gap: 50px
  align-items: center

  @media (min-width: $bigScreenStart)
    padding: 0 100px 100px

  @media (max-width: $smallScreenEnd)
    padding: 20px

  .news-wrapper
    display: flex
    flex-direction: column
    width: 100%
    align-items: center

    @media (min-width: $bigScreenStart)
      gap: 50px

    @media (max-width: $smallScreenEnd)
      gap: 30px

    .news-block
      display: flex
      flex-direction: column
      gap: 10px
      align-items: flex-start
      width: 100%
      background-color: $gray
      +border-radius(20px)

      @media (min-width: $bigScreenStart)
        padding: 20px 40px

      @media (max-width: $smallScreenEnd)
        padding: 20px

      .date
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
        //font-size: 14px
        text-indent: 20px
</style>