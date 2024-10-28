import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('error', {
    state: () => ({
        title: '',
        description: '',
        isVisible: false,
    }),
    actions: {
        showNotification(notification) {
            this.title = notification.title;
            this.description = notification.description;
            this.isVisible = true;
            setTimeout(() => {
                this.isVisible = false;
                this.title = '';
                this.description = '';
            }, 5000);
        },


        hideError() {
            this.isVisible = false;
            this.title = '';
            this.description = '';
        },
    },
});
