<script>
// import sourcedata from '../../sourcedata.json'

import data from '../../data.js'
import experiencecompoent from '../components/experiencecompoent.vue'
export default {
    props:['id'],
    data(){
        return{
            // data: sourcedata.destinations,
            data:data,
            targetitem:null,
            targetcomponent:'',
            sendexperienceditem:'',
            
        }
    },
    components:{
        experiencecompoent
    }
    ,
    methods:{
        getTargetItem(id){
            this.targetitem= data.find( (item)=>{
                return item.id == id
            } )
        },
        changetargetitem(item){
            this.sendexperienceditem=item
        },
        displayalert(){
            alert("hello") 
            // 
        }
    }
}
</script>

<template>
    <div class="container">
        <template>{{getTargetItem(id)}} </template>
        <h3 class="mt-5">{{targetitem.name}}</h3>
        <Router-link to="/">
            <button class="btn border border-2 btn-color rounded"> &#8592; &nbsp; Go Back</button>
        </Router-link>
        <div class="d-lg-flex align-items-center mt-4">
            <div class="flex-shrink-0 border shadow d-inline-block">
                <img width="500" class=" p-1" :src="targetitem.image" :alt="targetitem.name">
            </div>
            <div class="flex-grow-1 ms-md-3">
                <p class="mt-4">{{targetitem.desc}}</p>
            </div>
        </div>
<!-- <img src="./../assets/hawaii.3100682e.jpg" alt="hawaii image" srcset=""> -->
        <hr class="my-5">

        <section>
            <h2 class="mb-3">Top experiences in {{targetitem.name}}</h2>
            <div class="row">

                <div class="col-6 col-md-3 mb-5  " v-for="experience in targetitem.experiences" :key="experience.id">
                    <div class="card  card-item  rounded" @click="targetcomponent='experiencecompoent'; changetargetitem(experience)" >
              
                        <img :src="experience.image" alt="" class="rounded-top">
                        <h5 class="card-title text-light text-center py-2" style="background-color:#2C3E50">{{experience.name}}</h5>
                     
                    </div>

                </div>

                <!-- desrciption -->
                <component :is="targetcomponent" :collection="sendexperienceditem"/>
               
              

            </div>
        </section>

       

    </div>
    
</template>

<style scoped>
    .card-item{
        width: 90% ;
        transition:  width 0.4s;
        cursor: pointer;
        
    }

    .card-item:hover{
        width: 95%;
    }
    .btn-color:hover{
        background-color: rgba(77, 77, 139, 0.9);
        color: white;
    }
</style>