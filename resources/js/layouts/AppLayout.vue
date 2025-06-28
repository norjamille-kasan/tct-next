<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';

import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import { AppPageProps, type BreadcrumbItemType } from '@/types';
import { router, usePage } from '@inertiajs/vue3';
import { useColorMode } from '@vueuse/core';
import { onUnmounted } from 'vue';
import { toast } from 'vue-sonner';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const page = usePage<AppPageProps>();

const mode = useColorMode();

router.on('before', () => {
    page.props.toast = null;
});

let removeFinshEventListener = router.on('finish', () => {
    if (page.props.toast) {
        if (page.props.toast.type === 'success') {
            toast.success(page.props.toast.title, {
                description: page.props.toast.message,
            });
        }
        if (page.props.toast.type === 'error') {
            toast.error(page.props.toast.title, {
                description: page.props.toast.message,
            });
        }
        if (page.props.toast.type === 'warning') {
            toast.warning(page.props.toast.title, {
                description: page.props.toast.message,
            });
        }
        if (page.props.toast.type === 'info') {
            toast.info(page.props.toast.title, {
                description: page.props.toast.message,
            });
        }
    }
});

onUnmounted(() => {
    removeFinshEventListener();
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <slot />
        <Toaster position="top-center" rich-colors :theme="mode === 'auto' ? 'system' : mode" style="font-family: Geist" />
    </AppLayout>
</template>
