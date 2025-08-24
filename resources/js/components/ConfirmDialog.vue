<template>
    <AlertDialog v-model:open="model">
        <AlertDialogContent class="rounded-xl ring-4 ring-muted/60">
            <AlertDialogHeader>
                <AlertDialogTitle>
                    {{ props.title || 'Are you sure you want to proceed with this action?' }}
                </AlertDialogTitle>
                <AlertDialogDescription>
                    {{ props.description || 'This action cannot be undone. Please confirm to continue.' }}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="emit('cancel')">
                    {{ props.cancelText || 'Cancel' }}
                </AlertDialogCancel>
                <AlertDialogAction @click="emit('confirm')">
                    {{ props.confirmText || 'Confirm' }}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { watch } from 'vue';

interface Props {
    title?: string;
    description?: string;
    cancelText?: string;
    confirmText?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['cancel', 'confirm']);

const model = defineModel<boolean>();

watch(model, (value) => {
    if (model.value === true) {
        console.log('xded');
    }
});
</script>
