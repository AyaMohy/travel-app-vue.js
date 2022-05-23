import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import appLink from "./components/appLink.vue"

const app = createApp(App)
.component('appLink', appLink);

app.use(router);

app.mount("#app");
