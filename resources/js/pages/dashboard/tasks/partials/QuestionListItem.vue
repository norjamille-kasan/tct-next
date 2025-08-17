<template>
    <div :id="`questionId${question.id}`" class="rounded-lg border border-dashed bg-secondary px-3 py-2">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-sm font-semibold text-muted-foreground">Question #{{ number + 1 }}</h1>
            </div>
            <div class="flex items-center">
                <ModalLink
                    :href="TaskQuestionController.edit({ task: question.task_id, question: question.id }).url"
                    :class="buttonVariants({ variant: 'ghost', size: 'icon' })"
                >
                    <EditIcon />
                </ModalLink>

                <Button @click="emit('delete', question.id)" variant="ghost" size="icon" class="text-destructive hover:text-destructive">
                    <Trash2Icon />
                </Button>
            </div>
        </div>
        <div class="space-y-1">
            <div class="grid gap-1">
                <p class="text-xs text-muted-foreground">Field type: {{ question.field_type }}</p>
                <p class="text-xs text-destructive">Required: {{ question.required ? 'Yes' : 'No' }}</p>
                <p class="text-sm">{{ question.message }}</p>
            </div>
            <div class="flex flex-wrap gap-1">
                <Badge variant="outline" class="bg-primary/10 text-primary" v-for="option in question.options" :key="option">
                    {{ option }}
                </Badge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TaskQuestionController from '@/actions/App/Http/Controllers/Dashboard/Tasks/TaskQuestionController';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Question } from '@/types/models';
import { EditIcon, Trash2Icon } from 'lucide-vue-next';
const props = defineProps<{
    question: Question;
    number: number;
}>();

const emit = defineEmits(['delete']);
</script>
