<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
import 'vue-sonner/style.css';

import AlertSound from '@/assets/alert-sound.mp3';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import { AppPageProps } from '@/types';
import { router, usePage } from '@inertiajs/vue3';
import { useColorMode } from '@vueuse/core';
import { useSound } from '@vueuse/sound';
import { onUnmounted } from 'vue';
import { toast } from 'vue-sonner';

const page = usePage<AppPageProps>();

const mode = useColorMode();

const alertSound = useSound(AlertSound);

router.on('before', () => {
    page.props.toast = null;
});

let removeFinshEventListener = router.on('finish', () => {
    if (page.props.toast) {
        if (page.props.toast.type === 'success') {
            alertSound.play();
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
    <AppLayout>
        <slot />
        <Toaster position="top-center" rich-colors :theme="mode === 'auto' ? 'system' : mode" style="font-family: Geist" />
    </AppLayout>
</template>
