import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

const pinia = createPinia()

import fr from './translations/fr.json'
import en from './translations/en.json'
import de from './translations/de.json'
import nl from './translations/nl.json'

const app = createApp(App);


const navigatorLang = navigator.language.split('-')[0];

const i18n = createI18n({
    locale: navigatorLang, // Langue par défaut
    messages: {
        fr: fr,
        en: en,
        de: de,
        nl: nl,
    },
});

// Définir le language par rapport à la langue du navigateur

// Use the router
app.use(router).use(i18n).use(pinia).mount('#app');
