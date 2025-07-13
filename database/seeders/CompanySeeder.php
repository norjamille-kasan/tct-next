<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\CompanySetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => [
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,
            ],
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => [
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
                'total_fees_paid' => 'Total Fees Paid in Advance by Payreto for Downloading KYB Documents from Company Registries',
            ],
        ]);
        $company = Company::create([
            'ref_key' => 'T-P',
            'name' => 'T-P',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => [
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,

            ],
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => [
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
                'total_fees_paid' => 'Total Fees Paid in Advance by Payreto for Downloading KYB Documents from Company Registries',
            ],
        ]);
        $company = Company::create([
            'ref_key' => 'FIDO_MS',
            'name' => 'FIDO MS',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => [
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,

            ],
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => [
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
                'total_fees_paid' => 'Total Fees Paid in Advance by Payreto for Downloading KYB Documents from Company Registries',
            ],
        ]);
        $company = Company::create([
            'ref_key' => 'FIDO_MONEY',
            'name' => 'FIDO Money',
            'created_by' => 1,
            'updated_by' => 1,
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_SETTING',
            'values' => [
                'minimum_consumable_fee' => 180000,
                'per_company_in_review' => 5100,
                'dvr_one' => 900,
                'dvr_two' => 750,
                'dvr_three' => 600,
                'per_unit_work_amount' => 2500,

            ],
        ]);
        CompanySetting::create([
            'company_id' => $company->id,
            'name' => 'BILLING_REPORT_SETTING',
            'values' => [
                'basic_document_due_diligence_header' => 'Basic Company Due Diligence',
                'monthly_minimum_fee_header' => 'OaaS Monthly Minimum Fee',
                'total_fees_paid' => 'Total Fees Paid in Advance by Payreto for Downloading KYB Documents from Company Registries',
            ],
        ]);
    }
}
