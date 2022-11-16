import { ref, InjectionKey, computed } from 'vue'
import { ofetch } from 'ofetch'

interface ScoutsAPI {
    compliant: 'TRUE' | 'FALSE'
    gacha_id: number
    name: string
    start_date: Date
    end_date: Date
    type: string
    story_name: string
    story_author: string
    story_season: string
    banner_id: number
    five_star: { chara_id: number[]; card_id: number[] }
    four_star: { chara_id: number[]; card_id: number[] }
    three_star: { chara_id: number[]; card_id: number[] }
    cards: number[]
}

interface Scout {
    id: number
    label: string
    cards: number[]
}

export function ScoutsStore() {
    const scouts = ref<Scout[]>([
        {
            id: 0,
            label: 'スカウト名',
            cards: [0],
        },
    ])
    const selected = ref(scouts.value[0])

    const pending = computed(() => {
        if (scouts.value.length === 1) {
            return true
        }
        return false
    })

    if (scouts.value.length === 1) {
        ofetch<ScoutsAPI[]>('https://data.ensemble.moe/ja/scouts.json', {
            parseResponse: JSON.parse,
        })
            .then((json) => json.filter((el) => hasData(el)))
            .then((json) => (scouts.value = formatData(json)))
    }

    const onSelectedTarget = (target: Scout) => {
        selected.value = target
    }

    return {
        pending,
        selected,
        scouts,
        onSelectedTarget,
    }
}

type ScoutsStoreType = ReturnType<typeof ScoutsStore>
export const ScoutsKey: InjectionKey<ScoutsStoreType> = Symbol('ScoutsStore')

function hasData(scout: ScoutsAPI) {
    if (scout.compliant === 'TRUE') {
        return true
    }
    return false
}

function formatData(scout: ScoutsAPI[]) {
    let list: Scout[] = []

    for (let i = 0; i < scout.length; i++) {
        list[list.length] = {
            id: scout[i].gacha_id,
            label: scout[i].name,
            cards: scout[i].cards,
        }
    }
    return list
}
