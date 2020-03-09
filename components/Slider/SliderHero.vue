<template>
  <div class="c-slider" id="home">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
          <div 
            class="c-slider__img"
            :style="{
              backgroundImage: 'url(' + require(`~/assets/images/${slide.image}`) + ')'
            }"
          >
            <div class="c-slider__content h-container">
              <div class="c-slider__content-block">
                <h2 class="c-slider__heading">{{ slide.heading }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    swiperOption: {
      preloadImages: true,
      lazy: false,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5000
      }
    }
  })
};
</script>

<style lang="scss" scoped>
.c-slider {
  &__link {
    @include on-event {
      text-decoration: none;
    }
  }

  &__img {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(40, 40, 40, 0.31);
      z-index: 1;
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    color: $color-white;
    z-index: 2;
    position: absolute;
    top: 80%;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  &__content-block {
    text-align: center;

    @include respond($bp-large) {
      text-align: left;
    }
  }

  &__heading {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
    text-transform: uppercase;

    @include respond($bp-large) {
      font-size: 2.6rem;
      line-height: 4rem;
    }
  }

  &__text {
    font-size: 1.4rem;
    padding-top: 2.4rem;

    @include respond($bp-large) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }
}
</style>
