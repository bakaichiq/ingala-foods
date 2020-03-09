<template>
  <header>
    <div class="c-header">
      <div class="c-header__content h-container">
        <div
          class="c-header__logo"
          @click="$store.commit('sidenav/closeSidenav')"
        >
        </div>

        <div class="h-hidden-desktop">
          <the-sidenav-toggle
            :close="sidenavIsOpen"
            @toggle-sidenav="$store.commit('sidenav/toggleSidenav')"
          />
        </div>

        <div class="h-show-only-desktop">
          <div class="c-header__right">
            <div v-show="!isHeaderFixed" class="c-header__right-top">
              
            </div>
            <div class="c-header__right-bottom">
              <the-menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

import AppLogo from '~/components/UI/AppLogo'
import TheSidenavToggle from '~/components/Navigation/TheSidenavToggle'
import TheMenu from '~/components/Navigation/TheMenu'

export default {
  components: {
    AppLogo,
    TheSidenavToggle,
    TheMenu
  },
  computed: {
    ...mapState({
      sidenavIsOpen: (state) => state.sidenav.isOpen
    })
  }
}
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: $color-white;
  box-shadow: 0px 2px 8px rgba($color-black, 0.15);
  transition: all 0.3s;

  @include respond($bp-large) {
    height: auto;
    padding-top: 0.2rem;
    padding-bottom: 0.6rem;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo-link {
    display: block;
  }

  &__logo-img {
    display: block;
    width: 22rem;

    @include respond($bp-large) {
      width: 28rem;
    }
  }

  &__right-top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  &__right-bottom {
    display: flex;
  }

  &__btn {
    margin-left: 4rem;
  }

  &__icons {
    display: flex;
    align-items: center;
    margin-right: 3.5rem;
  }

  &__icon {
    display: flex;
    color: $color-black;

    &:not(:last-child) {
      margin-right: 2.6rem;
    }
  }
}

.c-lng {
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 1.2rem;
    }
  }

  &__link {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: $color-black;

    &.nuxt-link-active {
      color: $color-primary;
      text-decoration: none;
    }
  }
}
</style>
