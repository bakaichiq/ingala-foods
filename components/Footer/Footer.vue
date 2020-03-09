<template>
    <div class="footer">
        <div class="h-container">
            <div class="footer-content">
                <div class="footer-block">
                    <img src='~/static/logos/ingalalogo.png' alt="" class="footer-block__logo">
                </div>
                <div class="footer-block">
                    <h2 class="footer__title">{{ $t('menu') }}</h2>
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#home" class="footer__link">{{ $t('home') }}</a></li>
                        <li class="footer__item"><a href="#about" class="footer__link">{{ $t('about') }}</a></li>
                        <li class="footer__item"><a href="#whyus" class="footer__link">{{ $t('why') }}</a></li>
                        <li class="footer__item"><a href="#products" class="footer__link">{{ $t('products') }}</a></li>
                        <li class="footer__item"><a href="#contacts" class="footer__link">{{ $t('contacts') }}</a></li>
                    </ul>
                </div>
                <div class="footer-block">
                    <h2 class="footer__title">{{ $t('contacts') }}</h2>
                    <ul class="footer__list">
                        <li class="footer__item">{{ $t('fMail') }}</li>
                        <li class="footer__item">{{ $t('fTel') }}</li>
                        <li class="footer__item">{{ $t('fFax') }}</li>
                        <li class="footer__item">{{ $t('fAddress') }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-rights">
            <div class="h-container">
               {{ $t('BottomFooter') }}
            </div>
        </div>
    </div>
       
</template>

<script>
export default {

}
</script>

<style>
    .footer {
        border-top: 3px solid #e9e9e9;
        padding: 0;
    }

    .footer-block {
        max-width: 30%;
        padding: 50px 0;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
    }

    .footer__title {
        font-size: 18px;
        margin: 10px 0;
    }

    .footer__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .footer__link {
        color: #000000;
        text-decoration: none;
        font-size: 16px;
    }

    .footer__item {
        color: #000000;
        text-decoration: none;
        font-size: 16px;
    }

    .footer__link:hover {
        color: #000000;
        text-decoration: none;
    }

    .footer-rights {
        width: 100%;
        font-size: 16px;
        background: #E9E9E9;
        line-height: 60px;
    }


@media screen and (max-width: 480px) {
    .footer-content {
        display: block;
        text-align: center;
    }

    .footer-block {
        max-width: 100%;
        padding: 10px 0;
    }

    .footer-rights {
        font-size: 10px;
        line-height: 40px;
    }

    .footer-block__logo {
        display: none;
    }
}

@media (min-width: 481px) and (max-width: 1024px) {
    .footer-content {
        display: block;
        text-align: center;
    }

    .footer-block {
        max-width: 100%;
        padding: 10px 0;
    }

    .footer-rights {
        font-size: 10px;
        line-height: 40px;
    }

    .footer-block__logo {
        display: none;
    }
}
</style>