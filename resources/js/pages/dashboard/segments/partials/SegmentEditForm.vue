<template>
    <HeadlessModal ref="modal" v-slot="{ isOpen, setOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Edit Segment </DialogTitle>
                    <DialogDescription> Fill in the form to edit a segment </DialogDescription>
                </DialogHeader>
                <form id="editSegmentForm" @submit.prevent="submit" class="space-y-4">
                    <FormControl label="Name" required :errors="form.errors.name">
                        <Input v-model="form.name" type="text" required />
                    </FormControl>
                    <FormControl label="Description" :errors="form.errors.description">
                        <Textarea v-model="form.description" />
                    </FormControl>
                </form>
                <DialogFooter>
                    <Button type="button" variant="outline" @click="setOpen(false)">Cancel</Button>
                    <Button form="editSegmentForm" type="submit"> Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </HeadlessModal>
</template>

<script setup lang="ts">
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import FormControl from '@/components/FormControl.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Segment } from '@/types/models';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const modal = ref<any>(null);

const { segment } = defineProps<{
    segment: Segment | null;
}>();

const form = useForm({
    name: segment?.name || '',
    description: segment?.description || '',
});

const submit = () => {
    form.put(route('segments.update', { segment }), {
        onSuccess: () => {
            form.reset();
            modal.value.close();
        },
    });
};
</script>
