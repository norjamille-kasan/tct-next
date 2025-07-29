<?php

namespace App\Actions\Company;

use App\Models\Company;
use Illuminate\Support\Facades\DB;

class DeleteCompany
{
    public function handle(Company $company)
    {
        DB::transaction(function () use ($company) {
            // TODO DETACH SEGMENTS
            $company->delete();
        });
    }
}
