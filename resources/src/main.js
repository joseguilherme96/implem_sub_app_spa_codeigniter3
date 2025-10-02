import 'vuetify/styles'
import { createApp } from 'vue'
import { App } from './app.js'
import { router } from './Router/router.js'
import { createVuetify } from 'vuetify'


createApp(App)
    .use(createVuetify())
    .use(router)
    .mount('#app')