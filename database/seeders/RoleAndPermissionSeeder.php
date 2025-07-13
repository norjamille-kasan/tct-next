<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
        Role::create(['name' => 'super_admin', 'is_default' => true]);
        Role::create(['name' => 'analyst', 'is_default' => true]);

        // PERMISSIONS
        Permission::create(['name' => 'manage:billing_reports', 'group' => 'system']);
        Permission::create(['name' => 'manage:role_and_permission', 'group' => 'system']);

        $groups = ['company', 'user', 'task', 'task_submission', 'segment', 'survey', 'survey_submission', 'rating', 'rating_submission'];

        foreach ($groups as $group) {
            Permission::create(['name' => "view:{$group}", 'group' => $group]);
            Permission::create(['name' => "create:{$group}", 'group' => $group]);
            Permission::create(['name' => "update:{$group}", 'group' => $group]);
            Permission::create(['name' => "delete:{$group}", 'group' => $group]);
        }
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
    }
}
