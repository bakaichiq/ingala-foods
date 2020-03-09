<template>
  <div class="wrap" id="about-us">
    <div class="about">
      <div class="c-nav">
        <h1 class="nav__title">{{ $t('navAbout') }}</h1>
        <div class="nav__line"></div>
      </div>
      <div class="about-content">
        <div class="about-content__text">
          {{ $t('navAboutChap1') }} <br><br>
          {{ $t('navAboutChap2') }} <br><br>
          {{ $t('navAboutChap3') }}
        </div>
        <div class="about-content__logo">
          <img src="~/assets/images/about1.png" alt="" style="max-width: 450px; width: 100%">
        </div>
      </div>
      <div class="about-content">
        <div class="about-content__img">
          <img src="~/assets/images/about2.png" alt="" style="max-width: 450px; width: 100%">
        </div>
        <div class="about-content__text">
          {{ $t('navAboutChap4') }} <br><br>    
          {{ $t('navAboutChap5') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .about {
      margin-bottom: 50px;
    }

    .c-nav {
        margin: 0;
        display: block;
    }

    .nav__title {
        padding-top: 80px; 
        font-size: 28px;
        color: #639d00;
        text-shadow: -1px 0 #2C4600, 0 1px #2C4600, 1px 0 #2C4600, 0 -1px #2C4600;
    }

    .nav__line {
        width: 45px;
        height: 5px;
        background: #639d00;
    }

    .about-content {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .about-content__text {
        max-width: 40%;
        font-size: 14px;
        line-height: 24px;
    }

@media screen and (max-width: 480px) {
  .about-content {
    display: block;
  }

  .about-content__text {
    max-width: 100%;
    margin: 20px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .about-content {
    display: block;
  }

  .about-content__text {
    max-width: 100%;
    margin: 20px;
  }
}
</style>
