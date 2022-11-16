import { ref, computed } from 'vue'
import { ofetch } from 'ofetch'
import { CardAPI, Card } from '@/types/Card'

export function useCards() {
    const data = ref<Card[]>()
    const pending = computed(() => {
        if (data.value === undefined) {
            return true
        }
        return false
    })

    if (data.value === undefined) {
        ofetch<CardAPI[]>('https://data.ensemble.moe/ja/cards.max.json', {
            parseResponse: JSON.parse,
        }).then((json) => (data.value = formatCards(json)))
    }

    function filterByCharacterId(characterId: number) {
        if (data.value !== undefined) {
            if (characterId === 0) {
                return data.value
            } else {
                const list = data.value.filter(
                    (card) => card.character_id === characterId
                )
                return list
            }
        }
    }
    function filterByCardId(cardIds: number[]) {
        if (data.value === undefined) {
            return
        }
        const list = data.value.filter((card) => cardIds.includes(card.id))
        return list
    }
    return {
        pending,
        data,
        filterByCharacterId,
        filterByCardId,
    }
}

function formatCards(cards: CardAPI[]) {
    let list = []

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].name === undefined) {
            // カードのデータが存在していないのでスキップ
            continue
        }

        list[list.length] = formatData(cards[i])
    }
    return list
}

function formatData(card: CardAPI): Card {
    const formattedData = {
        id: card.id,
        rarity: card.rarity,
        character_id: card.character_id,
        type: convertToTypeStr(card.type),
        title: card.title,
        name: card.name,
        skills: {
            center: {
                name: card.skills?.center?.name,
            },
            live: {
                name: card.skills?.live?.name,
            },
            support: {
                name: card.skills?.support?.name,
            },
        },
        obtain: {
            name: card.obtain?.name,
            id: card.obtain?.id,
            type: card.obtain?.type,
            subType: card.obtain?.subType,
        },
    }
    return formattedData
}

function convertToTypeStr(type: number): string {
    switch (type) {
        case 1:
            return 'da'
        case 2:
            return 'vo'
        case 3:
            return 'gl'
        case 4:
            return 'pf'
        default:
            return ''
    }
}
