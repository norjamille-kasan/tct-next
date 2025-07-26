<script setup lang="ts">
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <slot />
    </AppShell>
</template>
