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
                        <div class="card__info">
                          Wheat (Triticum spp.) is a grass, originally from the Fertile Crescent region of the Near East, but now cultivated worldwide. In 2007 world production of wheat was 607 million tons, making it the third most-produced cereal after maize (784 million tons) and rice (651 million tons). Globally, wheat is the leading source of vegetable protein in human food, having a higher protein content than either maize (corn) or rice, the other major cereals. In terms of total production tonnages used for food, it is currently second to rice as the main human food crop, and ahead of maize, after allowing for maize's more extensive use in animal feeds.
                        </div>
                      </b-tab>
                      <b-tab v-bind:title="$t('barley')">
                        <b-card-img src="~/assets/images/barley.jpg"></b-card-img>
                        <div class="card__info">
                          Barley is a cereal grain derived from the annual grass Hordeum vulgare.
                          <br><br>
                          Barley has many uses. It serves as a major animal fodder, as a base malt for beer and certain distilled beverages, and as a component of various health foods. It is used in soups and stews, and in barley bread of various cultures. Like wheat and rye, barley contains gluten that makes it an unsuitable grain for consumption by those with celiac disease.
                          <br><br>
                          In a 2007 ranking of cereal crops in the world, barley was fourth both in terms of quantity produced (136 million tons) and in area of cultivation (566,000 km²).
                        </div>
                      </b-tab>
                      <b-tab v-bind:title="$t('rye')">
                        <b-card-img src="~/assets/images/rye.jpg"></b-card-img>
                        <div class="card__info">
                          Rye (Secale cereale) is a grass grown extensively as a grain and as a forage crop. It is a member of the wheat tribe (Triticeae) and is closely related to barley and wheat. Rye grain is used for flour, rye bread, rye beer, some whiskies, some vodkas, and animal fodder. It can also be eaten whole, either as boiled rye berries, or by being rolled, similar to rolled oats.
                          <br><br>
                          Rye is a cereal grain and should not be confused with ryegrass, which is used for lawns, pasture, and hay for livestock.
                        </div>
                      </b-tab>
                      <b-tab v-bind:title="$t('maize')">
                        <b-card-img src="~/assets/images/maize.jpg"></b-card-img>
                        <div class="card__info">
                          Maize (Zea mays L. ssp. mays, pronounced /ˈmeɪz/), known in many English-speaking countries as corn, is a grain domesticated by indigenous peoples in Mesoamerica in prehistoric times. The Aztecs andMayans cultivated it in numerous varieties throughout central and southern Mexico, to cook or grind in a process called nixtamalization. Later the crop spread through much of the Americas. Between 1250 and 1700, nearly the whole continent had gained access to the crop. Any significant or dense populations in the region developed a great trade network based on surplus and varieties of maize crops. After European contact with the Americas in the late 15th and early 16th centuries, explorers and traders carried maize back to Europe and introduced it to other countries through trade. Maize spread to the rest of the world due to its popularity and ability to grow in diverse climates.
                        </div>
                      </b-tab>
                    </b-card>
                  </b-tabs>
                </b-tab>

                <b-tab no-body v-bind:title="$t('beans')">
                  <b-tabs>
                   <b-card>
                     <b-tab v-bind:title="$t('chickpeas')">
                       <b-card-img src="~/assets/images/chickpeas.jpg"></b-card-img>
                       <div class="card__info">
                         The chickpea (Cicer arietinum) (also garbanzo bean, Indian pea, ceci bean, Bengal gram) is an edible legume of the family Fabaceae, subfamily Faboideae. Chickpeas are high in protein and one of the earliest cultivated vegetables; 7,500-year-old remains have been found in the Middle East.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('yellowpeas')">
                       <b-card-img src="~/assets/images/yellowpeas.jpg"></b-card-img>
                       <div class="card__info">
                         Split peas are an agricultural or culinary preparation consisting of the dried, peeled and split seeds of Pisum sativum, the pea.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('redlentils')">
                       <b-card-img src="~/assets/images/redlentils.jpg"></b-card-img>
                       <div class="card__info">
                        The lentil (Lens culinaris) is a type of pulse. It is a bushy annual plant of the legume family, grown for its lens-shaped seeds. It is about 15 inches (38 cm) tall and the seeds grow in pods, usually with two seeds in each.
                        <br><br>
                        A variety of pulses or lentils exists with colors that range from yellow to red-orange to green, brown and black. Red, white and yellow lentils in some cases are peeled, i.e., are those that have their skins removed before being sold. There are large and small varieties of many lentils (e.g., Masoor Lentils, shown in photos here). Lentils are sold in many forms, with or without the skins, whole or split.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('greenlentils')">
                       <b-card-img src="~/assets/images/greenlentils.jpg"></b-card-img>
                         <div class="card__info">
                        The lentil (Lens culinaris) is a type of pulse. It is a bushy annual plant of the legume family, grown for its lens-shaped seeds. It is about 15 inches (38 cm) tall and the seeds grow in pods, usually with two seeds in each.
                        <br><br>
                        A variety of pulses or lentils exists with colors that range from yellow to red-orange to green, brown and black. Red, white and yellow lentils in some cases are peeled, i.e., are those that have their skins removed before being sold. There are large and small varieties of many lentils (e.g., Masoor Lentils, shown in photos here). Lentils are sold in many forms, with or without the skins, whole or split.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('soybean')">
                       <b-card-img src="~/assets/images/soybean.jpg"></b-card-img>
                       <div class="card__info">
                        The soybean or soya bean (Glycine max)[3] is a species of legume native to East Asia, widely grown for its edible bean, which has numerous uses.
                        <br><br>
                        Traditional unfermented food uses of soybeans include soy milk, from which tofu and tofu skin are made. Fermented soy foods include soy sauce, fermented bean paste, nattō, and tempeh. Fat-free (defatted) soybean meal is a significant and cheap source of protein for animal feeds and many packaged meals. For example, soybean products, such as textured vegetable protein (TVP), are ingredients in many meat and dairy substitutes.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('mungbeans')">
                       <b-card-img src="~/assets/images/mungbean.jpg"></b-card-img>
                       <div class="card__info">
                         The Mung bean, also known as green bean, choroko (in Swahili), mung, mongo, moong, moog (whole) or moog dal (split) (in Bengali , Marathi), mash bean, munggo or monggo, green gram, golden gram, and green soy, is the seed of Vigna radiata, which is native to Bangladesh, India, and Pakistan. The split bean is known as pesara [పెసర] (Telugu), which is green with the husk, and yellow when dehusked. The beans are small, ovoid in shape, and green in color. The English word "mung" derives from the Hindi: मूँग mung.
                       </div>
                     </b-tab>
                     <b-tab v-bind:title="$t('beans2')">
                       <b-card-img src="~/assets/images/beans.jpg"></b-card-img>
                       <div class="card__info">
                         A bean is the seed of one of several genera of the flowering plant family Fabaceae, which are used as vegetables for human or animal food. [1]They can be cooked in many different ways,[2] including boiling, frying, and baking, and are used in several traditional dishes throughout the world.
                       </div>
                     </b-tab>
                   </b-card>
                 </b-tabs>
                </b-tab>

                <b-tab no-body v-bind:title="$t('oilseeds')">
                  <b-tabs>
                    <b-card>
                      <b-tab v-bind:title="$t('linseed')">
                        <b-card-img src="~/assets/images/linseed.jpg"></b-card-img>
                        <div class="card__info">
                          Linseed oil, also known as flaxseed oil or flax oil, is a colourless to yellowish oil obtained from the dried, ripened seeds of the flax plant (Linum usitatissimum). The oil is obtained by pressing, sometimes followed by solvent extraction. Linseed oil is a drying oil, meaning it can polymerize into a solid form. Owing to its polymer-forming properties, linseed oil can be used on its own or blended with combinations of other oils, resins or solvents as an impregnator, drying oil finish or varnish in wood finishing, as a pigment binder in oil paints, as a plasticizer and hardener in putty, and in the manufacture of linoleum. Linseed oil use has declined over the past several decades with increased availability of synthetic alkyd resins—which function similarly but resist yellowing.
                        </div>
                      </b-tab>
                      <b-tab v-bind:title="$t('rapeseed')">
                        <b-card-img src="~/assets/images/rapeseed.jpg"></b-card-img>
                        <div class="card__info">
                          Rapeseed (Brassica napus), also known as rape, oilseed rape, rapa, rappi, rapaseed (and in the case of one particular group of cultivars, canola) is a bright yellow flowering member of the familyBrassicaceae (mustard or cabbage family). The name derives from the Latin for turnip, nāpus, and is first recorded in English at the end of the 14th century. Older writers usually distinguished the turnip and rape by the adjectives round and long(-rooted) respectively.[2] See also Brassica napobrassica, which may be considered a variety of Brassica napus. Some botanists include the closely related Brassica campestris withinB. napus. (See Triangle of U). Rapeseed was the third leading source of vegetable oil in the world in 2000.
                        </div>
                      </b-tab>
                      <b-tab v-bind:title="$t('sunflowerseed')">
                        <b-card-img src="~/assets/images/sunflowerseed.jpg"></b-card-img>
                        <div class="card__info">
                          The sunflower seed is the fruit of the sunflower (Helianthus annuus). The term "sunflower seed" is actually a misnomer when applied to the seed in its pericarp (hull). Botanically speaking, it is more properly referred to as an achene. When dehulled, the edible remainder is called the sunflower kernel.
<br><br>
There are three types of commonly used sunflower seeds. Linoleic (most common), high oleic, and Nusun. Each variety has its own unique levels of monounsaturated, saturated, and polyunsaturated fats. The information in this article refers mainly to the linoleic variety.
<br><br>
For commercial purposes, sunflower seeds are usually classified by the pattern on their husks. If the husk is solid black, the seeds are called black oil sunflower seeds. The crops may be referred to as oilseed sunflower crops. These seeds are usually pressed into sunflower oil. Striped sunflower seeds are primarily used for food; as a result, they may be called confectionery sunflower seeds.
                        </div>
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
}

@media (min-width: 481px) and (max-width: 1024px) {
  .card__info {
    line-height: 16px;
    font-size: 14px;
  }
}
</style>