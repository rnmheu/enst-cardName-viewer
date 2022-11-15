import { rest } from 'msw'
import cards from '@/mocks/api/cards.json'
import characters from '@/mocks/api/characters.json'

export const handlers = [
    rest.get('https://data.ensemble.moe/ja/cards.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(cards))
    }),
    rest.get('https://data.ensemble.moe/ja/characters.json', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json(characters))
    }),
]
