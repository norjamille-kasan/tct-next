<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\CompanySetting;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $company = Company::create([
            'ref_key' => 'TRUEVO',
            'name' => 'Truevo',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        $company = Company::create([
            'ref_key' => 'T-P',
            'name' => 'T-P',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        $company = Company::create([
            'ref_key' => 'FIDO_MS',
            'name' => 'FIDO MS',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        $company = Company::create([
            'ref_key' => 'FIDO_MONEY',
            'name' => 'FIDO Money',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
    }
}
