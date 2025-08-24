<template>
    <AlertDialog v-model:open="isOpen">
        <AlertDialogTrigger as-child>
            <Button variant="outline">Pause</Button>
        </AlertDialogTrigger>
        <AlertDialogContent class="rounded-xl ring-4 ring-muted/60">
            <AlertDialogHeader>
                <AlertDialogTitle> Are you sure you want to continue? </AlertDialogTitle>
                <AlertDialogDescription> You're about to pause this submission. </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button variant="destructive" @click="submit"> Continue </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>

<script setup lang="ts">
import SubmissionStatusController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionStatusController';
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
import { SubmissionStatus } from '@/lib/constants';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps<{
    submissionId: number;
}>();

const isOpen = ref(false);

const submit = () => {
    router.put(
        SubmissionStatusController.url(props.submissionId),
        { status: SubmissionStatus.PAUSED },
        {
            only: ['submission', 'totalSecondsSpent'],
            onSuccess: () => (isOpen.value = false),
            preserveScroll: true,
        },
    );
};
</script>
