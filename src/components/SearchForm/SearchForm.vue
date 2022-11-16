<script setup lang="ts">
import LayoutCluster from '@/components/Layout/LayoutCluster.vue'
import { requireInjection } from '@/utils/requireInjection'
import SelectBox from '@/components/SearchForm/SearchFormSelectBox.vue'

import { CharactersKey } from '@/stores/charactersStore'
import { EventsKey } from '@/stores/eventsStore'
import { ScoutsKey } from '@/stores/scoutsStore'

const characters = requireInjection(CharactersKey)
const events = requireInjection(EventsKey)
const scouts = requireInjection(ScoutsKey)
</script>

<template>
    <LayoutCluster>
        <div v-if="characters.pending.value">loading...</div>
        <LayoutCluster v-else>
            <SelectBox
                :options="characters.characters.value"
                v-model:model-value="characters.selected.value"
                v-on:update:model-value="characters.onSelectedTarget"
            />
            <SelectBox
                :options="events.events.value"
                v-model:model-value="events.selected.value"
                v-on:update:model-value="events.onSelectedTarget"
            />
            <SelectBox
                :options="scouts.scouts.value"
                v-model:model-value="scouts.selected.value"
                v-on:update:model-value="scouts.onSelectedTarget"
            />
        </LayoutCluster>
    </LayoutCluster>
</template>

<style scoped></style>
