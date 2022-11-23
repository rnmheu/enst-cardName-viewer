<script setup lang="ts">
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

interface Props {
    modelValue: {
        id: number
        label: string
    }
    options:
        | {
              id: number
              label: string
          }[]
        | undefined
}
interface Emits {
    (
        event: 'update:modelValue',
        modelValue: {
            id: number
            label: string
        }
    ): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const onSelect = (selected: { id: number; label: string }) => {
    emit('update:modelValue', selected)
}
</script>

<template>
    <Listbox
        class="selectBox"
        as="div"
        :model-value="modelValue"
        v-on:update:model-value="onSelect"
    >
        <ListboxButton class="selectBoxButton">
            <span>
                {{ modelValue.label }}
            </span>
            <span class="material-icons md-low-emphasis"
                >unfold_more</span
            ></ListboxButton
        >
        <ListboxOptions class="selectBoxOptions">
            <ListboxOption
                v-slot="{ active, selected }"
                v-for="option in options"
                :key="option.id"
                :value="option"
                as="template"
            >
                <li
                    class="selectBoxOption"
                    :class="{
                        'selectBoxOption--selected': selected,
                        'selectBoxOption--active': active,
                    }"
                >
                    <span v-if="selected" class="material-icons md-1rem"
                        >check</span
                    >
                    <span v-else class="deselect"></span>
                    <span>
                        {{ option.label }}
                    </span>
                </li>
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>

<style lang="scss">
.selectBox {
    width: 100%;
}
.selectBoxButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0.8em 0.5em 0.8em 1.1em;

    font-size: 1.2rem;
    font-weight: 700;

    text-align: left;
    width: inherit;

    color: var(--text-mid-emphasis);

    background-color: var(--surface-primary);
    border: 1px var(--dark-alpha-30) solid;
    border-radius: 0.5rem;
}
.selectBoxOptions {
    position: absolute;
    z-index: 1;
    transform: translateY(0.5em);

    overflow-y: scroll;

    width: auto;
    height: 16em;

    padding-left: 0;

    background-color: white;
    border: 1px var(--dark-alpha-30) solid;
    border-radius: 0.5rem;
    box-shadow: 0 0 8px 2px var(--dark-alpha-30);
}

.selectBoxOption {
    display: flex;
    align-items: center;
    gap: 0.5em;

    list-style-type: none;
    cursor: pointer;

    padding: 0.5em 1em;

    font-size: 1rem;

    &--selected {
        font-weight: $font-weight--bold;
    }

    &--active {
        color: var(--text-accent);
        background-color: var(--primary-10);
    }

    .deselect {
        width: 1rem;
    }
}
</style>
