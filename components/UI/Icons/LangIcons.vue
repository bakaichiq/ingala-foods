<template>
  <div class="lang-icon">
    <a href="/" class="icon-link">
      EN
    </a>
    <a href="/ru" class="icon-link">
      RU
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .lang-icon {
    align-items: center;
    display: flex;
    width: 100px;
    justify-content: center;
  }

  .icon-link {
    color: #fff;
    text-align: center;
    margin: 0 5px;
  }

  .icon-link:hover {
    color: #639D00;
  }

@media screen and (max-width: 480px) {
  .icon-link {
    color: #000;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .icon-link {
    color: #000;
  }
}


</style>