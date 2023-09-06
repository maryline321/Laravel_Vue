<template>

    <div>

        <Sidebar :class = "{'':!sidebarOpened}"/>



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
import {ref} from 'vue'
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";


const sidebarOpened = ref(true);

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

</script>