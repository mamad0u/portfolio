import { createApp } from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App)

app.AOS = new AOS.init();

app.use(AOS.refresh()).mount('#app')