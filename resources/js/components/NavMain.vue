<script setup lang="ts">
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { usePermissions } from '@/composables/usePermissions';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';

defineProps<{
    items: NavItem[];
    label?: string;
}>();

const page = usePage();
const { userCanAll } = usePermissions();
</script>

<template>
    <SidebarGroup class="px-2 py-0">
        <SidebarGroupLabel v-if="label">{{ label }}</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
                <SidebarMenuButton
                    v-if="!item.permissions || userCanAll(item.permissions)"
                    as-child
                    :is-active="item.absolute ? item.href === page.url : page.url.startsWith(item.href)"
                    :tooltip="item.title"
                    class="border border-transparent data-[active=true]:border-primary/30 data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
                >
                    <Link :href="item.href" :prefetch="item.prefetch">
                        <component :is="item.icon" />
                        <span>{{ item.title }}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarGroup>
</template>
