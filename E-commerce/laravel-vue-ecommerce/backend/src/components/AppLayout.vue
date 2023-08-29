<template>

    <div>

        <Sidebar !sidebarOpened/>



        <div>
            <Navbar @toggle-sidebar="toggleSidebar">
    
            </Navbar>
            
        <main>

            <router-view></router-view>
        </main>

        </div>

    </div>

 

</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";


const sidebarOpened = ref(true);

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}
</script>