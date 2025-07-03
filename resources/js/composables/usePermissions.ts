import { AppPageProps } from '@/types';
import { usePage } from '@inertiajs/vue3';

export const usePermissions = () => {
    const { auth } = usePage<AppPageProps>().props;

    const isSuperAdmin = () => auth?.user.roles?.includes('super_admin');

    const userCan = (permission: string): boolean => !!auth?.permissions && (isSuperAdmin() || auth.permissions.includes(permission));

    const userIs = (role: string): boolean => !!auth?.user.roles && auth.user.roles.includes(role);

    const userCanAny = (permissions: string[]): boolean =>
        !!auth?.permissions && (isSuperAdmin() || permissions.some((p) => auth.permissions.includes(p)));

    const userCanAll = (permissions: string[]): boolean =>
        !!auth?.permissions && (isSuperAdmin() || permissions.every((p) => auth.permissions.includes(p)));

    return { userCan, userIs, userCanAny, userCanAll };
};
