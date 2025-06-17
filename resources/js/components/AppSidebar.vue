<script setup lang="ts">
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { BanknoteIcon, Building2Icon, FileSlidersIcon, LayoutGrid, ListTodo, SquareActivity } from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';

const platformNavItem: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Tasks',
        href: '#',
        icon: ListTodo,
    },
];

const manageNavItem: NavItem[] = [
    {
        title: 'Companies',
        href: '#',
        icon: Building2Icon,
    },
    {
        title: 'Billing',
        href: '#',
        icon: BanknoteIcon,
    },
];

const toolsNavItem: NavItem[] = [
    {
        title: 'Surveys',
        href: '#',
        icon: FileSlidersIcon,
    },
    {
        title: 'Health Check',
        href: '#',
        icon: SquareActivity,
    },
];
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="route('dashboard')">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain label="Platform" :items="platformNavItem" />
            <NavMain label="Manage" :items="manageNavItem" />
            <NavMain label="Tools" :items="toolsNavItem" />
        </SidebarContent>

        <SidebarFooter>
            <!-- <NavFooter :items="footerNavItems" /> -->
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
