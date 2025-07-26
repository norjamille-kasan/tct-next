<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company, Question, Segment, Task } from '@/types/models';
import { vAutoAnimate } from '@formkit/auto-animate';
import { Head } from '@inertiajs/vue3';
import { BuildingIcon } from 'lucide-vue-next';
import QuestionCreateForm from '../partials/QuestionCreateForm.vue';
import QuestionListItem from '../partials/QuestionListItem.vue';
interface Props {
    task: Task & { company: Company; segment: Segment };
    field_types: string[];
    questions: Question[];
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
        <Card>
            <CardHeader>
                <CardTitle> <span class="text-muted-foreground">Task/</span> {{ props.task.title }} </CardTitle>
                <CardDescription>
                    <Badge variant="secondary">
                        <BuildingIcon />
                        {{ props.task.company.name }}
                    </Badge>
                    <Badge variant="secondary" class="ml-1">
                        <BuildingIcon />
                        {{ props.task.segment.name }}
                    </Badge>
                </CardDescription>
                <CardAction>
                    <QuestionCreateForm :field-types="props.field_types" :task-id="props.task.id" />
                </CardAction>
            </CardHeader>
            <CardContent>
                <div v-auto-animate class="space-y-2">
                    <QuestionListItem v-for="(question, index) in props.questions" :key="question.id" :number="index" :question="question" />
                </div>
            </CardContent>
        </Card>
    </AppLayout>
</template>
