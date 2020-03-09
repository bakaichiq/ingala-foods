<template>
  <nav class="c-sidenav">
    <the-sidenav-menu />

    <div class="c-sidenav__bottom">
      <ul
        @click="$store.commit('sidenav/closeSidenav')"
      >
          <social-icons-green />
          <br>
          <lang-icons />
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

import TheSidenavMenu from '~/components/Navigation/TheSidenavMenu'
import SocialIconsGreen from "~/components/UI/Icons/SocialIconsGreen"
import LangIcons from "~/components/UI/Icons/LangIcons"

export default {
  components: {
    TheSidenavMenu,
    SocialIconsGreen,
    LangIcons
  },
  computed: {
    ...mapState({
      sidenavIsOpen: (state) => state.sidenav.isOpen
    })
  }
}
</script>

<style lang="scss" scoped>
.c-sidenav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 77px;
  left: 0;
  width: 100%;
  padding-bottom: 3rem;
  background: $color-white;
  z-index: 999;
  overflow-y: auto;

  &__bottom {
    margin-top: auto;
    padding-top: 2rem;
  }
}

.c-lng {
  @include flex-center;
  margin-bottom: 2rem;

  &__item {
    padding: 0 1.2rem;

    &:not(:last-child) {
      border-right: 1px solid #c8c7cc;
    }
  }

  &__link {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #c8c7cc;

    &.nuxt-link-active {
      color: $color-primary;
      text-decoration: none;
    }
  }
}

.c-social {
  @include flex-center;

  &__item {
    &:not(:last-child) {
      margin-right: 3.2rem;
    }
  }

  &__link {
    color: $color-text-primary;
  }
}

 @media screen and (max-width: 480px) {
   .c-sidenav__bottom {
     margin: 0 auto;
   }
 }

 @media (min-width: 481px) and (max-width: 1024px) {
   .c-sidenav__bottom {
     margin: 0 auto;
   }
 }
</style>
