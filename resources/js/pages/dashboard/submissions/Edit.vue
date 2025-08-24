<script setup lang="ts">
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import CounterUp from '@/components/dashboard/submissions/CounterUp.vue';
import PauseButton from '@/components/dashboard/submissions/PauseButton.vue';
import QuestionInputItem from '@/components/dashboard/submissions/QuestionInputItem.vue';
import ResumeButton from '@/components/dashboard/submissions/ResumeButton.vue';
import SubmitButton from '@/components/dashboard/submissions/SubmitButton.vue';
import Heading from '@/components/Heading.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { SubmissionStatus } from '@/lib/constants';
import { type BreadcrumbItem } from '@/types';
import { Company, Segment, Submission, SubmissionAnswer, Task } from '@/types/models';
import { Head } from '@inertiajs/vue3';

const props = defineProps<{
    submission: Submission & { task: Task & { segment: Segment; company: Company } };
    submissionAnswers: SubmissionAnswer[];
    totalSecondsSpent: number;
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Submissions',
        href: SubmissionController.index().url,
    },
    {
        title: props.submission.ref_id,
        href: '#',
    },
    {
        title: 'Edit',
        href: SubmissionController.edit({ submission: props.submission.id }).url,
    },
];

defineOptions({
    layout: AppLayout,
});
</script>

<template>
    <Head title="Edit Submission" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl space-y-6">
            <Heading :title="props.submission.task.title" :description="props.submission.ref_id" />
            <div class="flex items-center justify-between rounded-lg border bg-muted/60 p-1">
                <div class="flex items-center gap-2">
                    <CounterUp :total-seconds-spent="props.totalSecondsSpent" :status="props.submission.status" />
                </div>
                <div class="flex items-center gap-2">
                    <template v-if="props.submission.status === SubmissionStatus.ONGOING">
                        <PauseButton :submission-id="props.submission.id" />
                    </template>
                    <template v-else-if="props.submission.status === SubmissionStatus.PAUSED">
                        <ResumeButton :submission-id="props.submission.id" />
                    </template>
                    <SubmitButton :submission-id="props.submission.id" />
                </div>
            </div>
            <div class="grid gap-4">
                <template v-for="submissionAnswer in props.submissionAnswers" :key="submissionAnswer.id">
                    <QuestionInputItem :status="props.submission.status" :submission-answer="submissionAnswer" />
                </template>
            </div>
        </div>
    </DashboardContent>
</template>
