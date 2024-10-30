import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        title: '',
        description: '',
        type: 'error', // Définir le type par défaut
        isVisible: false,
    }),
    actions: {
        showNotification(notification) {
            this.title = notification.title;
            this.description = notification.description;
            this.type = notification.type || 'error'; // Définit par défaut en tant qu'erreur
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
                this.title = '';
                this.description = '';
                this.type = 'error'; // Réinitialise le type à 'error'
            }, 5000);
        },

        hideNotification() {
            this.isVisible = false;
            this.title = '';
            this.description = '';
            this.type = 'error';
        },
    },
});
