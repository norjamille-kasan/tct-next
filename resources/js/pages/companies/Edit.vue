<template>
    <Head title="Edit Company" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-7xl space-y-6">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Company</CardTitle>
                        <CardDescription> Use this form to edit a company. Ensure you fill in all required fields. </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-6 md:grid-cols-2">
                            <FormControl label="Company" :error="form.errors.name">
                                <Input v-model="form.name" type="text" name="name" />
                            </FormControl>
                            <FormControl
                                label="Reference Key"
                                :error="form.errors.ref_key"
                                help="Leave blank to generate a random key (it is used for internal/development reference)"
                            >
                                <Input v-model="form.ref_key" type="text" name="ref_key" />
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardFooter class="gap-2">
                        <Link :href="route('companies.index')" :class="buttonVariants({ variant: 'outline' })" :disabled="form.processing">
                            Return
                        </Link>
                        <Button :loading="form.processing" type="submit"> Save Changes </Button>
                    </CardFooter>
                </Card>
            </form>
            <div class="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Segments</CardTitle>
                        <CardDescription> View the segments associated with this company. </CardDescription>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="flex items-center justify-between gap-2">
                            <SegmentCreateForm :company />
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Last Modified</TableHead>
                                    <TableHead class="text-right"> </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow v-for="segment in segments" :key="segment.id">
                                    <TableCell class="font-medium">
                                        {{ segment.name }}
                                    </TableCell>
                                    <TableCell>
                                        {{ formatDate(new Date(segment.updated_at), ' YYYY MMM DD h:mm a') }}
                                    </TableCell>
                                    <TableCell class="text-right">
                                        <div class="-my-1 flex justify-end space-x-1">
                                            <ModalLink
                                                :href="route('companies.segments.edit', { company, segment })"
                                                :class="buttonVariants({ variant: 'outline', size: 'icon' })"
                                            >
                                                <EditIcon />
                                            </ModalLink>
                                            <Button @click="deleteSegment(segment.id)" variant="outline" size="icon">
                                                <TrashIcon class="text-destructive" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableEmpty :colspan="3" v-if="segments.length === 0"> No companies found. </TableEmpty>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
        <ConfirmDialog
            v-model="deleteSegmentConfirmation.isRevealed.value"
            title="Delete Segment"
            description="Are you sure you want to delete this segment?"
            @cancel="deleteSegmentConfirmation.cancel"
            @confirm="deleteSegmentConfirmation.confirm"
        />
    </AppLayout>
</template>

<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import ConfirmDialog from '@/components/ConfirmDialog.vue';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import SegmentCreateForm from '@/pages/companies/partials/SegmentCreateForm.vue';
import { type BreadcrumbItem } from '@/types';
import { Company, Segment } from '@/types/models';
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { EditIcon, TrashIcon } from 'lucide-vue-next';

interface Props {
    company: Company;
    segments: Segment[];
}

const { company, segments } = defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Companies',
        href: '/dashboard/companies',
    },
    {
        title: company.name,
        href: '#',
    },
    {
        title: 'Edit',
        href: `/dashboard/companies/${company.id}/edit`,
    },
];

const form = useForm({
    name: company.name,
    ref_key: company.ref_key,
});

const submit = () => {
    form.put(route('companies.update', { company }), {
        only: ['company'],
    });
};

const deleteSegmentConfirmation = useConfirmDialog();

const deleteSegment = async (id: number) => {
    const { isCanceled } = await deleteSegmentConfirmation.reveal();
    if (!isCanceled) {
        router.delete(route('companies.segments.destroy', { company, segment: id }), {
            only: ['segments'],
        });
    }
};
</script>
