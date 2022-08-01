import { createApp } from 'vue'
import App from './App.vue'
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App)

app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).mount('#app')