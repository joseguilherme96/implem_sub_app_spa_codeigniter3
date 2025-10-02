import { createApp } from 'vue'
import { App } from './app.js'
import { router } from './Router/router.js'


createApp(App)
    .use(router)
    .mount('#app')