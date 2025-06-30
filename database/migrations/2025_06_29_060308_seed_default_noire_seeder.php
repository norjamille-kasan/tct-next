<?php

use App\Models\Company;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $company = Company::create([
            'ref_key' => 'NOIRE',
            'name' => 'Noire',
            'created_by' => 1,
        ]);

        $company->segments()->create([
            'created_by' => 1,
            'ref_key' => 'NOIRE_DEFAULT',
            'name' => 'Noire Default',
            'company_id' => $company->id,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
