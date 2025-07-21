<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $testUser = User::factory()->create([
            'email' => 'test@example.com',
        ]);
        // The reason we only do this in testing environment is because we don't
        // want the seeder to run in production, and we don't want to write to
        // the database file in local environment.
        if(app()->environment('testing') && config('database.default')==='sqlite') {
            $this->callTestingSeeder();
        }
    }

    private function callTestingSeeder()
    {
        $this->call([
            RoleAndPermissionSeeder::class,
            SuperAdminSeeder::class,
        ]);
    }
}
