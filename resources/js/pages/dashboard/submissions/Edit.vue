<script setup lang="ts">
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company, Segment, Submission, Task } from '@/types/models';
import { Head } from '@inertiajs/vue3';

const props = defineProps<{
    submission: Submission & { task: Task & { segment: Segment; company: Company } };
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
        <Card class="ring-4 ring-muted/60">
            <CardHeader>
                <CardTitle>
                    {{ props.submission.task.title }}
                </CardTitle>
                <CardDescription>
                    {{ props.submission.ref_id }}
                </CardDescription>
            </CardHeader>
        </Card>
    </DashboardContent>
</template>
