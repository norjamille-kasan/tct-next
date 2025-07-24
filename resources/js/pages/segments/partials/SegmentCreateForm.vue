<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/vue3';
import { PlusIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const isOpen = ref(false);

const form = useForm({
    name: '',
    description: '',
});

const submit = () => {
    form.post(route('segments.store'), {
        onSuccess: () => {
            form.reset();
            isOpen.value = false;
        },
    });
};
</script>

<template>
    <Dialog v-model:open="isOpen">
        <DialogTrigger as-child>
            <Button>
                <PlusIcon />
                Add Segment
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Create Segment </DialogTitle>
                <DialogDescription> Fill in the form to create a new segment </DialogDescription>
            </DialogHeader>
            <form id="createSegmentForm" @submit.prevent="submit" class="space-y-4">
                <FormControl label="Name" required :errors="form.errors.name">
                    <Input v-model="form.name" type="text" required />
                </FormControl>
                <FormControl label="Description" :errors="form.errors.description">
                    <Textarea v-model="form.description" />
                </FormControl>
            </form>
            <DialogFooter>
                <Button type="button" variant="outline" @click="isOpen = false">Cancel</Button>
                <Button form="createSegmentForm" type="submit" :loading="form.processing" :disabled="form.processing"> Save </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
