import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "../views/DestinationView.vue"
import testview from '../views/testview.vue'
import sourcedata from '../../sourcedata.json'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
   
   
  
    {
      path:"/:id",
      props:true,
      name:"destination.show",
      component:DestinationView,
      beforeEnter(to,from){
          const exists=sourcedata.destinations.find((destination)=>{
            return destination.id === parseInt(to.params.id)
          } )
          if(!exists)  return {
            name:'404view',
            params:{pathMatch:to.path.split('/').slice(1)},
            query:to.query,
            hash:to.hash
        
        }
      }
     
    },
    {
      path:"/:pathMatch(.*)*",
      // path:'/:catchall(.*)',
      name:'404view',
      component:()=> import('../views/404view.vue') 
    }
    // ,
    // {
    //   path:"/:slug",
    //   props:true,
    //   name:'Test' ,
    //   component:testview
    // }
  ],
  linkActiveClass: " activeLink",
  scrollBehavior(to, from, savedPosition){
    return savedPosition||new Promise( (resolve)=>{
      setTimeout(()=>resolve({top:0, behavior:"smooth"}), 300 )
    })
  } //end of scroobehavior
});

export default router;
