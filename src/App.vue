<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>

          <ion-grid>
            <ion-row>
              <ion-col>
                  <img class="avatarImg" alt="Silhouette of a person's head" height='75' width='75' src="../../resources/avatar-mina.jpg" style="border-radius: 50%; object-fit: cover;" />
              </ion-col>  
              <ion-col size="2" class="pointsLabel">
                <ion-menu-toggle :auto-hide="false"><img src='../../resources/crown.png' height='30' width='30' @click="loyalRouter()"></ion-menu-toggle>
              </ion-col>
              <ion-col size="4" class="pointsLabel">
                <ion-menu-toggle :auto-hide="false">
                  <ion-label router-link="/loyaltyPoints" > {{ points }} Points</ion-label>
                </ion-menu-toggle>
              </ion-col>
              <ion-col size="2" class="pointsLabelArrow">
                <ion-menu-toggle :auto-hide="false">
                <ion-icon aria-hidden="true" :icon="chevronForward" @click="loyalRouter()" style="color: #D71820;"></ion-icon>
                </ion-menu-toggle>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-list id="inbox-list" style="border-bottom: 1px solid gray;">
            <ion-list-header>{{accountName}}</ion-list-header>
            <ion-note>{{accountContact}}</ion-note>

            <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
              <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.iosIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>

          <ion-list id="labels-list">
            <ion-item v-for="(item, index) in profileMenu" lines="none" :key="index">
              <ion-icon aria-hidden="true" slot="start" :ios="item.iosIcon" :md="item.iosIcon"></ion-icon>
              <ion-label>{{ item.title }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonCol,
  IonGrid,
  IonRow,
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import { ref } from 'vue';
import {
  homeOutline,
  homeSharp,
  fastFoodOutline,
  fastFoodSharp,
  notificationsOutline,
  notificationsSharp,
  storefrontOutline,
  storefrontSharp,
  helpCircleOutline,
  helpCircleSharp,
  chevronForward,
bagHandleOutline,
hourglassOutline,
bagHandleSharp,
heartOutline,
heartSharp,
hourglassSharp,
locationOutline,
locationSharp,
personOutline,
personSharp,
} from 'ionicons/icons';
import router from './router';

const loyalRouter = () => {
  router.push('/loyaltyPoints')
}
const selectedIndex = ref(0);
const points = 25;
const accountName = "Myoui Mina"; 
const accountContact = "+63 969 198 2134";
const appPages = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Order Now!',
    url: '/orderNow',
    iosIcon: fastFoodOutline,
    mdIcon: fastFoodSharp,
  },
  {
    title: 'Notifications',
    url: '/folder/Notifications',
    iosIcon: notificationsOutline,
    mdIcon: notificationsSharp,
  },
  {
    title: 'Store Locator',
    url: '/folder/Store',
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp,
  },
  {
    title: "FAQ'S",
    url: "/folder/FAQ'S",
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  }
];
const profileMenu = [
{
    title: 'My Orders',
    iosIcon: bagHandleOutline,
    mdIcon: bagHandleSharp,
  },
  {
    title: 'My Account',
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: 'My Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Order Tracker',
    iosIcon: locationOutline,
    mdIcon: locationSharp,
  },
  {
    title: "Order History",
    iosIcon: hourglassOutline,
    mdIcon: hourglassSharp,
  }
];

const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>

<style scoped>

.pointsLabel {
  display: grid;
  justify-content: center;
  align-content: center;
  }
.pointsLabelArrow {
  display: grid;
  justify-content: start;
  align-content: center;
  }

ion-col {
    font-weight: 600
  };

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  color: #D71820;
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-label {
  font-weight: 600;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

/* ion-menu.ios ion-list {
  padding: 20px 0 0 0;
} */

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>
