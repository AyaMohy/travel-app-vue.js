<template>
    <div>
        <a class="nav-link text-muted fs-4"
        rel="noopener"
        v-if="isExternal" target="_blink" :href="to"><slot/> </a>
       <Router-link class="nav-link text-muted fs-4"  v-else v-bind="$props"><slot/> </Router-link>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
    export default{
        props:{
            ...RouterLink.props
        },
        computed:{
            isExternal(){
                return typeof this.to ==='string' && this.to.startsWith("http")
            }
        }
    }
</script>

<style>
.activeLink {
    color: rgb(208, 201, 201)  !important
}

</style>