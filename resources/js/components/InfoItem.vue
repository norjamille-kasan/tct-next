<template>
    <div class="w-full">
        <Label v-if="title" class="text-muted-foreground">
            {{ title }}
        </Label>
        <div class="mt-1">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Label } from './ui/label';

defineProps<{
    title?: string;
}>();
</script>
