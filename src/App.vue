<script setup lang="ts">
import { provide } from 'vue'
import CardView from '@/components/Viewer/Viewer.vue'
import CardsSearch from '@/components/SearchForm/SearchForm.vue'
import LayoutStack from '@/components/Layout/LayoutStack.vue'
import LayoutCluster from '@/components/Layout/LayoutCluster.vue'

import { CharactersStore, CharactersKey } from '@/stores/charactersStore'
provide(CharactersKey, CharactersStore())
</script>

<template>
    <LayoutStack small class="index">
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
.index {
    width: min(1260px, 90vw);
}

.header {
    padding: var(--s2) 0;
}
</style>
