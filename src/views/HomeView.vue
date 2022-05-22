<script>
// import data from '../../data.js'

import sourcedata from '../../sourcedata.json'

export default {
 data(){
   return {
     data: sourcedata.destinations
   }
 },
  
}
</script>

<template>
  <div class="container">
      <section  class=" row ">
        <h2 class="mt-5 mb-4">All Destinations</h2>
        <div class="col-12  col-sm-6 col-md-3 " v-for="d in data" :key="d.id"> 
            <div class="card " style="width:240px;">
              <h3 class="card-title py-2 text-center">{{d.name}}</h3>
              <!-- <Router-link :to=" '/' + d.id" > -->
              <Router-link :to="{name:'destination.show', params:{id:d.id}}"  > 
                 <img class="card-img-bottom" :src="d.image" :alt="d.name" srcset="" width="230">
                  <!-- <Router-link :to="`/${d.slug}`">test button</Router-link> -->
              </Router-link>
            </div>

           
        </div>
      </section>
  </div>
</template>