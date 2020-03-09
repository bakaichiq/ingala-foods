<template>
  <div class="l-page">
    <the-header-static class="l-page__header l-header" />

    <transition name="slide-left">
      <the-sidenav v-if="sidenavIsOpen" />
    </transition>

    <main class="l-page__content h-page-content-mt">
      <nuxt />
    </main>

    <the-footer class="l-page__footer l-footer" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TheHeaderStatic from '~/components/Navigation/TheHeaderStatic'
import TheSidenav from '~/components/Navigation/TheSidenav'
import TheFooter from '~/components/Footer/Footer'

export default {
  components: {
    TheHeaderStatic,
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
