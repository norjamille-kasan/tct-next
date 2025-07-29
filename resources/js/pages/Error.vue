<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';

defineProps<{
    message?: string;
    status?: number;
    title?: string;
    description?: string;
}>();
</script>

<template>
    <main class="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
        <div class="max-w-2xl text-center">
            <p class="text-sm font-medium tracking-wide text-primary uppercase">
                {{ description }}
            </p>

            <h1 class="mt-4 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
                {{ title }}
            </h1>

            <p class="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl/relaxed">
                {{ message }}
            </p>

            <div class="mt-10 flex justify-center gap-x-4">
                <a v-if="status && [404, 500, 403].includes(status)" href="/" :class="buttonVariants({ variant: 'default' })"> Go back home </a>
            </div>
        </div>
    </main>
</template>
