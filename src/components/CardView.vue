<script setup lang="ts">
import LayoutStack from './Layout/LayoutStack.vue'
interface CardData {
    compliant?: string
    id?: number
    rarity?: number
    character_id?: number
    type: number
    substat_type: number
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
    <div
        class="box"
        :class="{
            'box-bg--da': (type / 10) * 10 === 1,
            'box-bg--vo': (type / 10) * 10 === 2,
            'box-bg--gl': (type / 10) * 10 === 3,
            'box-bg--pf': (type / 10) * 10 === 4,
        }"
    >
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
    padding: var(--box-y-space, var(--s1)) var(--box-x-space, var(--s0));

    --box-y-space: var(--s1);
    --box-x-space: var(--s2);

    margin-right: 0;
    margin-left: 0;

    color: var(--white-alpha-90);
    background: var(--border-color, white);
    border: 1px var(--white-alpha-80) solid;
    border-radius: 0.5rem;
    box-shadow: 0 0 8px 2px var(--dark-alpha-30);
}

.box-bg--da {
    --border-color: linear-gradient(-225deg, #f77062 0%, #ec345c 100%);
}

.box-bg--vo {
    --border-color: linear-gradient(-225deg, #00b5ec 0%, #165fbe 100%);
}
.box-bg--gl {
    --border-color: linear-gradient(-225deg, #00ca9e 0%, #0fbd0f 100%);
}

.box-bg--pf {
    --border-color: linear-gradient(-225deg, #f9b523 0%, #ec7c3b 100%);
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
