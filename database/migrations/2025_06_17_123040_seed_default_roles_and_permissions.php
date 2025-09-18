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
        Role::create(['name' => 'Analyst', 'is_default' => true,'team_id' => null]);

        // PERMISSIONS

        Permission::create([
            'name' => 'manage:role_and_permission',
            'group' => 'system',
            'description' => 'A user can manage roles and permissions',
            'display_name' => 'Manage Roles and Permissions',
        ]);

        $groups = ['company', 'user', 'task', 'segment', 'submission', 'survey_form', 'survey_form_submission', 'matrix_form', 'matrix_form_submission'];

        foreach ($groups as $group) {
            Permission::create([
                 'name' => "read_{$group}",
                 'group' => $group,
                 'description' => "A user can read ". str_replace('_', ' ', $group),
                 'display_name' => "Read {$group}  ". str_replace('_', ' ', $group),
             ]);
              Permission::create([
                    'name' => "write_{$group}",
                    'group' => $group,
                    'description' => "A user can write ". str_replace('_', ' ', $group),
                    'display_name' => "Write ". str_replace('_', ' ', $group),
            ]);
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
