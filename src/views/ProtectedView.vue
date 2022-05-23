<template>
    <div class="container">
        <h2>Greetings! {{username}} </h2>
        <button class="btn btn-danger me-5" @click="logout">logout</button>
        <Router-link :to="{name:'invoice'}">
            <button class="btn btn-success">Invoices</button>
        </Router-link>
    </div>
</template>

<script>
export default{
    data(){
        return{
            username:window.user
        }
    },
    methods:{
        logout(){
            window.user=null
            this.$router.push({name:'home', hash:'#logout', query:{logout:null}})
        }
    }
}
</script>