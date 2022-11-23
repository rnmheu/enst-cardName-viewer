<script setup lang="ts">
import LayoutCluster from '@/components/Layout/LayoutCluster.vue'
import { requireInjection } from '@/utils/requireInjection'
import SelectBox from '@/components/SearchForm/SearchFormSelectBox.vue'

import { CharactersKey } from '@/stores/charactersStore'
import { EventsKey } from '@/stores/eventsStore'
import { ScoutsKey } from '@/stores/scoutsStore'
import LayoutGrid from '../Layout/LayoutGrid.vue'

const characters = requireInjection(CharactersKey)
const events = requireInjection(EventsKey)
const scouts = requireInjection(ScoutsKey)
</script>

<template>
    <LayoutCluster>
        <div v-if="characters.pending.value">loading...</div>
        <LayoutGrid small v-else>
            <div>
                <p class="selectBox-label">IDOL</p>
                <SelectBox
                    :options="characters.characters.value"
                    v-model:model-value="characters.selected.value"
                    v-on:update:model-value="characters.onSelectedTarget"
                />
            </div>
            <div>
                <p class="selectBox-label">EVENT</p>
                <SelectBox
                    :options="events.events.value"
                    v-model:model-value="events.selected.value"
                    v-on:update:model-value="events.onSelectedTarget"
                />
            </div>
            <div>
                <p class="selectBox-label">SCOUT</p>
                <SelectBox
                    :options="scouts.scouts.value"
                    v-model:model-value="scouts.selected.value"
                    v-on:update:model-value="scouts.onSelectedTarget"
                />
            </div>
        </LayoutGrid>
    </LayoutCluster>
</template>

<style scoped>
.selectBox-label {
    margin-bottom: 0.1rem;
    padding-left: 1.5rem;
    font-weight: 700;
    color: var(--text-low-emphasis);
}
</style>
