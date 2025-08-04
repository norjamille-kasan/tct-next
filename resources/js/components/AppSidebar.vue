<script setup lang="ts">
import CompanyController from '@/actions/App/Http/Controllers/Dashboard/Companies/CompanyController';
import SegmentController from '@/actions/App/Http/Controllers/Dashboard/Segments/SegmentController';
import SubmissionController from '@/actions/App/Http/Controllers/Dashboard/Submissions/SubmissionController';
import TaskController from '@/actions/App/Http/Controllers/Dashboard/Tasks/TaskController';
import DashboardController from '@/actions/App/Http/Controllers/DashboardController';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { BanknoteIcon, Building2Icon, FileSlidersIcon, LayoutGrid, ListTodo, SquareActivity, TagsIcon } from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';

const platformNavItem: NavItem[] = [
    {
        title: 'Dashboard',
        href: DashboardController.url(),
        icon: LayoutGrid,
        absolute: true,
    },
    {
        title: 'Submissions',
        href: SubmissionController.index().url,
        icon: ListTodo,
        absolute: false,
        permissions: ['view:tasks'],
    },
];

const manageNavItem: NavItem[] = [
    {
        title: 'Tasks',
        href: TaskController.index().url,
        icon: ListTodo,
        absolute: false,
        permissions: ['view:tasks'],
    },
    {
        title: 'Companies',
        href: CompanyController.index().url,
        icon: Building2Icon,
        absolute: false,
        permissions: ['view:companies'],
    },
    {
        title: 'Segments',
        href: SegmentController.index().url,
        icon: TagsIcon,

        absolute: false,
    },
    {
        title: 'Billing',
        href: '#',
        icon: BanknoteIcon,
        absolute: false,
    },
];

const toolsNavItem: NavItem[] = [
    {
        title: 'Surveys',
        href: '#',
        icon: FileSlidersIcon,
        absolute: false,
    },
    {
        title: 'Health Check',
        href: '#',
        icon: SquareActivity,
        absolute: false,
    },
];
</script>

<template>
    <Sidebar collapsible="icon">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="DashboardController.url()">
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
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
