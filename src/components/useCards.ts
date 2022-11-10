import { ref } from 'vue'
import { $fetch } from 'ohmyfetch'

export function useCards() {
    const pending = ref(true)
    const data = ref<CardData[]>()
    $fetch<CardData[]>('https://data.ensemble.moe/ja/cards.json', {
        parseResponse: JSON.parse,
    })
        .then((json) => (data.value = json.filter((el) => filter(el))))
        .finally(() => (pending.value = false))

    return { pending, data }
}

function filter(card: CardData) {
    if (card.name !== undefined) {
        return true
    }
    return false
}
