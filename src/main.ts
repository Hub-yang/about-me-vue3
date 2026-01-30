import App from './App.vue'
import { router } from './router'

import './style/main.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)
app.use(router).mount('#app')
