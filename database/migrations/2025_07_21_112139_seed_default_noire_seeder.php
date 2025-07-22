<?php

use App\Enums\ComputationCategory;
use App\Enums\FieldType;
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
        $company = Company::whereRefKey('NOIRE')->first();

        // SEGMENT ---------------------------
        $segment = $company->segments()->create([
            'created_by' => 1,
            'ref_key' => 'NOIRE_DEFAULT',
            'name' => 'Noire Default',
            'company_id' => $company->id,
        ]);

        // TASK ------------------------------ 1
        $task = $segment->tasks()->create([
            'company_id' => $company->id,
            'ref_key' => 'NEW-MERCHANT(NEW-ASSIGNMENT)',
            'computation_category' => ComputationCategory::NOT_APPLICABLE,
            'title' => 'New Merchant (New Assignment)',
        ]);

        // QUESTIONS
        $task->questions()->create([
            'message' => 'Company Name (Applicant Company - Registered Name)',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Payreto Merchant Reference Number',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Comments (if there\'s any)',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Did you pause this task? Only answer "Yes" If you started this task previously, you got interrupted with another task, and now you\'re continuing it',
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => ['Yes','No'],
        ]);

        $task->questions()->create([
            'message' => 'Next Tasks / Steps:',
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => [
                'Continue Review (of Tasks)',
                'Escalate to Client',
                'Communicate findings to Merchant',
                'Pend - Internal Review',
                'For Payreto Quality Check',
                'For Client Quality Checking',
                'For Approval',
                'For Rejection / Pend',
                'For Follow up',
            ],
        ]);

        // ------------------------------------------

        // TASK ------------------------------ 2
        $task = $segment->tasks()->create([
            'company_id' => $company->id,
            'ref_key' => 'PRE-APPROVAL-STAGE-SUBMISSION',
            'computation_category' => ComputationCategory::PER_UNIT_OF_PERFORMED_TASK,
            'title' => 'Pre-Approval Stage Submission',
        ]);


        // QUESTIONS ------------------------
        $task->questions()->create([
            'message' => 'Company Name (Applicant Company - Registered Name)',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Payreto Application Tracking Number',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Which Acquirer will this be submitted to?',
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => [
                'Credorax / Finaro',
                'ECP',
                'Cashflows',
                'Safecharge',
                'Concardis',
                'Paysafe',
                'Bank Frick',
                'Decta',
                'Paydoo',
                'Ecommpay',
                'Secure Trading / Acquiring.com / Trust Payments',
                'Others',
            ],
        ]);

        $task->questions()->create([
            'message' => 'Others - Please specify',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'MCC / Merchant Industry',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Monthly Sales Volume',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => "Did you manually fill in information in the acquirer's portal / application form as part of this process? If Yes, please identify how extensive is the effort.",
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => [
                'No', 'Not extensive (about 3 - 10 fields filled in)',
                'Somewhat Extensive (11 - 20 fields)',
                'Extensive (More than 20 fields)',
            ],
        ]);

        $task->questions()->create([
            'message' => 'Is this the first time you are submitting this merchant for pre-approval / application to an acquirer?',
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => [
                'Yes', 'No',
            ],
        ]);

        $task->questions()->create([
            'message' => 'If No, please specify how many times have you submitted this merchant for Pre-approval (0 - 10)',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => 'Comment/s:',
            'created_by' => 1,
            'field_type'=> FieldType::TEXT,
        ]);

        $task->questions()->create([
            'message' => "Did you pause this task? Only answer 'Yes' If you started this task previously, you got interrupted with another task, and now you're continuing it",
            'created_by' => 1,
            'field_type'=> FieldType::SINGLE_SELECT,
            'options' => [
                'Yes','No',
            ],
        ]);

        $task->questions()->create([
            'message' => 'Next Tasks / Steps:',
            'created_by' => 1,
            'field_type'=> FieldType::MULTI_SELECT,
            'options' => [
                'Continue Review (of Tasks)',
                'Escalate to Client',
                'Communicate findings to Merchant',
                'Pend - Internal Review',
                'For Payreto Quality Check',
                'For Client Quality Checking',
                'For Approval',
                'For Rejection / Pend',
                'For Follow up',
            ],
        ]);

        // TASKS -----------------------  3
        $task = $segment->tasks()->create([
            'title'=>'Complete Merchant Document Set Review(First Review upon receiving all files / New Assignment)',
            'created_by' => 1,
            'company_id'=>$company->id,
            'ref_key'=>'CMD-SET-REVIEW(NEW-ASSIGNMENT)',
            'computation_category' => ComputationCategory::NOT_APPLICABLE,
        ]);

        $task->questions()->create([
            'message'=> 'Company Name (Applicant Company - Registered Name)',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Payreto Application Tracking Number',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'MCC / Merchant Industry',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Country of Incorporation',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> "Is this your first review?",
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Yes','No',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : Accomplished Merchant Application Form',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Provided - Incomplete / Invalid',
                'Did Not Provide',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : Proof of Identification - How many IDs reviewed? (0 - 50)',
            'field_type'=>FieldType::NUMBER,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : Proof of Identification - How many IDs are VALID? (0 - 50)',
            'field_type'=>FieldType::NUMBER,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> "Who's IDs do they belong to? (Separate each FULL NAME with semi-colon [ ; ])",
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : Proof of Address (Utility Bills) - How many Utility Bills reviewed? (0 - 50)',
            'field_type'=>FieldType::NUMBER,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : Proof of Address (Utility Bills) - How many Utility Bills are VALID? (0 - 50)',
            'field_type'=>FieldType::NUMBER,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> "Who's POAs do these belong to?",
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : KYB : Certificate of Incorporation',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
                'Did not Provided but downloaded from Registry',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : KYB : Trade Register Excerpt (Company Registration)',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
                'Did not Provided but downloaded from Registry',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Document Submitted : KYB : Documents showing list of Directors, Managers, and Shareholders',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
                'Did not Provided but downloaded from Registry',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : Card Processing History',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : Business License (If Applicable)',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : 6 months of corporate bank statements & a voided cheque',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : Proof of Operating Address (Lease Agreement, Corporate bank statement or coprorate utility bill issued within 90 days)',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : Proof of domain ownership',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : If PCI DSS compliant, please submit a PCI DSS certificate',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Not applicable',
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
                'Required but did not provide',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Documents Submitted : AML Policy/Terms and Conditions (if applicable)',
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Not applicable',
                'Provided - Complete and Valid',
                'Did Not Provide',
                'Provided - Incomplete / Invalid',
                'Required but did not provide',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'OTHER DOCUMENTS SUBMITTED: (List the documents - separate with semi-colon [ ; ] and identify if Valid)  i.e. Rental Agreement (Valid); Gaming License (Invalid)',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> 'Comment/s:',
            'field_type'=>FieldType::TEXT,
            'created_by'=>1,
        ]);

        $task->questions()->create([
            'message'=> "Did you pause this task? Only answer 'Yes' If you started this task previously, you got interrupted with another task, and now you're continuing it",
            'field_type'=>FieldType::SINGLE_SELECT,
            'created_by'=>1,
            'options'=> [
                'Yes','No',
            ],
        ]);

        $task->questions()->create([
            'message'=> 'Next Tasks / Steps:',
            'field_type'=>FieldType::MULTI_SELECT,
            'created_by'=>1,
            'options'=> [
                'Continue Review (of Tasks)',
                'Escalate to Client',
                'Communicate findings to Merchant',
                'Pend - Internal Review',
                'For Payreto Quality Check',
                'For Client Quality Checking',
                'For Approval',
                'For Rejection / Pend',
                'For Follow up',
            ],
        ]);


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
