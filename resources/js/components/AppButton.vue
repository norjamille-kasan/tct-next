<template>
    <Button :variant="variant" :size="size" :loading="loading" :class="class">
        <slot />
    </Button>
</template>

<script setup lang="ts">
import { Button, ButtonVariants } from '@/components/ui/button';
import { PrimitiveProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
    loading: false,
});
</script>
