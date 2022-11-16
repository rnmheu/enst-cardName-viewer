<script setup lang="ts">
import { watch, ref } from 'vue'

import LayoutGrid from '@/components/Layout/LayoutGrid.vue'
import ViewerCard from '@/components/Viewer/ViewerCard.vue'
import LayoutStack from '@/components/Layout/LayoutStack.vue'

import { useCards } from '@/components/Viewer/useCards'

import { requireInjection } from '@/utils/requireInjection'
import { CharactersKey } from '@/stores/charactersStore'
import { EventsKey } from '@/stores/eventsStore'
import { ScoutsKey } from '@/stores/scoutsStore'

const characters = requireInjection(CharactersKey)
const events = requireInjection(EventsKey)
const scouts = requireInjection(ScoutsKey)

const { pending, filterByCharacterId, filterByCardId, data } = useCards()
const cards = ref(data.value)

watch(
    [
        () => characters.selected.value,
        () => events.selected.value,
        () => scouts.selected.value,
    ],
    (
        [new_charas, new_events, new_scouts],
        [old_charas, old_events, old_scouts]
    ) => {
        if (new_charas !== old_charas) {
            cards.value = filterByCharacterId(new_charas.id)
        } else if (new_events !== old_events) {
            cards.value = filterByCardId(new_events.cards)
        } else if (new_scouts !== old_scouts) {
            cards.value = filterByCardId(new_scouts.cards)
        }
    }
)
</script>

<template>
    <div v-if="pending">loading...</div>
    <LayoutGrid large v-else>
        <ViewerCard v-for="card in cards" :key="card.id" v-bind:card="card" />
    </LayoutGrid>
</template>

<style scoped lang="scss"></style>
