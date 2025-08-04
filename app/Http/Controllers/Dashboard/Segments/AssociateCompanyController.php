<?php

namespace App\Http\Controllers\Dashboard\Segments;

use App\Http\Controllers\Controller;
use App\Models\Segment;
use Illuminate\Http\Request;

class AssociateCompanyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Segment $segment)
    {
        $data = $request->validate([
            'company_id' => ['required', 'exists:companies,id'],
        ]);

        $segment->companies()->syncWithoutDetaching($data['company_id']);

        return back()->toast('success', 'Company associated successfully');
    }
}
