import { createApp } from 'vue'
import App from './App.vue'

import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App);
import { createTinymcePlugin } from '.'

app.use(plugin, defaultConfig({
    plugins: [createTinymcePlugin()]
}))

app.mount('#app')
