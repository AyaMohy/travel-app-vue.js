<template>
    <div>
        <!-- <h2>{{slug}}</h2> -->
        <h3>{{id}}</h3>
        <div v-for="exp in experience.experiences" :key="exp.name">
            <p>{{exp.desc}}</p>
            <img :src="exp.image" :alt="exp.name" />
            <p>{{exp.image}}</p>
        </div>
    </div>
</template>

<script>
import sourcedata from '../../data.js'
// import sourcedata from '../../sourcedata.json'
export default{
    props:['id'],
data(){
return{

}
},
    computed:{
        experience(){
            return sourcedata.find( (dest)=>dest.id==this.$route.params.id)
        }
    }
}
</script>

