<template>
    <div>
        <div class="d-flex align-items-center pt-3 py-5">
            <div>
                  <img :src="collection.image" alt="" width="230">
            </div>

            <div class="ps-3 ">
                  <p >{{collection.desc}}</p>
                
            </div>

        </div>
      
      
       
    </div>
</template>

<script>

export default {
    props:['collection'],
  data(){
      return{
       
      }
  },

}
</script>