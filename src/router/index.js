import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "../views/DestinationView.vue"

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
      component:DestinationView
    }
  ],
  linkActiveClass: " activeLink"
});

export default router;
