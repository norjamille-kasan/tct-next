<?php

use Illuminate\Database\Migrations\Migration;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Role::create(['name' => 'super_admin', 'is_default' => true]);
        Role::create(['name' => 'analyst', 'is_default' => true]);

        // PERMISSIONS
        Permission::create(['name' => 'manage:billing_reports', 'group' => 'system']);
        Permission::create(['name' => 'manage:role_and_permission', 'group' => 'system']);

        $groups = ['company', 'user', 'task','segment', 'task_submission', 'survey', 'survey_submission', 'rating', 'rating_submission'];

        foreach ($groups as $group) {
            Permission::create(['name' => "view:{$group}", 'group' => $group]);
            Permission::create(['name' => "create:{$group}", 'group' => $group]);
            Permission::create(['name' => "update:{$group}", 'group' => $group]);
            Permission::create(['name' => "delete:{$group}", 'group' => $group]);
        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
