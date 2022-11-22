<script setup lang="ts">
import { provide } from 'vue'
import CardView from '@/components/Viewer/Viewer.vue'
import CardsSearch from '@/components/SearchForm/SearchForm.vue'
import LayoutStack from '@/components/Layout/LayoutStack.vue'
import LayoutCluster from '@/components/Layout/LayoutCluster.vue'

import { CharactersStore, CharactersKey } from '@/stores/charactersStore'
import { EventsStore, EventsKey } from '@/stores/eventsStore'
import { ScoutsStore, ScoutsKey } from '@/stores/scoutsStore'

provide(CharactersKey, CharactersStore())
provide(EventsKey, EventsStore())
provide(ScoutsKey, ScoutsStore())
</script>

<template>
    <LayoutStack small>
        <LayoutCluster large class="header" :alignItems="'center'">
            <h1 class="app-title">
                ENSEMBLE STARS !!<br />
                CARD TEXT VIEWER
            </h1>
            <CardsSearch />
        </LayoutCluster>
        <CardView />
    </LayoutStack>
</template>

<style scoped lang="scss">
.app-title {
    font-family: var(--fontFamily--emphasis);
    font-weight: 700;
    line-height: 1.2em;
}

.header {
    padding: var(--s2) 0;
}
</style>
