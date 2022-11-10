<script setup lang="ts">
interface Props {
    small?: boolean
    large?: boolean
}
defineProps<Props>()
</script>

<template>
    <div class="grid" :class="{ small: $props.small, large: $props.large }">
        <slot />
    </div>
</template>

<style lang="scss">
.grid {
    display: grid;
    gap: var(--gap-space, 1rem);
    --minimum: 20em;

    grid-template-columns: repeat(
        auto-fit,
        minmax(min(var(--minimum), 100%), 1fr)
    );
}

.small {
    --gap-space: var(--s-1);
}

.large {
    --gap-space: var(--s1);
}
</style>
