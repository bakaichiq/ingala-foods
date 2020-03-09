<template>
  <div class="c-dropdown" role="button" @click="$emit('toggle-sidenav')">
    <span
      class="c-dropdown__icon"
      :class="{
        'c-dropdown__icon--close': close,
        'c-dropdown__icon--white': white
      }"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    close: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.c-dropdown {
  @include flex-center;
  position: relative;
  width: 3.6rem;
  height: 3.6rem;

  &__icon {
    $width: 1.8rem;
    $height: 0.2rem;
    $space: 0.4rem;
    $color: #323232;

    position: relative;
    width: $width;
    height: $height;
    background: $color;
    transition: all 0.2s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: inherit;
      height: inherit;
      background: $color;
      transition: transform 0.2s;
    }

    &::before {
      top: -($height + $space);
    }

    &::after {
      top: $height + $space;
    }

    &--close {
      background: transparent;

      &::before,
      &::after {
        top: 0;
      }

      &::before {
        transform: rotate(-135deg);
      }

      &::after {
        transform: rotate(135deg);
      }
    }

    &--white {
      background: $color-white;

      &::before,
      &::after {
        background: $color-white;
      }
    }
  }
}
</style>
