<script setup lang="ts">
import TaskQuestionController from '@/actions/App/Http/Controllers/Dashboard/Tasks/TaskQuestionController';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Company, Question, Segment, Task } from '@/types/models';
import { vAutoAnimate } from '@formkit/auto-animate';
import { Head, router } from '@inertiajs/vue3';
import { useConfirmDialog } from '@vueuse/core';
import { BuildingIcon, TagsIcon } from 'lucide-vue-next';
import QuestionCreateForm from '../partials/QuestionCreateForm.vue';
import QuestionListItem from '../partials/QuestionListItem.vue';

defineOptions({
    layout: AppLayout,
});
interface Props {
    task: Task & { company: Company; segment: Segment };
    fieldTypes: string[];
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

const deleteQuestionConfirmation = useConfirmDialog();

const deleteQuestion = async (questionId: number) => {
    const { isCanceled } = await deleteQuestionConfirmation.reveal();
    if (!isCanceled) {
        router.delete(TaskQuestionController.destroy({ task: props.task.id, question: questionId }).url);
    }
};
</script>

<template>
    <Head title="Questions" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <Card class="ring-4 ring-muted/80">
            <CardHeader>
                <CardTitle> <span class="text-muted-foreground">Task/</span> {{ props.task.title }} </CardTitle>
                <CardDescription>
                    <Badge variant="secondary">
                        <BuildingIcon />
                        {{ props.task.company.name }}
                    </Badge>
                    <Badge variant="secondary" class="ml-1">
                        <TagsIcon />
                        {{ props.task.segment.name }}
                    </Badge>
                </CardDescription>
                <CardAction>
                    <QuestionCreateForm :field-types="props.fieldTypes" :task-id="props.task.id" />
                </CardAction>
            </CardHeader>
            <CardContent>
                <div v-auto-animate class="space-y-2">
                    <QuestionListItem
                        @delete="deleteQuestion($event)"
                        v-for="(question, index) in props.questions"
                        :key="question.id"
                        :number="index"
                        :question="question"
                    />
                </div>
            </CardContent>
        </Card>
        <ConfirmDialog
            v-model="deleteQuestionConfirmation.isRevealed.value"
            title="Delete Question"
            description="Are you sure you want to delete this question?"
            @cancel="deleteQuestionConfirmation.cancel"
            @confirm="deleteQuestionConfirmation.confirm"
        />
    </DashboardContent>
</template>
