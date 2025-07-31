<template>
    <Head title="Edit Task" />
    <DashboardContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl">
            <form id="createTaskForm" @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Task</CardTitle>
                        <CardDescription> Use this form to edit a task. Ensure you fill in all required fields. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-6 sm:grid-cols-2">
                            <FormControl label="Company" :error="form.errors.company_id">
                                <Input :default-value="task.company.name" type="text" readonly disabled />
                            </FormControl>
                            <FormControl label="Segment" :error="form.errors.segment_id">
                                <Select v-model:model-value="form.segment_id">
                                    <SelectTrigger class="w-full">
                                        <SelectValue placeholder="Select Segment" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="segment in task.company.segments" :value="segment.id">
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
                        <Button type="submit" form="createTaskForm"> Save Changes </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </DashboardContent>
</template>

<script setup lang="ts">
import TaskController from '@/actions/App/Http/Controllers/TaskController';
import DashboardContent from '@/components/dashboard/DashboardContent.vue';
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/AppLayout.vue';
import { Company, Segment, Task } from '@/types/models';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineOptions({
    layout: AppLayout,
});
interface Props {
    task: Task & { company: Company & { segments: Segment[] } };
    computation_categories: string[];
}

const { task } = defineProps<Props>();

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
        title: task.title,
        href: `#`,
    },
    {
        title: 'Edit',
        href: '#',
    },
];

type FormData = {
    company_id: number | null;
    segment_id: number | null;
    ref_key: string | null;
    title: string;
    description: string;
    computation_category: string;
};

const form = useForm<FormData>({
    company_id: task.company_id,
    segment_id: task.segment_id,
    ref_key: task.ref_key,
    title: task.title,
    description: task.description || '',
    computation_category: task.computation_category || '',
});

const submit = () => {
    form.submit(TaskController.update({ task }));
};
</script>
