<template>
    <AlertDialog v-model:open="model">
        <AlertDialogContent>
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
import WarningSound from '@/assets/warning-sound.mp3';
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
import { useSound } from '@vueuse/sound';
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

const sound = useSound(WarningSound, {
    volume: 0.1,
});

watch(model, (value) => {
    if (model.value === true) {
        sound.play();
        console.log('xded');
    }
});
</script>
