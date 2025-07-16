<script setup lang="ts">
import InfoItem from '@/components/InfoItem.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company, Segment, Task } from '@/types/models';
import { Head } from '@inertiajs/vue3';
import QuestionCreateForm from '../partials/QuestionCreateForm.vue';

interface Props {
    task: Task & { company: Company; segment: Segment };
    field_types: string[];
}

const props = defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tasks',
        href: '/dashboard/tasks',
    },
    {
        title: props.task.title,
        href: `#`,
    },
    {
        title: 'Questions',
        href: `#`,
    },
];
</script>

<template>
    <Head title="Questions" />
    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="grid gap-4 md:grid-cols-[8fr_4fr]">
            <div>
                <QuestionCreateForm :field-types="props.field_types" :task-id="props.task.id" />
            </div>
            <div>
                <Card>
                    <CardHeader class="border-b">
                        <CardTitle>
                            {{ props.task.title }}
                        </CardTitle>
                        <CardDescription>
                            {{ props.task.ref_key }}
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <InfoItem title="Company">
                            {{ props.task.company.name }}
                        </InfoItem>
                        <InfoItem title="Segment">
                            {{ props.task.segment.name }}
                        </InfoItem>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
