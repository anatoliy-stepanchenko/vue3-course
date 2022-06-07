import { createApp } from 'vue'
import App from '@/App';
import PrimeVue from 'primevue/config';
import components from '@/components/UI';
import router from './router/router';

import '/node_modules/primeflex/primeflex.css';

import 'primevue/resources/themes/saga-blue/theme.css'     
import 'primevue/resources/primevue.min.css'                 
import 'primeicons/primeicons.css'                          


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app.use(PrimeVue);
app.use(router);

app.mount('#app');
