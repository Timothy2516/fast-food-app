<template>
    <ion-page>
  
      <ion-content>
        <ion-toolbar color="white">
          <ion-buttons slot="start" >
            <ion-menu-button class="centeredContent">
              <ion-icon aria-hidden="true" :icon="reorderTwo" style="color: #D71820;"></ion-icon>
            </ion-menu-button>
          </ion-buttons>
          <ion-grid>
            <ion-row>
                <ion-col size="10"  class="centeredInlineContent">
                    <ion-col size="2">
                        <img src='../../resources/crown.png' height='30' width='30'>
                    </ion-col>
                    <ion-col size="4" class="centeredContent">
                        <ion-label> {{ points }} Points</ion-label>
                    </ion-col>
                    <ion-col size="2" class="centeredContent">
                        <ion-icon aria-hidden="true" :icon="chevronForward" size="small" style="color: #D71820;"></ion-icon>
                    </ion-col>
                </ion-col>
                <ion-col size="2">
                    <ion-avatar>
                        <img alt="Silhouette of a person's head" src="../../resources/avatar-mina.jpg" />
                    </ion-avatar>
                </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
  
        <div id="container">


            <ion-grid>
                <ion-row style="margin-top: 15px"  class="ion-justify-content-center">
                  <ion-col size="3">
                    <img src='../../resources/logo.png'>
                  </ion-col>
                  <ion-col>
                    <ion-row>
                      Anyeoung, {{ loginName }} !
                    </ion-row>
                    <ion-row>
                      <h2>What do you want to eat!</h2>
                    </ion-row>
                  </ion-col>
                </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-searchbar color="light" placeholder="try our new Steak Fries Veggies"></ion-searchbar>
              </ion-row>
              <ion-row>
                <ion-col size="6" class="leftContent"><h3 style="font-weight: 600;">Special Offers!</h3></ion-col>
                <ion-col size="5" class="rightContent"  style="color: #D71820;"><h6>View All</h6></ion-col>
                <ion-col size="1" class="leftContent" style="color: #D71820;">
                  <ion-icon aria-hidden="true" :icon="chevronForward" size="small"></ion-icon>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                    <swiper>
                        <swiper-slide><div class="circle1"></div><div class="circle2"></div><img src='../../resources/specialOffer1.png'></swiper-slide>
                        <swiper-slide><div class="circle1"></div><div class="circle2"></div><img src='../../resources/specialOffer2.png'></swiper-slide>
                    </swiper>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Category</h3></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                    <swiper>
                        <swiper-slide><div class="category1"><h2>Desserts</h2></div><img class="category" src='../../resources/category1.jpg'></swiper-slide>
                        <swiper-slide><div class="category1"><h2>Breakfasts</h2></div><img class="category" src='../../resources/category1.jpg'></swiper-slide>
                    </swiper>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">What's New?</h3></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <img src='../../resources/whatsNew.png' style="border-radius: 20px;">
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Most Popular</h3></ion-col>
              </ion-row>
              <!-- menu 1 -->
              <ion-row>
                <ion-col size="5.8" class="grayCapsule">
                  <ion-row style="padding: 30px 10px;"><img src='../../resources/steakFriesVeg.png'></ion-row>
                  <ion-row class="leftContent"><h6 class="menuLabel">Steak Fries Veggies</h6></ion-row>
                  <ion-row><h6 class="menuSubLabel">Meat</h6></ion-row>
                  <ion-row>
                    <ion-col class="leftContent" size="5"><h6 class="menuPrice">P 175</h6></ion-col>
                    <ion-col>
                      <ion-col size="7" style="color: #FEC12E;">
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="starHalf" style="width: 1.5vh;height: 1.5vh;"></ion-icon></ion-col>
                    </ion-col>
                  </ion-row>
                </ion-col>
                <ion-col size="0.2"></ion-col>
                <ion-col size="5.8" class="grayCapsule">
                  <ion-row style="padding: 30px 10px;"><img src='../../resources/chickenSalad.png'></ion-row>
                  <ion-row class="leftContent"><h6 class="menuLabel">Chicken Salad</h6></ion-row>
                  <ion-row><h6 class="menuSubLabel">Chicken</h6></ion-row>
                  <ion-row>
                    <ion-col class="leftContent" size="5"><h6 class="menuPrice">P 172</h6></ion-col>
                    <ion-col>
                      <ion-col size="7" style="color: #FEC12E;">
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="starHalf" style="width: 1.5vh;height: 1.5vh;"></ion-icon></ion-col>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
              <!-- menu 1 -->
              <!-- menu 2 -->
              <ion-row style="margin: 10px 0 80px 0;">
                <ion-col size="5.8" class="grayCapsule">
                  <ion-row style="padding: 30px 10px;"><img src='../../resources/sorvetes.png'></ion-row>
                  <ion-row class="leftContent"><h6 class="menuLabel">Sorvetes Primavera</h6></ion-row>
                  <ion-row><h6 class="menuSubLabel">Dessert</h6></ion-row>
                  <ion-row>
                    <ion-col class="leftContent" size="5"><h6 class="menuPrice">P 185</h6></ion-col>
                    <ion-col>
                      <ion-col size="7" style="color: #FEC12E;">
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="starHalf" style="width: 1.5vh;height: 1.5vh;"></ion-icon></ion-col>
                    </ion-col>
                  </ion-row>
                </ion-col>
                <ion-col size="0.2"></ion-col>
                <ion-col size="5.8" class="grayCapsule">
                  <ion-row style="padding: 30px 10px;"><img src='../../resources/friedChicken.png' height="130"></ion-row>
                  <ion-row class="leftContent"><h6 class="menuLabel">Fried Chicken</h6></ion-row>
                  <ion-row><h6 class="menuSubLabel">Chicken</h6></ion-row>
                  <ion-row>
                    <ion-col class="leftContent" size="5"><h6 class="menuPrice">P 172</h6></ion-col>
                    <ion-col>
                      <ion-col size="7" style="color: #FEC12E;">
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 1.5vh;height: 1.5vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="starHalf" style="width: 1.5vh;height: 1.5vh;"></ion-icon></ion-col>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
              <!-- menu 2 -->
            </ion-grid>
        </div>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button @click="orderNow()">Order Now!</ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>

  </template>
  
  <script setup lang="ts">
  import { IonButtons,
    IonContent,
    IonMenuButton, 
    IonIcon, 
    IonPage, 
    IonSearchbar,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
    IonNote,
    IonAvatar,
    IonFab,
    IonFabButton,

   } from '@ionic/vue';

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { reorderTwo, chevronForward, star, starHalf } from 'ionicons/icons';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  import router from '../../src/router';

  const orderNow = () => {
      router.push('/orderNow')
  }

  const points = 25;
  const loginName = 'Mina';
  </script>
  
  <style scoped>
    ion-fab-button {
      width: 150px;
      --border-radius: 15px;
    }
    .swiper .swiper-slide img {
        border-radius: 20px;
    }

    #cont {
    width: 250px;
    height: 150px;
    background: navy;
    position: relative;
    border-radius: 20px 20px 0 0;
    -webkit-border-radius: 20px 20px 0 0;
    text-align: center;
    }

    .circle1 {
    background: white;
    position: absolute;
    top: 80px;
    left: 325px;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    }
    .category1 {
    position: absolute;
    top: 220px;
    left: 20px;
    color: white;
    }
    .circle2 {
    background: white;
    position: absolute;
    top: 80px;
    left: -17px;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    }

  ion-searchbar {
    text-align: start;
  }

  ion-label {
   font-weight: 600;
  }

  .grayCapsule {
    border: 2px solid #E8ECEE;
    border-radius: 15px;
    background-color: #E8ECEE;
  }
  ion-note {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 0.9rem;
  }

  ion-title.title-large {
      font-size: 28px;
      font-weight: 700;
    }
  .centeredContent {
  display: grid;
  justify-content: center;
  align-content: center;
  }
  .centeredInlineContent {
  display: flex;
  justify-content: center;
  align-items: center;
  }

  .leftContent {
  display: grid;
  justify-content: start;
  align-content: center;
  }

  .rightContent {
  display: grid;
  justify-content: end;
  align-content: center;
  }

  ion-icon {
    font-size: 47px;
  }

  #container {
    text-align: center;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 110%;
    transform: translateY(-50%);

  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }

  h5, h6, h4, h3 {
    margin-top: 11px !important;
    font-weight: 600;
  }
  .menuLabel {
    font-size: 0.8rem;
    padding: 0 10px 0 20px;
    text-align: center;
    margin-bottom: 0px;
  }
  .menuSubLabel {
    font-size: 0.6rem;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 0px;
    font-weight: 500;
    margin-left: 10px;
  }
  .menuPrice{
    font-size: 0.8rem;
    padding-left: 15px;
    text-align: start;
    margin-bottom: 0px;
    font-weight: 600;
    margin-top: 0px !important;
    color: #D71820;
  }
  h2 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    margin-right: 10px;
    font-weight: 600;
    text-align: start;
    letter-spacing: 2px;
  }
  </style>
  