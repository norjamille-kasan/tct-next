<template>
    <Head title="Create Company" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="w-full items-center">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Create Company</CardTitle>
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
                        <Button :loading="form.processing" type="submit"> Save Company </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/vue3';

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
        title: 'Create',
        href: '/dashboard/companies/create',
    },
];

const form = useForm({
    name: '',
    ref_key: '',
});

const submit = () => {
    form.post(route('companies.store'));
};
</script>
