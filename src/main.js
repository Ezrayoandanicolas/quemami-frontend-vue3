import { createApp } from 'vue'
import App from './App.vue'
import axios from '@/config/axios.js'
import Store from '@/store'
import { VueCookieNext } from 'vue-cookie-next'
import VueRouter from './router.js'
import SweetAlert from 'vue-sweetalert2'
import VueNumberFormat from 'vue-number-format'
import VueApexCharts from "vue3-apexcharts"

import './assets/css/index.css';
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.min.css'
import 'flowbite';

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
        // config.headers.common['Content-Type'] = 'application/json';
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

const toastOptions = {
  target: '#toast-custom',
  customClass: {
      container: 'position-absolute'
  },
  padding: '0.3em',
  toast: true,
  // position: 'top-right',
  // showConfirmButton: false,
  // timer: 1500
}

VueCookieNext.config({ 
  expire: '7d',
  secure: true,
})

createApp(App)
    .use(VueRouter)
    .use(Store)
    .use(VueCookieNext)
    .use(VueApexCharts)
    .use(VueNumberFormat, {prefix: 'Rp ', precision: 0, decimal: '.', thousand: '.'})
    // .use(VueVisualFilter)
    .use(SweetAlert, toastOptions)
    .mount('#app')
