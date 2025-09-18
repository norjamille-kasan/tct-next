import { AppPageProps } from '@/types';
import { usePage } from '@inertiajs/vue3';

export const usePermissions = () => {
    const { auth } = usePage<AppPageProps>().props;

    const isSuperAdmin = () => auth?.user.is_super_admin;

    const userCan = (permission: string): boolean =>
        !!auth?.user.permissions && (isSuperAdmin() || auth.user.permissions.some((p) => p.name === permission));

    const userIs = (role: string): boolean => !!auth?.user.roles && auth.user.roles.some((r) => r.name === role);

    const userCanAny = (permissions: string[]): boolean =>
        !!auth?.user.permissions && (isSuperAdmin() || permissions.some((permission) => auth.user.permissions.some((p) => p.name === permission)));

    const userCanAll = (permissions: string[]): boolean =>
        !!auth?.user.permissions && (isSuperAdmin() || permissions.every((permission) => auth.user.permissions.some((p) => p.name === permission)));

    return { userCan, userIs, userCanAny, userCanAll };
};
