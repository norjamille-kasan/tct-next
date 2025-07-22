<?php

use App\Models\Company;
use App\Models\CompanySetting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
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
         $company = Company::create([
            'ref_key'=>'COMO',
            'name' => 'Como',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
         $company = Company::create([
            'ref_key' => 'NOIRE',
            'name' => 'Noire',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
