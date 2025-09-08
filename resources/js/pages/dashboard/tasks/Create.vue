<script setup lang="ts">
import TaskController from '@/actions/App/Http/Controllers/Dashboard/Tasks/TaskController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/AppLayout.vue';
import { Company, Segment } from '@/types/models';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

defineOptions({
    layout: AppLayout,
});
const breadcrumbs = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Tasks',
        href: '/dashboard/tasks',
    },
    {
        title: 'Create',
        href: '/dashboard/tasks/create',
    },
];

interface Props {
    companies: Array<Company & { segments: Segment[] }>;
    computation_categories: string[];
}

const props = defineProps<Props>();

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
        segments.value = props.companies.find((company) => company.id === newValue)?.segments || [];
    },
);

const submit = () => {
    form.submit(TaskController.store());
};
</script>

<template>
    <Head title="Create Task" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl">
            <form id="createTaskForm" @submit.prevent="submit">
                <Card class="ring-4 ring-muted/80">
                    <CardHeader>
                        <CardTitle>Create Task</CardTitle>
                        <CardDescription>Fill in the details to create a new task.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-6 sm:grid-cols-2">
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
                            <FormControl class="col-span-full" label="Title" :error="form.errors.title">
                                <Input v-model="form.title" type="text" name="form.errors.title" />
                            </FormControl>
                            <FormControl class="col-span-full" label="Description" :error="form.errors.description">
                                <Textarea :rows="6" type="text" v-model="form.description" name="form.errors.description" />
                            </FormControl>
                            <FormControl class="col-span-full" label="Computation Category" :error="form.errors.computation_category">
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
                    </CardContent>
                    <CardFooter class="gap-2">
                        <Link :href="TaskController.index()" :class="buttonVariants({ variant: 'outline' })"> Return </Link>
                        <Button type="submit" form="createTaskForm"> Save Task </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </DashboardContent>
</template>
