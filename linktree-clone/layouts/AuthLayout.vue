<template>
    <div id="AuthLayout" class="auth-layout">
      <div class="logo-container">
        <nuxt-link to="/">
          <img src="../assets/images/linktree-logo.png" alt="Logo">
        </nuxt-link>
<!-- 
        <main>
            <div>
                <slot />
            </div>
        </main> -->
      </div>

      <!-- <div class="">
        <img v-if="route.fullPath === '/'" class="" :src="require('../assets/images/side1.png')" />
        <img v-else class="" :src="require('../assets/images/side2.png')" />
        
      </div> -->
    </div>
  </template>

<script setup>


// import {useUserStore } from '../stores/user'
// import {storeToRefs} from 'pinia'
// const userStore = useUserStore()
// const {updatedLinkId} = storeToRefs(userStore)
// const route =useRoute()

// onUnmounted(() => {
//     updatedLinkId.value=0
// })

</script>

  
  <style scoped>
  .logo-container {
    margin-top: 20px;
    margin-left: 20px; /* Add margin to the left for the desired distance from the left edge */
  }
  
  .logo-container img {
    width: 100px; /* Adjust the width of the logo image as needed */
    height: auto; /* Maintain aspect ratio */
  }
  </style>
  
