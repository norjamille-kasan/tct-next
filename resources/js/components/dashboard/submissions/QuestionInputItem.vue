<template>
    <FormControl :label="submissionAnswer.original_question.message">
        <Textarea v-model="answer" v-if="submissionAnswer.original_question.field_type === FieldType.LONG_TEXT" />
        <Input v-model="answer" v-else-if="submissionAnswer.original_question.field_type === FieldType.TEXT" />
        <Select v-model="answer" v-else-if="submissionAnswer.original_question.field_type === FieldType.SINGLE_SELECT">
            <SelectTrigger class="w-full">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem
                    v-if="submissionAnswer.original_question.options"
                    v-for="option in submissionAnswer.original_question.options"
                    :key="option"
                    :value="option"
                >
                    {{ option }}
                </SelectItem>
            </SelectContent>
        </Select>
    </FormControl>
</template>

<script setup lang="ts">
import SubmissionAnswerController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionAnswerController';
import FormControl from '@/components/FormControl.vue';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FieldType } from '@/lib/constants';
import { SubmissionAnswer } from '@/types/models';
import { router } from '@inertiajs/vue3';
import { watchDebounced } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps<{
    submissionAnswer: SubmissionAnswer;
}>();

const answer = ref(props.submissionAnswer.value);

watchDebounced(
    answer,
    (value) => {
        router.put(
            SubmissionAnswerController.update({ submission: props.submissionAnswer.submission_id, submissionAnswer: props.submissionAnswer.id }).url,
            { answer: value },
            {
                only: ['submissionAnswer'],
                preserveScroll: true,
            },
        );
    },
    { debounce: 1000 },
);
</script>
