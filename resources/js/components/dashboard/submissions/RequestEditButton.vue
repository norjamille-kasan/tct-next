<template>
    <AlertDialog v-model:open="isOpen">
        <AlertDialogTrigger as-child>
            <Button :disabled="submitting">
                <Loader v-if="submitting" class="animate-spin" />
                <EditIcon v-else />
                Request to edit
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="rounded-xl ring-4 ring-muted/80">
            <AlertDialogHeader>
                <AlertDialogTitle> Are you sure you want to continue? </AlertDialogTitle>
                <AlertDialogDescription> Edit request needs approval. </AlertDialogDescription>
            </AlertDialogHeader>
            <form action="">
                <FormControl label="Reason" required :error="form.errors.reason">
                    <Textarea rows="4" v-model="form.reason" />
                </FormControl>
            </form>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button @click="submit"> Submit Request </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/vue3';
import { EditIcon, Loader } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps<{
    submissionId: number;
}>();

const isOpen = ref(false);
const submitting = ref(false);

const form = useForm({
    reason: '',
});

const submit = () => {};
</script>
