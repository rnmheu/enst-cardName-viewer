import { rest } from 'msw'
import cards from '@/mocks/api/cards.json'
import characters from '@/mocks/api/characters.json'
import events from '@/mocks/api/events.json'
import scouts from '@/mocks/api/scouts.json'

export const handlers = [
    rest.get('https://data.ensemble.moe/ja/cards.max.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(cards))
    }),
    rest.get('https://data.ensemble.moe/ja/characters.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(characters))
    }),
    rest.get('https://data.ensemble.moe/ja/events.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(events))
    }),
    rest.get('https://data.ensemble.moe/ja/scouts.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(scouts))
    }),
]
