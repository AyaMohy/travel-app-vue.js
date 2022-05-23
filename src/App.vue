<script setup>
    import { RouterLink, RouterView } from "vue-router";
    import { ref } from 'vue'
</script>


<template>
    <div>
        <nav class="navbar navbar-expand-md  " style="background-color:#2C3E50">
            <div class="container">
                <!-- <Router-link to="/" class="navbar-brand"> Travel App</Router-link> -->
                 <Router-link :to="{name:'home'}" class="navbar-brand"> Travel App</Router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul class="navbar-nav me-auto  mb-2 mb-lg-0  w-100">
                    
                        <li class="nav-item ps-md-5 "><appLink class="text-muted nav-link fs-4" to="/100">Brazil </appLink></li>
                        <li class="nav-item ps-md-5"><appLink class="nav-link text-muted fs-4" to="/200">Panama </appLink></li>
                        <li class="nav-item ps-md-5"><appLink class="nav-link text-muted fs-4" to="/300">Hawaii </appLink></li>
                        <li class="nav-item ps-md-5"><appLink class="nav-link text-muted fs-4" to="/400">Jamaica </appLink></li>
                        <li class="nav-item ps-md-5"><appLink class="nav-link text-muted fs-4" to="/protected">Dashboard</appLink></li>
                        <li class="nav-item ps-md-5"><appLink  class="nav-link text-muted fs-4" to="https://vuejs.org/guide/introduction.html">Documentation </appLink> </li>
                    </ul>
                </div>
               
            </div>
        </nav>
        <div class="container ">
            <div class="d-flex mt-5">
                 <RouterView v-slot="{ Component }" name="leftsidebarComponent">
                     <transition name="fade"  mode="out-in">
                        <component :is="Component" :key="$route.path"/>
                    </transition>
                 </RouterView>
                <RouterView  v-slot="{ Component }"  > 
                    <transition name="fade"  mode="out-in">
                        <component :is="Component" :key="$route.path"/>
                    </transition>
                
                </RouterView>
            </div>
             
        </div>
       
        <div style="height:400px"></div>
        <div style="background-color:#2C3E50; height: 90px;" >  </div>
         </div>
</template>


<style scoped>
/* .activeLink {
    color: rgb(208, 201, 201)  !important
} */


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>