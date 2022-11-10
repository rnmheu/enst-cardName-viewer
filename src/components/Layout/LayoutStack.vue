<script setup lang="ts">
interface Props {
    smaller?: boolean
    small?: boolean
    large?: boolean
}
defineProps<Props>()
</script>

<template>
    <div
        class="stack"
        :class="{
            smaller: $props.smaller,
            small: $props.small,
            large: $props.large,
        }"
    >
        <slot />
    </div>
</template>

<style lang="scss">
.stack > * + * {
    margin-top: var(--stack-space, 1.7rem);
}

.smaller,
.smaller > * + * {
    --stack-space: var(--s-1);
}

.small,
.small > * + * {
    --stack-space: var(--s0);
}

.large,
.large > * + * {
    --stack-space: var(--s2);
}
</style>
