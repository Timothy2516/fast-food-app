<template>
    <ion-page>
  
      <ion-content>
        <ion-toolbar color="white">
          <ion-buttons slot="start">
            <div class="grayCapsule">
              <ion-icon @click="routerBack()" aria-hidden="true" size="small" :icon="chevronBack" style="color: #6C757D;"></ion-icon>
            </div>
          </ion-buttons>
          <ion-title size="large">Meat</ion-title>
          <ion-icon slot="end" aria-hidden="true" :icon="bagHandle" style="color: #D71820;"></ion-icon>
        </ion-toolbar>
  
        <div id="container">
            <ion-grid>
                <ion-row class="grayBoxFood">
                    <img src='../../resources/addToCartFood.png'>
                    <div class="favoriteHeart">
                        <ion-icon aria-hidden="true" size="small" :icon="heartOutline" style="color: #D71820;"></ion-icon>
                    </div>
                </ion-row>
                <ion-row class="leftContent"><h6>Fried Chicken</h6></ion-row>
                <ion-row class="leftContent">
                    <ion-col style="color: #FEC12E;">
                        <ion-icon aria-hidden="true" :icon="star" style="width: 2vh;height: 2vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 2vh;height: 2vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 2vh;height: 2vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="star" style="width: 2vh;height: 2vh;"></ion-icon>
                        <ion-icon aria-hidden="true" :icon="starHalf" style="width: 2vh;height: 2vh;"></ion-icon>
                    </ion-col>
                </ion-row>
                <ion-row style="text-align: start;">
                    <ion-note>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.</ion-note>
                </ion-row>
                <ion-row>
                    <ion-col size="7" class="leftContent"><h2>P 172</h2></ion-col>
                    <ion-col class="centeredContent">
                        <div class="grayCapsule">
                            <ion-icon aria-hidden="true" size="small" :icon="remove" style="color: #D71820;"></ion-icon>
                        </div>
                    </ion-col >
                    <ion-col class="centeredContent"><h6>{{ addCounter }}</h6></ion-col>
                    <ion-col class="centeredContent">
                        <div class="grayCapsule">
                            <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Beverages</h3></ion-col>
                </ion-row>
                <ion-row class="graySelectCapsule"  style="text-align: start;">
                    <ion-select label="Choose Beverages" label-placement="stacked">
                        <ion-select-option value="coke">Coke</ion-select-option>
                        <ion-select-option value="sprite">Sprite</ion-select-option>
                        <ion-select-option value="pineapple">Pineapple</ion-select-option>
                    </ion-select>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <div class="yellowCapsule">
                            <p>Regular</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="grayTextGrayCapsule">
                            <p>Large</p>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="grayTextGrayCapsule">
                            <p>X-Large</p>
                        </div>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Add-Ons</h3></ion-col>
                </ion-row>
                <!-- sauce -->
                <ion-row class="grayContent">
                    <ion-col size="4">
                        <img src='../../resources/sauce.png'>
                    </ion-col>
                    <ion-col  size="4">
                        <ion-row style="margin-top: 0px;">
                            <h6 class="menuLabel">Fried Chicken</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="menuSubLabel">Meat</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="menuPrice">P 49</h6>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="4">
                        <ion-row style="margin-top: 5px;" class="rightContent">
                            <ion-checkbox justify="end"></ion-checkbox>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="blankspace">none</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <ion-col size="4.5" class="centeredContent">
                                <div class="grayCapsule2">
                                    <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                </div>
                            </ion-col>
                            <ion-col size="3" class="centeredContent">{{ addAddOnsCounter }}</ion-col>
                            <ion-col size="4.5" class="centeredContent">
                                <div class="grayCapsule2">
                                    <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                </div>
                            </ion-col>

                        </ion-row>
                    </ion-col>
                </ion-row>
                <!-- sauce -->
                <!-- rice -->
                <ion-row class="grayContent" style="margin-bottom:80px">
                    <ion-col size="4">
                        <img src='../../resources/rice.png'>
                    </ion-col>
                    <ion-col  size="4">
                        <ion-row style="margin-top: 0px;">
                            <h6 class="menuLabel">White Rice</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="menuSubLabel">Rice</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="menuPrice">P 25</h6>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="4">
                        <ion-row style="margin-top: 5px;" class="rightContent">
                            <ion-checkbox justify="end"></ion-checkbox>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <h6 class="blankspace">none</h6>
                        </ion-row>
                        <ion-row  style="margin-top: 0px;">
                            <ion-col size="4.5" class="centeredContent">
                                <div class="grayCapsule2">
                                    <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                </div>
                            </ion-col>
                            <ion-col size="3" class="centeredContent">{{ addAddOnsCounter }}</ion-col>
                            <ion-col size="4.5" class="centeredContent">
                                <div class="grayCapsule2">
                                    <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                </div>
                            </ion-col>

                        </ion-row>
                    </ion-col>
                </ion-row>
                <!-- rice -->
            </ion-grid>
        </div>
        <ion-fab slot="fixed" vertical="bottom" horizontal="center">
          <ion-fab-button id="open-modal" expand="block">Add to Bag</ion-fab-button>
        </ion-fab>
      </ion-content>
        <ion-modal trigger="open-modal" :initial-breakpoint="1" :breakpoints="[0, 1]">
          <div class="block">
            <ion-grid class="centeredContent">
            <ion-row class="centeredContent" style="margin-top: 0px;">
              <img src='../../resources/popUpLogo.png' height="100" width="100">
            </ion-row>
            <ion-row class="centeredContent" style="margin-top: 0px;"><h6>Fried Chicken</h6></ion-row>
            <ion-row  style="margin-top: 0px;">
              <ion-note>What do you want to do now?</ion-note>
            </ion-row>
            <ion-row class="centeredContent">
              <ion-button @click="proceedCheckOut()" expand="block">Proceed to Checkout</ion-button>
            </ion-row>
            <ion-row class="centeredContent" @click="routerBackAdd()">
              <h6 class="menuPrice">Add More</h6>
            </ion-row>
          </ion-grid>
          </div>
        </ion-modal>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonButtons,
    IonContent,
    IonIcon, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonSearchbar,
    IonCol,
    IonGrid,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonFab,
    IonFabButton,
    IonButton,
    IonModal,
    modalController
   } from '@ionic/vue';
  import { bagHandle, chevronBack, add, remove, heartOutline, star, starHalf} from 'ionicons/icons';
  import router from '../../src/router';

    const proceedCheckOut = () => {
        router.push('/checkout')
        modalController.dismiss()
    }

    const routerBack = () => {
        router.push('/orderNow')
    }

    const routerBackAdd = () => {
        router.push('/orderNow')
        modalController.dismiss()
    }

    const addCounter = 1;
    const addAddOnsCounter = 1;

  </script>
  
  <style scoped>

.block {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  ion-modal {
    --height: auto;
  }

    ion-row {
        margin-top: 15px;
    }
    .favoriteHeart{
    display: grid;
    justify-content: center;
    align-content: center;
    position: absolute;
    top: 255px;
    left: 290px;
    border-radius: 15px;
    background-color: #FFFEFE;
    padding: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    ion-fab-button {
      width: 350px;
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

    .text {
    color: white;
    font-weight: 900;
    position: absolute;
    top: 60px;
    right:0;
    left:0;
    text-align: center;
    }

  ion-searchbar {
    text-align: start;
  }

  ion-label {
   font-weight: 600;
  }

  .yellowCapsule {
    border: 2px solid #F6A968;
    color: white;
    padding: 8px;
    border-radius: 15px;
    background-color: #FEC12E;
  }
  .grayTextGrayCapsule {
    border: 2px solid #E8ECEE;
    padding: 8px;
    border-radius: 15px;
  }
  .grayCapsule {
    display: grid;
    justify-content: center;
    align-content: center;
    border: 2px solid #E8ECEE;
    border-radius: 15px;
    background-color: #E8ECEE;
    padding: 5px;
    width: 40px;
    height: 40px;
    margin: 5px;
  }

  .grayCapsule2 {
    display: grid;
    justify-content: center;
    align-content: center;
    border: 2px solid #D2D4D7;
    border-radius: 15px;
    background-color: #D2D4D7;
    width: 40px;
    height: 40px;
  }
  

  .grayContent {
    border: 2px solid #E8ECEE;
    border-radius: 15px;
    background-color: #E8ECEE;
  }

  .graySelectCapsule {
    border: 2px solid #d3d1d1;
    background-color: #F8F9FA;
    border-radius: 15px;
  }

  .blankspace {
    color: #E8ECEE;
  }
  .grayBoxFood {
    background-color: #E8ECEE;
    border-radius: 15px;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 40px;
  }

  ion-note {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 0.9rem;
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
    top: 80%;
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
    text-align: start;
    margin-bottom: 0px
  }
  .menuSubLabel {
    font-size: 1rem;
    /* padding: 0 10px; */
    text-align: center;
    /* margin-bottom: 0px; */
    font-weight: 500;
  }
  .menuPrice{
    font-size: 1.1rem;
    text-align: start;
    margin-bottom: 0px;
    font-weight: 700;
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
  