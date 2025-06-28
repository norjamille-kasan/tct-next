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
                            <div class="flex flex-col gap-2">
                                <Label for="name">Company Name</Label>
                                <Input v-model="form.name" type="name" id="name" name="name" />
                                <InputError :message="form.errors.name" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <Label for="ref_key">Reference Key</Label>
                                <Input v-model="form.ref_key" type="name" id="ref_key" name="ref_key" />
                                <p class="text-xs text-muted-foreground">
                                    Leave blank to generate a random key (it is use for internal/development reference)
                                </p>
                                <InputError :message="form.errors.ref_key" />
                            </div>
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
import InputError from '@/components/InputError.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
