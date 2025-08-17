<script setup lang="ts">
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Submission } from '@/types/models';
import { Head } from '@inertiajs/vue3';

const props = defineProps<{
    submission: Submission;
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
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio sit repudiandae magnam, esse porro dolorem ab rem voluptatem
            eos aliquid totam ullam, quaerat error ratione nihil id atque ipsam?
        </div>
    </DashboardContent>
</template>
