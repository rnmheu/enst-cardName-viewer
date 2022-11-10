<script setup lang="ts">
import CardView from './components/CardView.vue'
import LayoutGrid from './components/Layout/LayoutGrid.vue'
import LayoutStack from './components/Layout/LayoutStack.vue'
import { useCards } from './components/useCards'
const { pending, data } = useCards()
</script>

<template>
    <LayoutStack>
        <div v-if="pending">loading...</div>
        <LayoutGrid v-else class="index">
            <template v-for="card in data" :key="card.id">
                <CardView v-bind="card" />
            </template>
        </LayoutGrid>
    </LayoutStack>
</template>

<style scoped>
.index {
    margin-left: 0;
    margin-right: 0;
    max-width: 50em;
}
</style>
