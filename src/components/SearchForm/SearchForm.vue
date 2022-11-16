<script setup lang="ts">
import LayoutCluster from '@/components/Layout/LayoutCluster.vue'
import { requireInjection } from '@/utils/requireInjection'
import SelectBox from '@/components/SearchForm/SearchFormSelectBox.vue'

import { CharactersKey } from '@/stores/charactersStore'
const characters = requireInjection(CharactersKey)
</script>

<template>
    <LayoutCluster>
        <div v-if="characters.pending.value">loading...</div>
        <SelectBox
            v-else
            :options="characters.characters.value"
            v-model:model-value="characters.selected.value"
            v-on:update:model-value="characters.onSelectedTarget"
        />
    </LayoutCluster>
</template>

<style scoped></style>
