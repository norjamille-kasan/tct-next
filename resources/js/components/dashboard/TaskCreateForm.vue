<template>
    <Card>
        <CardHeader>
            <CardTitle>Create Task</CardTitle>
            <CardDescription> Use this form to create a new task. Ensure you fill in all required fields. </CardDescription>
        </CardHeader>
        <CardContent> </CardContent>
    </Card>
</template>

<script setup lang="ts">
import { Company, Segment } from '@/types/models';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface Props {
    companies: Company[];
    segments: Segment[];
}

const props = defineProps<Props>();
</script>
