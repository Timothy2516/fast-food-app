<template>
    <ion-page>
      <ion-content>
        <div id="container">
            <ion-grid>
              <ion-row class="centeredContent"><img src='../../resources/popUpLogo.png'></ion-row>
              <ion-row>
                  <ion-col size="12" class="centeredContent"><h3 style="font-weight: 600;">Order Received!</h3></ion-col>
              </ion-row>
              <ion-row>
                <ion-note>
                  Your order No. {{ orderNum }} has successfully take and now being processed. Kindly wait for our notification regarding your order.
                </ion-note>
              </ion-row>
              <ion-row style="margin-top: 50%;">
                <ion-col><ion-button expand="block">Track Order</ion-button></ion-col>
              </ion-row>
              <ion-row>
                  <ion-col @click="routerHome()" size="12" class="centeredContent"><h5 style="font-weight: 600;color: #D71820;">Back to Home</h5></ion-col>
              </ion-row>
            </ion-grid>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import {
    IonContent,
    IonPage, 
    IonCol,
    IonGrid,
    IonRow,
    IonNote,
    IonButton
   } from '@ionic/vue';
  import router from '../../src/router';

    const routerHome = () => {
        router.push('/home')
    }
    const orderNum = 19049585;

  </script>
  
  <style scoped>
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

  ion-note {
    font-size: 0.9rem;
  }
  .centeredContent {
  display: grid;
  justify-content: center;
  align-content: center;
  }

  #container {
    text-align: center;
    position: absolute;
    left: 16px;
    right: 16px;
    top: 60%;
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
  h2, h5 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    margin-right: 10px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  </style>
  