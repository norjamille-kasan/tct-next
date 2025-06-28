<template>
    <div class="flex w-full items-center justify-center gap-2">
        <template v-for="link in links" :key="link.label">
            <component
                :is="link.url ? Link : 'span'"
                :disabled="!link.url"
                :href="link.url"
                v-html="link.label"
                :class="buttonVariants({ variant: link.active ? 'secondary' : 'ghost', size: 'sm' })"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import { PaginationLink } from '@/types';
import { Link } from '@inertiajs/vue3';
import { buttonVariants } from './ui/button';

const props = defineProps<{
    links: PaginationLink[];
}>();
</script>
