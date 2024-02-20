<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1 hot</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>{{ gyroData.alpha }}</div>
      <div>{{ gyroData.beta }}</div>
      <div>{{ gyroData.gamma }}</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { ref, onMounted, onUnmounted } from "vue";

// Define the type for gyro data
interface GyroData {
  alpha: number;
  beta: number;
  gamma: number;
}

// Component to hold gyro data
const gyroData = ref<GyroData>({ alpha: 0, beta: 0, gamma: 0 });

// Function to handle device motion event
function handleDeviceMotion(event: DeviceOrientationEvent) {
  // Round values to one decimal place
  const roundedAlpha =
    event.alpha !== null ? Number(event.alpha.toFixed(1)) : 0;
  const roundedBeta = event.beta !== null ? Number(event.beta.toFixed(1)) : 0;
  const roundedGamma =
    event.gamma !== null ? Number(event.gamma.toFixed(1)) : 0;

  gyroData.value = {
    alpha: roundedAlpha,
    beta: roundedBeta,
    gamma: roundedGamma,
  };
}

onMounted(() => {
  // Add event listener for device motion
  window.addEventListener("deviceorientation", handleDeviceMotion);
});

onUnmounted(() => {
  // Remove event listener when component is unmounted
  window.removeEventListener("deviceorientation", handleDeviceMotion);
});
</script>
