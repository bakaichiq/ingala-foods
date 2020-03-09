<template>
    <div class="advantages" id="why-us">
        <div class="h-container">
            <div class="c-nav">
                <h1 class="nav__title">{{ $t('navAdvantages') }}</h1>
                <div class="nav__line" style="width: 166px;"></div>
            </div>
            <div class="adv-content">
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/recommended.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap1') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap1') }}</p>
                </div>
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/worldwide.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap2') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap2') }}</p>
                </div>
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/team.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap3') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap3') }}</p>
                </div> 
            </div>
            <div class="adv-content">
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/shield.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap4') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap4') }}</p>
                </div>
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/pie-chart.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap5') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap5') }}</p>
                </div>
                <div class="adv-content__item">
                    <img src="~/assets/images/icons/agile.png" alt="" class="adv-content__img">
                    <h1 class="adv-content__title">{{ $t('advTitleChap6') }}</h1>
                    <p class="adv-content__text">{{ $t('advTextChap6') }}</p>
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
    .advantages {
        background: #f5f5f5;
        padding-bottom: 50px;
    }

    .adv-content {
        padding-top: 50px;
        display: flex;
        justify-content: space-between;
    }

    .adv-content__item {
        width: 250px;
        height: 320px;
        text-align: center;
        background: #ffffff;
        border-radius: 25px;
        box-shadow: 2px 0 #639D00, -2px 0 #639D00, 0 2px #639D00, 0 -2px #639D00;
    }

    .adv-content__item:hover {
        box-shadow: 0px 0px 26px 2px rgba(168,168,168,0.5);
        transition: 0.5s;
    }

    .adv-content__img {
        margin: 15px;
        max-width: 80px;
    }

    .adv-content__title {
        font-size: 16px;
        margin: 10px 0;
        font-weight: 600;
        line-height: 24px;
    }

    .adv-content__text {
        margin: 0 10px;
        font-size: 14px;
        line-height: 18px;
    }

@media screen and (max-width: 480px) {
    .adv-content {
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    .adv-content__item {
        margin-top: 20px;
    }
}


@media (min-width: 481px) and (max-width: 1024px) {
    .adv-content {
        padding: 0;
        flex-wrap: wrap;
        justify-content: center;
    }

    .adv-content__item {
        margin-top: 20px;
    }
}
</style>