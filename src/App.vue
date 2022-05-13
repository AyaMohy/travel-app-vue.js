<script setup>
    import { RouterLink, RouterView } from "vue-router";
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
                    
                        <li class="nav-item ps-md-5 "><Router-link class="text-muted nav-link fs-4" to="/100">Brazil </Router-link></li>
                        <li class="nav-item ps-md-5"><Router-link class="nav-link text-muted fs-4" to="/200">Panama </Router-link></li>
                        <li class="nav-item ps-md-5"><Router-link class="nav-link text-muted fs-4" to="/300">Hawaii </Router-link></li>
                        <li class="nav-item ps-md-5"><Router-link class="nav-link text-muted fs-4" to="/400">Jamaica </Router-link></li>
                    </ul>
                </div>
            </div>
        </nav>


        <RouterView  /> 
        <div style="height:200px"></div>
        <div style="background-color:#2C3E50; height: 90px; " >  </div>
         </div>
</template>


<style scoped>
.activeLink {
    color: rgb(208, 201, 201)  !important
}
</style>