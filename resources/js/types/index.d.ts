import type { LucideIcon } from 'lucide-vue-next';
import type { Config } from 'ziggy-js';
import { Permission, Role } from './models';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon;
    isActive?: boolean;
    absolute?: boolean;
    permissions?: string[];
    prefetch?: boolean;
}

export type AppPageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    app: {
        name: string;
        environment: string;
    };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    toast: {
        type: string;
        title: string;
        message: string;
    } | null;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    last_online_at: string | null;
    roles: Role[];
    permissions: Permission[];
}

export type BreadcrumbItemType = BreadcrumbItem;

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}
export interface Paginated<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
}
