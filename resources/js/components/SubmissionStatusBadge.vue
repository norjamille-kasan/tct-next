<script setup lang="ts">
import { getSubmissionStatusColor, SubmissionStatus } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

defineProps<{
    status: SubmissionStatus;
}>();
</script>

<template>
    <Badge variant="secondary">
        <div :class="cn('size-2 rounded-full', getSubmissionStatusColor[status as SubmissionStatus])"></div>
        {{ status }}
    </Badge>
</template>
