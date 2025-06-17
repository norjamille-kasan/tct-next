<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Role::create(['name' => 'super_admin','is_default' => true]);
        Role::create(['name' => 'analyst','is_default' => true]);


        // PERMISSIONS
        Permission::create(['name' => "manage:billing_reports", 'group' => 'system']);
        Permission::create(['name' => "manage:role_and_permission", 'group' => 'system']);

        $groups = ['company', 'user','task','task_submission','segment','survey','survey_submission','rating','rating_submission'];

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
