<template>
    <form action="">
        <Card class="mx-auto max-w-7xl">
            <CardHeader>
                <CardTitle>Create Task</CardTitle>
                <CardDescription> Use this form to create a new task. Ensure you fill in all required fields. </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="grid gap-6 md:grid-cols-2">
                    <FormControl label="Project" :error="form.errors.company_id">
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
                    <FormControl class="col-span-full" label="Title" :error="form.errors.title">
                        <Input type="text" name="form.errors.title" />
                    </FormControl>
                    <FormControl class="col-span-full" label="Description" :error="form.errors.description">
                        <Textarea type="text" name="form.errors.description" />
                    </FormControl>
                </div>
            </CardContent>
        </Card>
    </form>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ApiResponse } from '@/types';
import { Company, Segment } from '@/types/models';
import { useForm } from '@inertiajs/vue3';
import { ofetch } from 'ofetch';
import { ref, watch } from 'vue';
import FormControl from '../FormControl.vue';
import { Textarea } from '../ui/textarea';

interface Props {
    companies: Company[];
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
