<template>
      <div class="contacts" id="contacts">
        <div class="c-nav">
          <h1 class="nav__title">{{ $t('navContacts') }}</h1>
          <div class="nav__line"></div>
        </div>
        <div class="contacts-content">
          <ul class="contacts-content__list">
            <li class="contacts-content__item">
              <a href="https://www.google.com/maps/place/Liepaja+Bulk+Terminal+LTD+,+SIA/@56.5348382,21.0473033,15.4z/data=!4m13!1m7!3m6!1s0x46faa7d278ba642d:0x400cfcd68f2fe80!2z0JvQuNC10L_QsNGP!3b1!8m2!3d56.5046678!4d21.010806!3m4!1s0x46faa7d44b2fc8c7:0x2b40f2981c5703f1!8m2!3d56.5354278!4d21.0500139" target="_blank" style="text-decoration: none; color: #4a4a4a;">
                <img src="~/assets/images/icons/c-pin.png" alt="" class="contacts-content__icon">
                <span class="contacts-content__info">Brivibas iela 123, Liepaja, Latvia</span>
              </a>
            </li>
            <li class="contacts-content__item">
              <a href="mailto:info@ingalafoods.com" style="text-decoration: none; color: #4a4a4a;">
                <img src="~/assets/images/icons/c-mail.png" alt="" class="contacts-content__icon">
                <span class="contacts-content__info">info@ingalafoods.com</span>
              </a>
            </li>
            <li class="contacts-content__item">
              <img src="~/assets/images/icons/c-phone.png" alt="" class="contacts-content__icon">
              <span class="contacts-content__info">+371 26093112</span>
            </li>  
          </ul>
          <div class="contacts-form">
          <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/info@ingalafoods.com" method="post" class="form">
            <h1 class="form__title">{{ $t('formTitle') }}</h1><br>
            <input type="text" id="text" name="name" value="" v-bind:placeholder="$t('formInput')" class="form__input"><br>
            <input type="email" id="email" name="email" value="" v-bind:placeholder="$t('formInput2')" class="form__input"><br>
            <textarea name="message"  id="message" v-bind:placeholder="$t('formMessage')" class="form__input-message"></textarea><br>
            <button type="sumbit" id="sendMail" class="form__btn">{{ $t('formBtn') }}</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .form {
    width: 450px;
    height: 550px;
    text-align: center;
    border-radius: 20px;
    background: #f5f5f5;
    box-shadow: 0px 0px 26px 2px rgba(168,168,168,0.5);
  }

  .contacts {
    padding-bottom: 50px;
  }

  .contacts-content {
    display: flex;
    justify-content: space-between;
  }

  .contacts-content__item {
    margin: 80px 0;
  }

  .contacts-content__icon {
    width: 50px;
  }

  .contacts-content__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .contacts-content__info {
    padding: 0 20px;
    font-size: 16px;
  }

  .form__title {
    padding-top: 30px;
    font-size: 24px;
  }

  .form__input {
    width: 400px;
    height: 50px;
    border-radius: 5px;
    background: #ffffff;
    color: #7d7d7d;
    font-size: 16px;
    border: none;
    padding: 0 20px;
    margin-bottom: 30px;
  }

  .form__input-message {
    width: 400px;
    height: 180px;
    border-radius: 5px;
    background: #ffffff;
    color: #7d7d7d;
    font-size: 16px;
    border: none;
    padding: 20px;
    margin-bottom: 25px;
  }

  .form__btn {
    width: 400px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #639D00;
    font-size: 24px;
    color: #fff;
  }

@media screen and (max-width: 480px) {
  .contacts-content {
    display: block;
  }

  .form {
    max-width: 400px;
  }

  .form__input {
    width: 320px;
  }

  .form__input-message {
    width: 320px;
  }

  .form__btn {
    width: 320px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .contacts-content {
    display: block;
  }

  .form {
    max-width: 420px;
  }

  .form__input {
    max-width: 400px;
  }

  .form__input-message {
    max-width: 400px;
  }

  .form__btn {
    min-width: 320px;
  }
}
</style>