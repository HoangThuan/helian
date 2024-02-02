import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import i18n from './i18n';
import store from "./state/store";


import BootstrapVueNext from 'bootstrap-vue-next';
import vClickOutside from "click-outside-vue3";
// import VueApexCharts from "vue3-apexcharts";
// import Maska from 'maska';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

// import VueFeather from 'vue-feather';

import '@/assets/scss/config/material/app.scss';
// import '@vueform/slider/themes/default.css';
import '@/assets/scss/mermaid.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

//2024/1/29 Rolex create
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// FakeBackend authentication
// import { configureFakeBackend } from './helpers/fake-backend';
// configureFakeBackend();


// Firebase authentication
// import { initFirebaseBackend } from './authUtils';

// const firebaseConfig = {
//     apiKey: process.env.VUE_APP_APIKEY,
//     authDomain: process.env.VUE_APP_AUTHDOMAIN,
//     databaseURL: process.env.VUE_APP_VUE_APP_DATABASEURL,
//     projectId: process.env.VUE_APP_PROJECTId,
//     storageBucket: process.env.VUE_APP_STORAGEBUCKET,
//     messagingSenderId: process.env.VUE_APP_MEASUREMENTID
// };

// initFirebaseBackend(firebaseConfig);



// AOS.init({
//     easing: 'ease-out-back',
//     duration: 1000
// });

    createApp(App)
    .use(store)
    .use(router)
    // .use(VueApexCharts)
    .use(BootstrapVueNext)
    .use(VueSweetalert2)
    // .component(VueFeather.type, VueFeather)
    .component('VueDatePicker', VueDatePicker)
    // .use(Maska)
    .use(i18n)
    .use(vClickOutside)
    .mount('#app');