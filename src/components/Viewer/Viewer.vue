<script setup lang="ts">
import { watch, ref } from 'vue'

import LayoutGrid from '@/components/Layout/LayoutGrid.vue'
import ViewerCard from '@/components/Viewer/ViewerCard.vue'
import LayoutStack from '@/components/Layout/LayoutStack.vue'

import { useCards } from '@/components/Viewer/useCards'
import { CharactersKey } from '@/stores/charactersStore'
import { requireInjection } from '@/utils/requireInjection'

const { pending, filterById, data } = useCards()
const characters = requireInjection(CharactersKey)

const cards = ref(data.value)
watch(
    () => characters.selected.value,
    (value) => (cards.value = filterById(value.id))
)
</script>

<template>
    <div v-if="pending">loading...</div>
    <LayoutGrid large v-else>
        <ViewerCard v-for="card in cards" :key="card.id" v-bind:card="card" />
    </LayoutGrid>
</template>

<style scoped lang="scss"></style>
