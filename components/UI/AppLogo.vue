<template>
  <div class="logo">
    <img class="logo-up" :src="`/logos/LogoChapUp.png`" alt="" />
    <img class="logo-bottom" :src="`/logos/LogoChapDown.png`" alt="">
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  display: flex;
  padding: 4px 0;
}

.logo-up {
  width: 69px;
}

.logo-bottom {
  width: 167px;
}

</style>
