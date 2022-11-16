<script setup lang="ts">
interface Props {
    small?: boolean
    large?: boolean
    reverse?: boolean
    alignItems?: 'top' | 'center' | 'bottom'
    justifyContent?: 'space-between' | 'left' | 'right'
}
defineProps<Props>()
</script>

<template>
    <div
        class="cluster"
        :class="[
            {
                small: $props.small,
                large: $props.large,
                reverse: $props.reverse,
                alignItems: $props.alignItems !== undefined,
                justifyContent: $props.justifyContent !== undefined,
            },
        ]"
    >
        <slot />
    </div>
</template>

<style lang="scss">
.cluster {
    display: flex;
    justify-content: normal;
    flex-wrap: wrap;
    gap: var(--cluster-space, 1rem);

    margin-right: 0;
    margin-left: 0;
}

.small {
    --cluster-space: var(--s-1);
}

.large {
    --cluster-space: var(--s1);
}

.reverse {
    flex-direction: row-reverse;
}

.justifyContent {
    justify-content: v-bind('justifyContent');
}

.alignItems {
    align-items: v-bind('alignItems');
}
</style>
