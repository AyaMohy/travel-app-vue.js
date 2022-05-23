<template>
    <div class="col-12">
        
        <form class="border shadow-lg bg-light p-5 w-50 mt-5 mx-auto" @submit.prevent="login">
            <div class="input-group mt-3">
                <label class="h5 form-label pe-5" for="username">username</label>
                <input  v-model="username" class="form-control" type="text" id="username">

            </div>

            <div class="input-group mt-3">
                <label class="h5 form-label pe-5" for="pass">password</label>
                <input v-model="password" type="text" id="pass" class=" form-control">
            </div>
            <button class=" btn fs-5 btn-primary pe-5  mt-3 pb-2">Login</button>

        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                username:'',
                password:'',
            }
        },
        methods:{
            login(){
                window.user=this.username;
                const redirectPath=this.$route.query.redirect || '/protected';
                // this.$router.push({name:'protected'})
                this.$router.push(redirectPath)
            }
        }
    }
</script>