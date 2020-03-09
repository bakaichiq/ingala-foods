<template>
  <div class="l-page">
    <the-header class="l-page__header l-header" />

    <transition name="slide-left">
      <the-sidenav v-if="sidenavIsOpen" />
    </transition>

    <main class="l-page__content">
      <nuxt />
    </main>
    <the-footer class="l-page__footer l-footer" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TheHeader from "~/components/Navigation/TheHeader"
import TheSidenav from '~/components/Navigation/TheSidenav'
import TheFooter from "~/components/Footer/Footer"

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  head() {
    return this.$nuxtI18nSeo()
  },
  computed: {
    ...mapState({
      sidenavIsOpen: (state) => state.sidenav.isOpen
    })
  },
  watch: {
    sidenavIsOpen(val) {
      if (val) {
        document.documentElement.classList.add('h-overflow-hidden')
      } else {
        document.documentElement.classList.remove('h-overflow-hidden')
      }
    }
  }
}
</script>  

<style>
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
