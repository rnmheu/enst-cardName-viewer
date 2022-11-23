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
.stack {
    display: flex;
    flex-direction: column;
}

.stack > * + * {
    margin-top: var(--stack-space, 1.7rem);
}

.stack.smaller > * + * {
    --stack-space: var(--s-1);
}

.stack.small > * + * {
    --stack-space: var(--s0);
}

.stack.large > * + * {
    --stack-space: var(--s2);
}
</style>
