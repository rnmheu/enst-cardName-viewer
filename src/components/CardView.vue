<script setup lang="ts">
import LayoutStack from './Layout/LayoutStack.vue'
interface CardData {
    compliant?: string
    id?: number
    rarity?: number
    character_id?: number
    type?: number
    substat_type?: number
    title?: string
    name?: string
    releaseDate?: { jp?: Date; en?: Date }
    stats?: {
        min?: { da?: number; vo?: number; pf?: number }
        max?: { da?: number; vo?: number; pf?: number }
    }
    skills?: {
        center?: {
            name?: string
            effect_value?: number[]
            type_id?: number
            description?: string
            order_num?: number
        }
        live?: {
            name?: string
            type_id?: number
            duration?: number
            effect_values?: number[][]
            description?: string
            order_num?: number
            live_skill_type_name?: string
        }
        support?: {
            name?: string
            type_id?: number
            effect_values?: number[][]
            description?: string
            order_num?: number
            support_skill_type_name?: string
        }
    }
    spp?: { name?: string; song_id?: number }
    items?: {
        outfit?: { l2d?: string | string[]; '3d'?: string | string[] }
        backgrounds?: string | string[]
    }
    associated_story?: string
    obtain?: { name?: string; id?: number; type?: string; subType?: string }
}

defineProps<CardData>()
</script>

<template>
    <div class="box">
        <LayoutStack small>
            <div class="title">{{ title }}</div>
            <div>
                <span class="name">{{ name }}</span
                ><span v-if="obtain !== undefined && obtain.name !== undefined">
                    ―
                </span>
                <span
                    v-if="obtain !== undefined && obtain.name !== undefined"
                    class="obtain"
                    >{{ obtain.name }}</span
                >
            </div>
        </LayoutStack>
    </div>
</template>

<style scoped lang="scss">
.box {
    box-sizing: border-box;
    padding: var(--box-y-space, var(--s1)) var(--box-x-space, var(--s0));

    --box-y-space: var(--s1);
    --box-x-space: var(--s2);

    margin-right: 0;
    margin-left: 0;

    background-color: var(--surface-primary);
    border-color: var(--border-mid-emphasis);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;
}

.title {
    font-size: var(--fontSize-medium);
    font-weight: $font-weight--bold;
    font-family: var(--fontFamily--emphasis);
}
.obtain {
    font-size: var(--fontSize-small);
    color: var(--text-low-emphasis);
}
</style>
