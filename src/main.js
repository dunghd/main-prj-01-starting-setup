import { createApp } from 'vue';

import router from './router';
import App from './App.vue';
import store from './store/index';
import BaseCard from './pages/ui/BaseCard.vue';
import BaseButton from './pages/ui/BaseButton.vue';
import BaseBadge from './pages/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);

app.mount('#app');
