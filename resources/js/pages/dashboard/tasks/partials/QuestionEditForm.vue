<script setup lang="ts">
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import TaskQuestionController from '@/actions/App/Http/Controllers/TaskQuestionController';
import FormControl from '@/components/FormControl.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input';
import { Textarea } from '@/components/ui/textarea';
import { WITH_OPTION_INPUT_TYPES } from '@/lib/constants';
import { Question } from '@/types/models';
import { useForm } from '@inertiajs/vue3';
import { Loader2 } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps<{
    fieldTypes: string[];
    question: Question;
}>();

const modal = ref<any>(null);

type Form = {
    message: string;
    field_type: string;
    options: string[];
    valid_input: string;
    position: number;
};

const form = useForm<Form>({
    message: props.question.message || '',
    field_type: props.question.field_type || '',
    options: props.question.options || [],
    valid_input: props.question.valid_input || '',
    position: props.question.position || 0,
});

const submit = () => {
    form.submit(TaskQuestionController.update({ task: props.question.task_id, question: props.question.id }), {
        only: ['questions'],
        onSuccess: () => {
            form.reset();
            modal.value.close();
        },
    });
};
</script>

<template>
    <HeadlessModal ref="modal" v-slot="{ isOpen, setOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogContent class="sm:min-w-2xl">
                <DialogHeader>
                    <DialogTitle> Edit Question </DialogTitle>
                    <DialogDescription> Click 'Save Changes' to update the question </DialogDescription>
                </DialogHeader>
                <form id="editQuestionForm" @submit.prevent="submit" class="grid gap-4 sm:grid-cols-2">
                    <FormControl label="Question" class="col-span-full" required :errors="form.errors.message">
                        <Textarea v-model="form.message" type="message" required />
                    </FormControl>
                    <FormControl class="col-span-full" label="Field Type" required :errors="form.errors.field_type">
                        <Select v-model="form.field_type">
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem v-for="fieldType in fieldTypes" :key="fieldType" :value="fieldType">
                                    {{ fieldType }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormControl
                        v-if="WITH_OPTION_INPUT_TYPES.includes(form.field_type)"
                        class="col-span-full"
                        label="Options"
                        help="Separate options with a comma"
                    >
                        <TagsInput v-model="form.options" class="bg-muted/40">
                            <TagsInputItem v-for="item in form.options" :key="item" :value="item">
                                <TagsInputItemText />
                                <TagsInputItemDelete />
                            </TagsInputItem>
                            <TagsInputInput placeholder="Add option..." />
                        </TagsInput>
                    </FormControl>
                    <FormControl label="Valid Input" class="col-span-full" :errors="form.errors.valid_input">
                        <Input v-if="!WITH_OPTION_INPUT_TYPES.includes(form.field_type)" v-model="form.valid_input" type="message" />
                        <Select v-else v-model="form.valid_input">
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem v-for="option in form.options" :key="option" :value="option">
                                    {{ option }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </FormControl>
                </form>
                <DialogFooter>
                    <Button type="button" variant="outline" @click="setOpen(false)">Cancel</Button>
                    <Button form="editQuestionForm" type="submit" :disabled="form.processing">
                        <Loader2 v-if="form.processing" class="size-4 animate-spin" />
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </HeadlessModal>
</template>
