<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';

// Components
import InputError from '@/components/InputError.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Company } from '@/types/models';

const { company } = defineProps<{
    company: Company;
}>();

const form = useForm({
    name: '',
});

const deleteUser = (e: Event) => {
    e.preventDefault();

    form.delete(route('companies.destroy', { company }), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    form.clearErrors();
    form.reset();
};
</script>

<template>
    <div class="space-y-6">
        <Card class="border-destructive">
            <CardHeader>
                <CardTitle>Delete Company</CardTitle>
                <CardDescription> Once your company is deleted, all of its resources and data will also be permanently deleted. </CardDescription>
            </CardHeader>
            <CardContent>
                <div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                    <div class="relative space-y-0.5 text-red-600 dark:text-red-100">
                        <p class="font-medium">Warning</p>
                        <p class="text-sm">Please proceed with caution, this cannot be undone.</p>
                    </div>
                    <Dialog>
                        <DialogTrigger as-child>
                            <Button variant="destructive">Delete account</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <form class="space-y-6" @submit="deleteUser">
                                <DialogHeader class="space-y-3">
                                    <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                                    <DialogDescription>
                                        Once your account is deleted, all of its resources and data will also be permanently deleted.
                                    </DialogDescription>
                                </DialogHeader>

                                <div class="grid gap-2">
                                    <Label for="name" class="sr-only">Company Name</Label>
                                    <Input id="name" type="text" name="name" v-model="form.name" placeholder="Enter company name" />
                                    <InputError :message="form.errors.name" />
                                </div>

                                <DialogFooter class="gap-2">
                                    <DialogClose as-child>
                                        <Button variant="secondary" @click="closeModal"> Cancel </Button>
                                    </DialogClose>

                                    <Button type="submit" variant="destructive" :disabled="form.processing"> Delete Company </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
