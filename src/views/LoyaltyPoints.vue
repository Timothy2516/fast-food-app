<template>
    <ion-page>
  
      <ion-content>
        <ion-toolbar color="white">
          <ion-buttons slot="start" >
            <ion-menu-button class="centeredContent">
              <ion-icon aria-hidden="true" :icon="reorderTwo" style="color: #D71820;"></ion-icon>
            </ion-menu-button>
          </ion-buttons>
          <ion-title size="large">Loyalty Points</ion-title>
        </ion-toolbar>
  
        <div id="container">


            <ion-grid>
              <ion-row>
                <ion-col size="2"><img src='../../resources/crown.png' height='50' width='50'></ion-col>
                <ion-col size="6" class="leftContent"><h5 style="padding-left: 5px;">Beginner Tier</h5></ion-col>
                <ion-col size="3" class="rightContent" style="color: #D71820;"><h6 >View All</h6></ion-col>
                <ion-col size="1" class="leftContent" style="color: #D71820;">
                  <ion-icon aria-hidden="true" :icon="chevronForward" size="small"></ion-icon>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-note style="text-align: start;">Earn points by purchasing from our store. Vestibulum ante  ipsum in faucibus orci luctus et.</ion-note>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <img src='../../resources/chart.png' height='200vh' width='200vh' style="margin:40px 0 40px 0;">
              </ion-row>
              <ion-row>
                <ion-col size="6" class="leftContent"><h3 style="font-weight: 600;">Rewards</h3></ion-col>
                <ion-col size="5" class="rightContent"  style="color: #D71820;"><h6>How it works</h6></ion-col>
                <ion-col size="1" class="leftContent" style="color: #D71820;">
                  <ion-icon aria-hidden="true" :icon="chevronForward" size="small"></ion-icon>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <div class="redCapsule">
                    <p>All</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Beginner</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Intermediate</p>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="grayTextGrayCapsule">
                    <p>Loyal</p>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row class="grayCapsule" style="margin-top: 15px">
                  <ion-col size="4" class="centeredContent">
                    <img src='../../resources/steakFriesVeg.png'>
                  </ion-col>
                  <ion-col>
                    <ion-row>
                      <h6 style="margin-bottom: 0px;">Steak Fries Vegetables</h6>
                    </ion-row>
                    <ion-row>
                      Meat
                    </ion-row>
                    <ion-row>
                      <ion-col size="2" class="centeredContent"><img src='../../resources/crown.png' height='30' width='30'></ion-col>
                      <ion-col size="10" class="leftContent" style="color: #D71820;"><h6>20 points</h6></ion-col>
                    </ion-row>
                  </ion-col>

              </ion-row>
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
    IonCol,
    IonGrid,
    IonRow,
    IonNote
   } from '@ionic/vue';
  import { reorderTwo, chevronForward } from 'ionicons/icons';
  </script>
  
  <style scoped>
  .redCapsule {
  border: 2px solid #D71820;
  color: white;
  padding: 8px;
  border-radius: 15px;
  background-color: #D71820;
  }
  .grayTextGrayCapsule {
    border: 2px solid #E8ECEE;
    padding: 8px;
    color: #6C757D;
    border-radius: 15px;
    background-color: #E8ECEE;
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
    top: 43%;
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

  </style>
  