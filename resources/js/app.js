import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import { createI18n } from 'vue-i18n'

import fr from './translations/fr.json'

const app = createApp(App);

const i18n = createI18n({
    locale: 'fr', // Langue par défaut
    messages: {
        fr: fr
    },
});

// Use the router
app.use(router).use(i18n).mount('#app');
