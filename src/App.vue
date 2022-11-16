<script setup lang="ts">
import { provide } from 'vue'
import CardView from '@/components/Viewer/Viewer.vue'
import CardsSearch from '@/components/SearchForm/SearchForm.vue'
import LayoutStack from '@/components/Layout/LayoutStack.vue'

import { CharactersStore, CharactersKey } from '@/stores/charactersStore'
provide(CharactersKey, CharactersStore())
</script>

<template>
    <LayoutStack class="index">
        <h1 class="app-title">enst card particles</h1>
        <CardsSearch />
        <CardView />
    </LayoutStack>
</template>

<style scoped>
.app-title {
    font-family: var(--fontFamily--emphasis);
    font-weight: 700;
}
.index {
    margin-left: 0;
    margin-right: 0;
    width: min(1260px, 90vw);
}
</style>
