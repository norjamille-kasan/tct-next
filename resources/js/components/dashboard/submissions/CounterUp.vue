<template>
    <div class="flex items-center gap-2 px-2 font-mono">
        <Clock1 class="size-5" />
        <span>{{ stopwatch.hours }} hrs </span>
        <span>{{ stopwatch.minutes }} mins</span>
        <span>{{ stopwatch.seconds }} seconds</span>
    </div>
</template>

<script setup lang="ts">
import { SubmissionStatus } from '@/lib/constants';
import { Clock1 } from 'lucide-vue-next';
import { watch } from 'vue';
import { useStopwatch } from 'vue-timer-hook';

const props = defineProps<{
    status: string;
    totalSecondsSpent: number;
}>();
const stopwatch = useStopwatch(Math.floor(props.totalSecondsSpent), props.status === SubmissionStatus.ONGOING);

watch(
    () => props.status,
    () => {
        if (props.status === 'ONGOING') {
            stopwatch.start();
        } else {
            stopwatch.pause();
        }
    },
);
</script>
