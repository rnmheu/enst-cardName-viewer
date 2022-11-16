import { ref, InjectionKey, computed } from 'vue'
import { ofetch } from 'ofetch'

interface EventsAPI {
    compliant: 'TRUE' | 'FALSE'
    event_id: number
    start_date: Date
    end_date: Date
    type: string
    name: string
    event_gacha: string
    gacha_id: 305
    intro_lines: string
    song_name: string
    story_name: string
    story_author: string
    story_season: string
    banner_id: number
    five_star: { chara_id: number[]; card_id: number[] }
    four_star: { chara_id: number[]; card_id: number[] }
    unit_id: number[]
    cards: number[]
}

interface Event {
    id: number
    label: string
    cards: number[]
}

export function EventsStore() {
    const events = ref<Event[]>([
        {
            id: 0,
            label: 'イベント名',
            cards: [0],
        },
    ])
    const selected = ref(events.value[0])

    const pending = computed(() => {
        if (events.value.length === 1) {
            return true
        }
        return false
    })

    if (events.value.length === 1) {
        ofetch<EventsAPI[]>('https://data.ensemble.moe/ja/events.json', {
            parseResponse: JSON.parse,
        })
            .then((json) => json.filter((el) => hasData(el)))
            .then((json) => (events.value = formatData(json)))
    }

    const onSelectedTarget = (target: Event) => {
        selected.value = target
    }

    return {
        pending,
        selected,
        events,
        onSelectedTarget,
    }
}

type EventsStoreType = ReturnType<typeof EventsStore>
export const EventsKey: InjectionKey<EventsStoreType> = Symbol('EventsStore')

function hasData(event: EventsAPI) {
    if (event.compliant === 'TRUE') {
        return true
    }
    return false
}

function formatData(event: EventsAPI[]) {
    let list: Event[] = []

    for (let i = 0; i < event.length; i++) {
        list[list.length] = {
            id: event[i].event_id,
            label: event[i].name,
            cards: event[i].cards,
        }
    }
    return list
}
