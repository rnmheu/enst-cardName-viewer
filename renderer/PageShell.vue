<template>
    <div class="layout">
        <slot />
    </div>
</template>

<script setup lang="ts">
import '@/assets/style.scss'
import 'material-icons/iconfont/material-icons.css'
</script>

<style></style>

<style scoped>
.layout {
    width: min(1260px, 90vw);
    margin-left: auto;
    margin-right: auto;
}
</style>
