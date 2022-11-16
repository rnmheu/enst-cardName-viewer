import { ref, InjectionKey, computed } from 'vue'
import { ofetch } from 'ofetch'

interface CharactersAPI {
    compliant: 'TRUE' | 'FALSE'
    character_id: number
    sort_id: number
    unit: number[]
    last_name: string | undefined
    first_name: string
}

interface Characters {
    id: number
    label: string
}

export function CharactersStore() {
    const characters = ref<Characters[]>([
        {
            id: 0,
            label: 'アイドル名',
        },
    ])
    const selected = ref(characters.value[0])

    const pending = computed(() => {
        if (characters.value.length === 1) {
            return true
        }
        return false
    })

    if (characters.value.length === 1) {
        ofetch<CharactersAPI[]>(
            'https://data.ensemble.moe/ja/characters.json',
            {
                parseResponse: JSON.parse,
            }
        )
            .then((json) =>
                json
                    .filter((el) => hasData(el))
                    .sort((a, b) => a.sort_id - b.sort_id)
            )
            .then((json) => (characters.value = formatData(json)))
    }

    const onSelectedTarget = (target: Characters) => {
        selected.value = target
    }

    return {
        pending,
        selected,
        characters,
        onSelectedTarget,
    }
}

type CharactersStoreType = ReturnType<typeof CharactersStore>
export const CharactersKey: InjectionKey<CharactersStoreType> =
    Symbol('CharactersStore')

function hasData(card: CharactersAPI) {
    if (card.compliant === 'TRUE') {
        return true
    }
    return false
}

function hasLastName(lastName: string | undefined) {
    if (typeof lastName === 'string') {
        return true
    }
    return false
}

function formatData(cards: CharactersAPI[]) {
    let list: Characters[] = []

    for (let i = 0; i < cards.length; i++) {
        let name: string

        if (hasLastName(cards[i].last_name)) {
            name = cards[i].last_name + cards[i].first_name
        } else {
            name = cards[i].first_name
        }

        list[list.length] = {
            id: cards[i].character_id,
            label: name,
        }
    }
    return list
}
