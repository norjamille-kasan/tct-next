<?php

namespace App\Http\Controllers\Dashboard\Segments;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Segment;
use Illuminate\Http\Request;

class DissociateCompanyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Segment $segment, Company $company)
    {
        $segment->companies()->detach($company);

        return back()->toast('success', 'Company dissociated successfully');
    }
}
