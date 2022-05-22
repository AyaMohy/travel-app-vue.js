<template>
    <div>
         <button class="btn border border-2 btn-color rounded" @click="$router.back()"> &#8592; &nbsp; Go Back</button>
    </div>
</template>

<style scoped>
 .btn-color:hover{
        background-color: rgba(77, 77, 139, 0.9);
        color: white;
    }
</style>
