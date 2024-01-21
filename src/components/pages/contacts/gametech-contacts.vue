<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "gametech-contacts",
})
</script>

<template>
  <div class="gametech-contacts">
    <h2>Контакты</h2>

    <div class="contacts-wrapper">
      <div class="image"></div>

      <div class="contacts">
        <div class="contact">
          <h4 class="title">Адрес:</h4>

          <h4 class="value">Россия, г. Казань, ул. Большая Красная, д. 55</h4>
        </div>

        <div class="contact">
          <h4 class="title">Телефон:</h4>

          <h4 class="value link-underline"><a href="tel:79377708601">+7 (937) 770-86-01</a></h4>
        </div>

        <div class="contact">
          <h4 class="title">Электронная почта:</h4>

          <h4 class="value link-underline"><a href="mailto:imreegall@gmail.com">imreegall@gmail.com</a></h4>
        </div>

        <div class="contact">
          <h4 class="title">Доставка</h4>

          <h4 class="value">По всей России</h4>
        </div>

        <div class="contact">
          <h4 class="title">ОГРНИП</h4>

          <h4 class="value">316861700133226</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.gametech-contacts
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

  .contacts-wrapper
    display: flex
    flex-direction: column
    gap: 20px
    align-items: center
    width: 100%

    .image
      +background-image-settings()
      background-image: url("/assets/images/contacts/background.jpg")
      width: 100%
      height: 300px
      +border-radius(20px)

    .contacts
      display: flex
      flex-direction: column
      gap: 10px
      width: 100%

      @media (min-width: $bigScreenStart)
        align-items: flex-start

      @media (max-width: $smallScreenEnd)
        align-items: center

      .contact
        display: flex
        gap: 30px
        align-items: baseline

        @media (min-width: $bigScreenStart)

        @media (max-width: $smallScreenEnd)
          width: 100%
          justify-content: space-between

        > .title
          color: $red

        .value
          @media (min-width: $bigScreenStart)

          @media (max-width: $smallScreenEnd)
            text-align: right
</style>