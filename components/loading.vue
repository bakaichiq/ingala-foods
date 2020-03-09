<template lang="html">
  <div v-if="loading" class="page-loader">
    <img :src="'/logos/LogoChapUp.png'" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 0)
    }
  }
}
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 300px;
  background: white;
  z-index: 9999;
}

img {
  display: inline-block;
  animation: rotation 2s infinite linear;
  user-select: none;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
