<template>
  <header>
    <div style="position: fixed; margin-top: -500px;" 
         :class="[{
      'c-header--fixed': isHeaderFixed
    }]">
      <div class="wrap">
        <n-link :to="localePath('index')" class="c-header__logo-link">
          <app-logo 
            class="c-header__logo-img" 
          />
        </n-link>
        <div class="c-header--fixed__right">
          <the-menu-black />
          <vertical-align />
          <lang-icons class="lang-icons" />
        </div>
        <div class="h-hidden-desktop">
            <the-sidenav-toggle
              :close="sidenavIsOpen"
              :white="!sidenavIsOpen && !isHeaderFixed"
              @toggle-sidenav="$store.commit('sidenav/toggleSidenav')"
            />
          </div>
      </div>
    </div>
    <div :class="[
    'c-header', 
    {
      'c-header--white': sidenavIsOpen || isHeaderFixed,
      'c-header--fixed': isHeaderFixed,
      'c-header--only-fixed': sidenavIsOpen
    }]" v-show="!isHeaderFixed">
      <div class="c-header__content h-container">
        <div class="c-header__top">
          <div class="c-header__top-left">
            <div
              class="c-header__logo"
            >
              <n-link :to="localePath('index')" class="c-header__logo-link">
                <app-logo 
                  :white="!isHeaderFixed"
                  class="c-header__logo-img" 
                />
              </n-link>
            </div>
            <vertical-align />
          </div>
          <div class="c-header__top-right">
            <vertical-align />
            <social-icons />
            <vertical-align />
            <lang-icons />
          </div>
        </div>
        <div class="c-header__bottom">
          <the-menu class="c-menu" :dark="isHeaderFixed" />
          <div class="h-hidden-desktop">
            <the-sidenav-toggle
              :close="sidenavIsOpen"
              :white="!sidenavIsOpen && !isHeaderFixed"
              @toggle-sidenav="$store.commit('sidenav/toggleSidenav')"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import AppLogo from "~/components/UI/AppLogo"
import TheSidenavToggle from '~/components/Navigation/TheSidenavToggle'
import TheMenu from "~/components/Navigation/TheMenu"
import TheMenuBlack from "~/components/Navigation/TheMenuBlack"
import VerticalAlign from "~/components/UI/VerticalAlign"
import SocialIcons from "~/components/UI/Icons/SocialIcons"
import LangIcons from "~/components/UI/Icons/LangIcons"

export default {
  components: {
    AppLogo,
    TheSidenavToggle,
    TheMenu,
    TheMenuBlack,
    VerticalAlign,
    SocialIcons,
    LangIcons
  },
  data: () => ({
    isHeaderFixed: false
  }),
  computed: {
    ...mapState({
      sidenavIsOpen: (state) => state.sidenav.isOpen
    })
  },
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollPosition > 200) {
        this.isHeaderFixed = true
      } else {
        this.isHeaderFixed = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s;

  @include respond($bp-large) {
    height: auto;
    // padding-top: 0.4rem;
    // padding-bottom: 0.4rem;
  }

  &--white {
    background-color: $color-white;
  }

  &--fixed {
    width: 100%;
    margin: 0 !important;
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 9999;
    background-color: $color-white;
    box-shadow: 0px 2px 8px rgba($color-black, 0.15);
    animation: headerSlideDown 0.5s ease forwards;


    @include respond($bp-large) {
      // padding-top: 0.6rem;
      // padding-bottom: 0.6rem;
    }
  }

  &--fixed__right {
      display: flex;
    }
    
  &--only-fixed {
    position: fixed;
  }

  // &__content {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }

  &__top {
    display: flex;
    justify-content: space-between;
  }

  &__top-left {
    display: flex;
  }

  &__top-right {
    display: flex;
  }

  &__logo-link {
    display: block;
  }

  &__logo-img {
    display: block;
  }

  &__right-top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  &__right-bottom {
    display: flex;
  }
}

.wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}

 @media screen and (max-width: 480px) {
    .c-header__top-right {
      display: none;
    }

    .c-header__content {
      display: flex;
      justify-content: space-between;
    }

    .logo-up {
      width: 50px;
    }

    .logo-bottom {
      width: 80px;
    }

    .h-container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .wrap {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .lang-icons {
      display: none;
    }
  }

  @media (min-width: 480px) and (max-width: 1024px) {
   .c-header__top-right {
      display: none;
    }

    .c-header__content {
      display: flex;
      justify-content: space-between;
    }

    .logo-up {
      width: 50px;
    }

    .logo-bottom {
      width: 80px;
    }

    .h-container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .wrap {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .lang-icons {
      display: none;
    } 
  }

</style>
