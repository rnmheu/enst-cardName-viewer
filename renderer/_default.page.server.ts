import type { PageContextServer } from './types'
import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'

export { render }
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContextServer) {
    const app = createApp(pageContext)
    const appHtml = await renderToString(app)

    const title = 'ENST CARD TEXT VIEWER'
    const desc =
        'This app shows the card title and skill name in "Ensemble Stars!!"'

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

    return {
        documentHtml,
        pageContext: {},
    }
}
