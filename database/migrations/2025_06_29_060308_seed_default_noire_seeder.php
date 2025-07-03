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
            'ref_key' => 'NOIRE',
            'name' => 'Noire',
            'created_by' => 1,
        ]);

        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => [
                'minimum_consumable_fee' => 150,
                'per_company_in_review' => 44.18,
                'dvr_one' => 3.13,
                'dvr_two' => 3.04,
                'dvr_three' => 2.95,
                'per_unit_work_amount' => 3.68,
                'per_company_in_review_question_id' => null,
                'per_company_in_review_task_id' => null,
                'document_validation_review_id' => null,
                'total_fees_paid_amount'=>0,
            ],
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => [
                'basic_document_due_diligence_header' => 'Initial Complete Document Set Review',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
                'total_fees_paid'=>'Total Fees Paid in Advance by Payreto for Downloading KYB Documents from Company Registries'
            ],
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
