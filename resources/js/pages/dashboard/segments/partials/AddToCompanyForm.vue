<script setup lang="ts">
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Company } from '@/types/models';
import { router } from '@inertiajs/vue3';
import { PlusIcon } from 'lucide-vue-next';
import { inject, ref } from 'vue';

const props = defineProps<{
    segmentId: number;
    addedCompanies: Company[];
}>();

const companies = inject<Company[]>('companies');

const addedIds = props.addedCompanies.map((company) => company.id);

const open = ref(false);

const selectCompany = (companyId: number) => {
    if (props.addedCompanies.find((company) => company.id === companyId)) {
        return;
    }
    router.post(
        route('segments.attach-company', { segment: props.segmentId }),
        { company_id: companyId },
        {
            onSuccess: () => {
                open.value = false;
            },
        },
    );
};
</script>

<template>
    <Popover v-model:open="open">
        <PopoverTrigger as-child>
            <button type="button" class="text-muted-foreground">
                <PlusIcon class="size-5" />
            </button>
        </PopoverTrigger>
        <PopoverContent class="p-0" side="right" align="start">
            <Command>
                <CommandInput placeholder="Select Company" />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                        <CommandItem v-for="company in companies" :key="company.id" :value="company.name" @select="selectCompany(company.id)">
                            {{ company.name }} <span class="ml-auto text-xs">{{ addedIds.includes(company.id) ? '(added)' : '' }}</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
</template>
