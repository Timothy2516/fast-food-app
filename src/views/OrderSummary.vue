<template>
    <ion-page>
      <ion-content>
        <ion-toolbar color="white">
          <ion-buttons slot="start">
            <div class="grayCapsule">
              <ion-icon @click="routerBack()" aria-hidden="true" size="small" :icon="chevronBack" style="color: #6C757D;"></ion-icon>
            </div>
          </ion-buttons>
          <ion-title size="large">Order Summary</ion-title>
        </ion-toolbar>
  
        <div id="container">
            <ion-grid>
                <ion-row>
                    <ion-item-sliding lines="none">
                        <ion-item lines="none" class="grayContent">
                            <ion-label>
                                <ion-row>{{accountName}}</ion-row>
                                <ion-row><ion-note>{{ accountContact }}</ion-note></ion-row>
                                <ion-row><ion-note>{{ accountEmail }}</ion-note></ion-row>
                            </ion-label>
                            <IonIcon slot="end" :icon="ellipsisVerticalSharp" aria-hidden="true" size="small" style="color: #FEC12E;"></IonIcon>
                        </ion-item>
                            <ion-item-options>
                                <ion-item-option color="warning" class="bordered">Edit</ion-item-option>
                                <ion-item-option color="danger" class="bordered">Delete</ion-item-option>
                            </ion-item-options>
                    </ion-item-sliding>
                </ion-row>

                <ion-row style="margin-top: 10px;">
                    <ion-item-sliding lines="none">
                        <ion-item lines="none" class="grayContent">
                            <ion-label>
                                <ion-row>My Home Address</ion-row>
                                <ion-row><ion-note>{{ homeAddress }}</ion-note></ion-row>
                                <ion-row><ion-note>{{ homeCityCountry }}</ion-note></ion-row>
                            </ion-label>
                            <IonIcon slot="end" :icon="ellipsisVerticalSharp" aria-hidden="true" size="small" style="color: #FEC12E;"></IonIcon>
                        </ion-item>
                            <ion-item-options>
                                <ion-item-option color="warning" class="bordered">Edit</ion-item-option>
                                <ion-item-option color="danger" class="bordered">Delete</ion-item-option>
                            </ion-item-options>
                    </ion-item-sliding>
                </ion-row>

                <ion-row style="margin-top: 10px;">
                    <ion-item-sliding lines="none">
                        <ion-item lines="none" class="grayContent">
                            <ion-label>
                                <ion-row>Work/Office</ion-row>
                                <ion-row><ion-note>{{ workAddress }}</ion-note></ion-row>
                                <ion-row><ion-note>{{ workCityCountry }}</ion-note></ion-row>
                            </ion-label>
                            <IonIcon slot="end" :icon="ellipsisVerticalSharp" aria-hidden="true" size="small" style="color: #FEC12E;"></IonIcon>
                        </ion-item>
                            <ion-item-options>
                                <ion-item-option color="warning" class="bordered">Edit</ion-item-option>
                                <ion-item-option color="danger" class="bordered">Delete</ion-item-option>
                            </ion-item-options>
                    </ion-item-sliding>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Orders</h3></ion-col>
                </ion-row>
                <ion-row>
                    <ion-item-sliding lines="none">
                        <ion-item lines="none" class="grayContent">
                            <ion-label>
                                <ion-row style="border-bottom: 0.5px solid gray;">
                                    <ion-col size="4">
                                        <img src='../../resources/steakFriesVeg.png'>
                                    </ion-col>
                                    <ion-col>
                                        <ion-row><ion-label>Steak Fries Veggies</ion-label></ion-row>
                                        <ion-row><h6>1x Tomato Sauce</h6></ion-row>
                                        <ion-row><h6>1x Regular Coke</h6></ion-row>
                                        <ion-row><h6>1x Fried Chicken</h6></ion-row>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col size="5" style="color: #D71820;"><h2>P 172</h2></ion-col>
                                    <ion-col size="3" class="centeredContent">
                                        <div class="grayCapsule2">
                                            <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                        </div>
                                    </ion-col>
                                    <ion-col size="1" class="centeredContent">{{ addAddOnsCounter }}</ion-col>
                                    <ion-col size="3" class="centeredContent">
                                        <div class="grayCapsule2">
                                            <ion-icon aria-hidden="true" size="small" :icon="add" style="color: #D71820;"></ion-icon>
                                        </div>
                                    </ion-col>
                                </ion-row>
                            </ion-label>
                            <IonIcon slot="end" :icon="ellipsisVerticalSharp" aria-hidden="true" size="small" style="color: #FEC12E;"></IonIcon>
                        </ion-item>
                            <ion-item-options>
                                <ion-item-option color="warning" class="bordered">Edit</ion-item-option>
                                <ion-item-option color="danger" class="bordered">Delete</ion-item-option>
                            </ion-item-options>
                    </ion-item-sliding>
                </ion-row>
                <ion-row>
                    <ion-col size="12" class="leftContent"><h3 style="font-weight: 600;">Payment Options</h3></ion-col>
                </ion-row>

                <ion-row class="grayContentPadding" style="margin-bottom:10px">
                    <ion-col size="11">
                        <ion-row>
                            <ion-label>Cash On Delivery</ion-label>
                        </ion-row>
                        <ion-row>
                            <ion-note>Pay when you received the order</ion-note>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="1">
                        <ion-checkbox justify="end"></ion-checkbox>
                    </ion-col>
                </ion-row>

                <ion-row class="grayContentPadding" style="margin-bottom:10px">
                    <ion-col size="11">
                        <ion-row>
                            <ion-label>Loyalty Points</ion-label>
                            &nbsp;
                            <ion-label style="color: #D71820;">{{ points }} points</ion-label>
                        </ion-row>
                        <ion-row>
                            <ion-note>Pay using your earned loyalty points</ion-note>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="1">
                        <ion-checkbox justify="end"></ion-checkbox>
                    </ion-col>
                </ion-row>

                <ion-row class="grayContentPadding2" style="margin-bottom:10px">
                    <ion-col size="11">
                        <ion-row>
                            <img src='../../resources/paypalLogo.png' height="45" width="80">
                        </ion-row>
                        <ion-row>
                            <ion-note>A new tab will open to access your account</ion-note>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="1">
                        <ion-checkbox justify="end"></ion-checkbox>
                    </ion-col>
                </ion-row>

                <ion-row class="grayContentPadding" style="margin-bottom:10px">
                    <ion-col size="11">
                        <ion-row>
                            <img src='../../resources/paynamicsLogo.png' height="25" width="80">
                        </ion-row>
                        <ion-row style="text-align: start;">
                            <ion-note>Choose paynamics services available from you</ion-note>
                        </ion-row>
                    </ion-col>
                    <ion-col  size="1">
                        <ion-checkbox justify="end"></ion-checkbox>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="10" style="text-align:start">
                        <ion-label>Subtotal</ion-label>
                    </ion-col>
                    <ion-col size="2">
                        <ion-label> P {{subtotal}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="10" style="text-align:start">
                        <ion-label>Delivery Charge</ion-label>
                    </ion-col>
                    <ion-col size="2">
                        <ion-label> P {{deliveryCharge}}</ion-label>
                    </ion-col>
                </ion-row>
                <ion-row style="text-align:start; padding:5px 10px 5px 10px" class="grayContent">
                    <ion-input label="Change for" label-placement="stacked" placeholder="e.g. 1000"></ion-input>
                </ion-row>
            </ion-grid>
        </div>
      </ion-content>

        <ion-footer :translucent="true" class="ion-no-border">
            <ion-toolbar>
                <ion-grid>
                    <ion-row>
                        <ion-col size="5">
                            <ion-row><ion-label>Grand Total</ion-label></ion-row> 
                            <ion-row><h4>P {{ grandTotal }}</h4></ion-row> 
                        </ion-col>
                        <ion-col size="7">
                            <ion-button @click="placeOrder()" expand="block">Place Order</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>
        </ion-footer>

    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonButtons,
    IonContent,
    IonIcon, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
    IonItemSliding,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonLabel,
    IonFooter,
    IonInput
   } from '@ionic/vue';
  import { bagHandle, chevronBack, add, remove, heartOutline, star, starHalf, ellipsisVerticalSharp} from 'ionicons/icons';
  import router from '../../src/router';

    const placeOrder = () => {
        router.push('/placeOrder')
    }

    const routerBack = () => {
        router.push('/orderNow')
    }
    const addAddOnsCounter = 1;
    const accountName = "Myoui Mina"; 
    const accountContact = "+63 969 198 2134";
    const accountEmail = "myoui.mina@email.com";
    const homeAddress = "21L Esguerra St. Brgy. Flores";
    const homeCityCountry = "Malabon City Philippines";
    const workAddress = "3G Symphony Tower 16 Sgt. Esguerra Ave.";
    const workCityCountry = " South Triangle Quezon City Philippines";
    const points = 25;
    const subtotal = 185;
    const deliveryCharge = 59;
    const grandTotal = 244;

  </script>
  
  <style scoped>
  .bordered {
    border-radius: 15px;
  }
  h4 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: 600;
    line-height: 1.2;
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
    border: 2px solid #c7cacb;
    border-radius: 15px;
    background-color: #E8ECEE;
  }

  .grayContentPadding {
    border: 2px solid #E8ECEE;
    border-radius: 15px;
    background-color: #E8ECEE;
    padding: 10px;
  }
  .grayContentPadding2 {
    border: 2px solid #E8ECEE;
    border-radius: 15px;
    background-color: #E8ECEE;
    padding: 0 10px 10px 10px;
  }

  .graySelectCapsule {
    border: 2px solid #d3d1d1;
    background-color: #F8F9FA;
    border-radius: 15px;
  }
  ion-note {
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

  .orderNow{
        position: fixed;
        top: 91%;
        right: 5%;
        border: 2px solid #D71820;
        color: white;
        padding: 8px 40px;
        border-radius: 20px;
        background-color: #D71820;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 1px;
    }
  </style>
  