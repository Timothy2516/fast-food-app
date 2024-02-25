<template>
    <ion-page>
  
      <ion-content>
        <ion-toolbar color="white">
          <ion-buttons slot="start" >
            <ion-menu-button class="centeredContent">
              <ion-icon aria-hidden="true" :icon="reorderTwo" style="color: #D71820;"></ion-icon>
            </ion-menu-button>
          </ion-buttons>
          <ion-title size="large">Our Foods</ion-title>
          <ion-icon slot="end" aria-hidden="true" :icon="bagHandle" style="color: #D71820;"></ion-icon>
        </ion-toolbar>
  
        <div id="container">
            <ion-searchbar color="light" placeholder="try our new Beef Bibimbowl"></ion-searchbar>
            <ion-grid>
                <ion-row>
                <ion-col>
                  <div class="redCapsule">
                    <p>All</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Breakfast</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Chicken</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Seafood</p>
                  </div>
                </ion-col>
              </ion-row>
            <!-- menu 1 -->
              <ion-row style="margin-top: 20px;">
                <ion-col size="5.8" class="grayCapsule" @click="orderNowProceed()">
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
              <ion-row style="margin: 10px 0 10px 0;">
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
              <ion-row style="margin: 10px 0 20px 0;">
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
      </ion-content>
    </ion-page>

  </template>
  
  <script setup lang="ts">
  import { IonButtons,
    IonContent,
    IonMenuButton, 
    IonIcon, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSearchbar,
    IonCol,
    IonGrid,
    IonRow,
   } from '@ionic/vue';
  import { reorderTwo, bagHandle, star, starHalf} from 'ionicons/icons';

  

  import router from '../../src/router';

    const orderNowProceed = () => {
        router.push('/addToBag')
    }

  </script>
  
  <style scoped>
    ion-fab-button {
      width: 150px;
      --border-radius: 15px;
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

  ion-searchbar {
    text-align: start;
  }

  ion-label {
   font-weight: 600;
  }
  .redCapsule {
    border: 2px solid #D71820;
    color: white;
    padding: 8px;
    border-radius: 15px;
    background-color: #D71820;
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
    top: 83%;
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
  