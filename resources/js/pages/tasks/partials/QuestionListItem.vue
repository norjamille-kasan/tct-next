<template>
    <div :id="`questionId${question.id}`" class="rounded-lg border border-dashed bg-secondary px-3 py-2">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-sm font-semibold text-muted-foreground">Question #{{ number + 1 }}</h1>
            </div>
            <div class="flex items-center gap-2">
                <Button variant="outline" size="icon" class="text-destructive hover:text-destructive">
                    <Trash2Icon />
                </Button>
            </div>
        </div>
        <div class="space-y-1">
            <div class="grid">
                <p class="text-sm">{{ question.message }}</p>
                <p class="text-sm text-muted-foreground">Field type: {{ question.field_type }}</p>
            </div>
            <div class="flex gap-1">
                <Badge v-for="option in question.options" :key="option">
                    {{ option }}
                </Badge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Question } from '@/types/models';
import { Trash2Icon } from 'lucide-vue-next';
const props = defineProps<{
    question: Question;
    number: number;
}>();
</script>
