<template>
    <div class="p-index">
        <section class="p-index__main-slider">
            <slider-hero :slides="slides" />
        </section>
        <section class="h-container">
            <about />
        </section>
        <section>
            <advantages />
        </section>
        <section>
            <products class="h-container" />
        </section>
        <section>
            <contacts class="h-container" />
        </section>
    </div>
</template>

<script>
import SliderHero from '~/components/Slider/SliderHero'
import About from '~/components/About/About'
import Advantages from '~/components/Advantages/Advantages'
import Products from '~/components/Products/Products'
import Contacts from '~/components/Contacts/Contacts'

export default {
    components: {
        SliderHero,
        About,
        Advantages,
        Products,
        Contacts
    },
    data() {
        return {
            slides: [
                {
                    id: 1,
                    image: 'slide1.png',
                    heading: this.$t('slide1')
                },
                {
                    id: 2,
                    image: 'slide2.png',
                    heading: this.$t('slide2')
                },
                {
                    id: 3,
                    image: 'slide3.png',
                    heading: this.$t('slide3')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.p-index {

  &__preview-slides {
    padding-top: 1.6rem;

    @include respond($bp-large) {
      padding-top: 4rem;
    }
  }
}
</style>