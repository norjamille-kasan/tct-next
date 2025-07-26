<template>
    <AppContent variant="sidebar" class="border">
        <AppSidebarHeader :breadcrumbs="breadcrumbs" />
        <div class="space-y-6 p-5">
            <slot />
        </div>
    </AppContent>
</template>

<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { BreadcrumbItemType } from '@/types';
interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>
