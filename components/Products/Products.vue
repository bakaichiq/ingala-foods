<template>
  <div class="wrap">
    <div class="products" id="products">
      <div class="c-nav">
        <h1 class="nav__title">{{ $t('navProducts') }}</h1>
          <div class="nav__line" style="margin-bottom: 50px;"></div>
        </div>
        <div class="products-content">
          <div>
            <b-card>
              <b-tabs card>
                <b-tab no-body v-bind:title="$t('grains')">
                 <b-tabs>
                    <b-card>
                      <b-tab v-bind:title="$t('wheat')">
                        <b-card-img src="~/assets/images/wheat.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('barley')">
                        <b-card-img src="~/assets/images/barley.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('rye')">
                        <b-card-img src="~/assets/images/rye.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('maize')">
                        <b-card-img src="~/assets/images/maize.jpg"></b-card-img>
                      </b-tab>
                    </b-card>
                  </b-tabs>
                </b-tab>

                <b-tab no-body v-bind:title="$t('beans')">
                  <b-tabs>
                   <b-card>
                     <b-tab v-bind:title="$t('chickpeas')">
                       <b-card-img src="~/assets/images/chickpeas.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('yellowpeas')">
                       <b-card-img src="~/assets/images/yellowpeas.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('redlentils')">
                       <b-card-img src="~/assets/images/redlentils.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('greenlentils')">
                       <b-card-img src="~/assets/images/greenlentils.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('soybean')">
                       <b-card-img src="~/assets/images/soybean.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('mungbeans')">
                       <b-card-img src="~/assets/images/mungbean.jpg"></b-card-img>
                     </b-tab>
                     <b-tab v-bind:title="$t('beans2')">
                       <b-card-img src="~/assets/images/beans.jpg"></b-card-img>
                     </b-tab>
                   </b-card>
                 </b-tabs>
                </b-tab>

                <b-tab no-body v-bind:title="$t('oilseeds')">
                  <b-tabs>
                    <b-card>
                      <b-tab v-bind:title="$t('linseed')">
                        <b-card-img src="~/assets/images/linseed.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('rapeseed')">
                        <b-card-img src="~/assets/images/rapeseed.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('sunflowerseed')">
                        <b-card-img src="~/assets/images/sunflowerseed.jpg"></b-card-img>
                      </b-tab>
                    </b-card>
                  </b-tabs>
                </b-tab>

                <b-tab no-body v-bind:title="$t('feeds')">
                  <b-tabs>
                    <b-card>
                      <b-tab v-bind:title="$t('sfscake')">
                        <b-card-img src="~/assets/images/sfscake.png"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('sfsmeal')">
                        <b-card-img src="~/assets/images/sfsmeal.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('soybeanmeal')">
                        <b-card-img src="~/assets/images/soybeanmeal.jpeg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('sugarbeetpulp')">
                        <b-card-img src="~/assets/images/sugarbeetpulp.jpg"></b-card-img>
                      </b-tab>
                      <b-tab v-bind:title="$t('wheatbran')">
                        <b-card-img src="~/assets/images/wheatbran.png"></b-card-img>
                      </b-tab>
                    </b-card>
                  </b-tabs>
                </b-tab>
              </b-tabs>
              <div class="card__info">{{ $t('productsFeedback') }}</div>
            </b-card>
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
  .tabs {
    display: block !important;
  }

  .card-img {
    width: 80% !important;
    display: flex;
    margin: 0 auto;
  }

  .card__info {
    max-width: 80%;
    display: block;
    margin: 10px auto;
  }

  .tabs a {
    padding: 0.5em !important;
  }

  .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #639D00 !important;
    font-weight: 600 !important;
  }

  .card-body {
    padding: 0.75rem 1.25rem !important;
  }

  .nav-tabs {
    font-size: 14px !important;
  }

  .tabs {
    white-space: inherit !important;
  }

@media screen and (max-width: 480px) {
  .card__info {
    line-height: 16px;
    font-size: 14px;
  }

  .card-img {
    width: 100% !important;
  }

  .card-header {
    display: block;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .card__info {
    line-height: 16px;
    font-size: 14px;
  }

  .card-img {
    width: 100% !important;
  }

  .card-header {
    display: block;
  }
}
</style>