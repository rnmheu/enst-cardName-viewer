import { createApp } from 'vue'
import './assets/style.scss'
import 'material-icons/iconfont/material-icons.css'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
    import('./mocks/browser').then((module) => {
        module.worker.start({
            onUnhandledRequest: 'bypass',
        })
    })
}

createApp(App).mount('#app')
