<template>
    <Head title="Create Company" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="mx-auto mt-4 w-full max-w-4xl items-center">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Create Company</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-6">
                            <div class="grid gap-2">
                                <Label for="name">Company Name</Label>
                                <Input v-model="form.name" type="name" id="name" name="name" />
                                <InputError :message="form.errors.name" />
                            </div>
                            <div class="grid gap-2">
                                <Label for="ref_key">Reference Key</Label>
                                <Input v-model="form.ref_key" type="name" id="ref_key" name="ref_key" />
                                <p class="text-sm text-muted-foreground">
                                    Leave blank to generate a random key (it is use for internal/development reference)
                                </p>
                                <InputError :message="form.errors.ref_key" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button :loading="form.processing" type="submit"> Save Company </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/vue3';

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
