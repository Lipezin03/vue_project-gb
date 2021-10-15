import { createApp } from 'vue'
import App from './App.vue'
import components from "@/components/UI"
import store from "@/store"
import router from '@/router/router'
import pluginMyContextMenu from '@/plugins/pluginMyContextMenu'

const app = createApp(App);

components.forEach(comp => {
    app.component(comp.name, comp)
})

app
    .use(pluginMyContextMenu)
    .use(router)
    .use(store)
    .mount('#app')
