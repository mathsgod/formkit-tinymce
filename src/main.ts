import { createApp } from 'vue'
import App from './App.vue'

import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App);
import * as Components from './components'

app.use(plugin, defaultConfig({
    inputs: {
        ...Components,
    }
}))

app.mount('#app')
