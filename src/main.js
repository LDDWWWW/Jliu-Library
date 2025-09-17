import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5s6SUrvRm8uLImYiNvQPSFFZqrAbhUr4",
  authDomain: "week7-junchen.firebaseapp.com",
  projectId: "week7-junchen",
  storageBucket: "week7-junchen.firebasestorage.app",
  messagingSenderId: "39343364463",
  appId: "1:39343364463:web:fa70ad4b3369326e65709a"
};


const app = createApp(App)
initializeApp(firebaseConfig)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')