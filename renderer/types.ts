export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }

import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import type { ComponentPublicInstance } from 'vue'

type Page = ComponentPublicInstance
type PageProps = {}

export type PageContextCustom = {
    Page: Page
    pageProps?: PageProps
    urlPathname: string
    exports: {
        documentProps?: {
            title?: string
            description?: string
        }
    }
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer
