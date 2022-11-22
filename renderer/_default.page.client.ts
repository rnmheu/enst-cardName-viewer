import { createApp } from './app'
import type { PageContextClient } from './types'

export { render }

async function render(pageContext: PageContextClient) {
    if (import.meta.env.MODE === 'development') {
        import('@/mocks/browser').then((module) => {
            module.worker.start({
                onUnhandledRequest: 'bypass',
            })
        })
    }
    const app = createApp(pageContext)
    app.mount('#app')
}
