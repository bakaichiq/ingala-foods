<template>
  <ul class="c-menu">
    <li class="c-menu__item">
      <a href="#home" class="c-menu__link">{{ $t('home') }}</a>
    </li>
    <li class="c-menu__item">
      <a href="#about-us" class="c-menu__link">{{ $t('about') }}</a>
    </li>
    <li class="c-menu__item">
      <a href="#why-us" class="c-menu__link">{{ $t('why') }}</a>
    </li>
    <li class="c-menu__item">
      <a href="#products" class="c-menu__link">{{ $t('products') }}</a>
    </li>
    <li class="c-menu__item">
      <a href="#contacts" class="c-menu__link">{{ $t('contacts') }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    source: {
      type: Object,
      default: () => ({})
    },
    dark: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
.c-menu {
  display: flex;
  flex-wrap: wrap;
  float: right;
  padding-top: 0.6rem; 
  $this: &;

  &__item {
    margin: 0.5rem;
    padding: 0.6rem 0;

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  &__link {
    font-size: 1rem;
    font-weight: 700;
    color: $color-black;

    @include on-event {
      text-decoration: none;
    }

    &::after {
      content: '';
      display: block;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: inherit;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  &--dark {
    #{$this}__link {
      color: $color-text-primary;
    }
  }
}

 @media screen and (max-width: 480px) {
   .c-menu {
     display: none;
   }
 }

  @media (min-width: 481px) and (max-width: 1024px) {
   .c-menu {
     display: none;
   }
 }
</style>
