import { createApp } from './app'
import type { PageContextClient } from './types'

export { render }

async function render(pageContext: PageContextClient) {
    setup().then(() => {
        const app = createApp(pageContext)
        app.mount('#app')
    })
}

async function setup() {
    if (import.meta.env.DEV) {
        const worker = await import('@/mocks/browser')
        return worker.worker.start()
    }
    return Promise.resolve()
}
