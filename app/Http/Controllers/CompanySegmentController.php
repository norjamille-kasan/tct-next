<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Segment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;

class CompanySegmentController extends Controller
{
    public static function middleware(): array
    {
        return [
            'update:company'
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company, Segment $segment)
    {
        return Inertia::render('companies/partials/SegmentEditForm', [
            'segment' => $segment,
            'company' => $company,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company, Segment $segment)
    {
        $data = $request->validate([
            'name' => ['required', 'max:255'],
            'description' => ['nullable', 'max:1000'],
        ]);

        $segment->update($data);

        return back()->toast('success', 'Segment updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company, Segment $segment)
    {
        $segment->delete();
        return back()->toast('success', 'Segment deleted successfully');
    }
}
