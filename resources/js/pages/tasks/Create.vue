<template>
    <InertiaModal v-slot="{ setOpen, isOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogContent class="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Create Task</DialogTitle>
                    <DialogDescription> Use this form to create a new task. Ensure you fill in all required fields. </DialogDescription>
                </DialogHeader>
                <form id="createTaskForm">
                    <div class="grid gap-6">
                        <FormControl label="Company" :error="form.errors.company_id">
                            <Select v-model:model-value="form.company_id">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Select Company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="company in companies" :value="company.id">
                                        {{ company.name }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormControl label="Segment" :error="form.errors.segment_id">
                            <Select v-model:model-value="form.segment_id">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Select Segment" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectLabel v-if="segments.length === 0"> No segments available </SelectLabel>
                                    <SelectItem v-for="segment in segments" :value="segment.id">
                                        {{ segment.name }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormControl label="Title" :error="form.errors.title">
                            <Input type="text" name="form.errors.title" />
                        </FormControl>
                        <FormControl label="Description" :error="form.errors.description">
                            <Textarea :rows="4" type="text" name="form.errors.description" />
                        </FormControl>
                        <FormControl label="Computation Category" :error="form.errors.computation_category">
                            <Select v-model:model-value="form.computation_category">
                                <SelectTrigger class="w-full">
                                    <SelectValue placeholder="Select Computation Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem v-for="computation_category in computation_categories" :value="computation_category">
                                        {{ computation_category }}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                    </div>
                </form>
                <DialogFooter>
                    <Button type="button" variant="outline" @click="setOpen(false)"> Cancel </Button>
                    <Button type="submit" form="createTaskForm" :loading="form.processing" :disabled="form.processing"> Create Task </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </InertiaModal>
</template>

<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import InertiaModal from '@/components/InertiaModal.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ApiResponse } from '@/types';
import { Company, Segment } from '@/types/models';
import { useForm } from '@inertiajs/vue3';
import { ofetch } from 'ofetch';
import { ref, watch } from 'vue';

interface Props {
    companies: Company[];
    computation_categories: string[];
}

defineProps<Props>();

type FormData = {
    company_id: number | null;
    segment_id: number | null;
    ref_key: string | null;
    title: string;
    description: string;
    computation_category: string;
};

const form = useForm<FormData>({
    company_id: null,
    segment_id: null,
    ref_key: null,
    title: '',
    description: '',
    computation_category: '',
});

const segments = ref<Segment[]>([]);

watch(
    () => form.company_id,
    async (newValue) => {
        try {
            form.segment_id = null; // Reset segment_id when company changes
            const res = await ofetch<ApiResponse<Segment[]>>(`/api/segments?filter[company_id]=${newValue}`);
            segments.value = res.data;
        } catch (error) {
            console.error('Error fetching segments:', error);
        }
    },
);
</script>
