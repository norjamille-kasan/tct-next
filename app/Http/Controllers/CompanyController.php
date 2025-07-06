<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;
use Str;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('companies/Index', [
            'companies' => fn () => QueryBuilder::for(Company::class)
                ->allowedFilters(['name', 'ref_key'])
                ->paginate(15)
                ->appends($request->query()),
            'filter' => $request->input('filter'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'max:255'],
            'ref_key' => ['nullable', 'max:255', 'unique:companies'],
        ]);

        if (is_null($data['ref_key'])) {
            $data['ref_key'] = 'COMPANY-'.Str::ulid();
        }

        $company = Company::create($data);

        activity()
            ->performedOn($company)
            ->causedBy(auth()->user())
            ->withProperties($company->toArray())
            ->log('[:causer.email]/:causer.name created a company with id [:subject.id] and ref_key [:subject.ref_key]');

        return to_route('companies.edit', ['company' => $company])->toast('success', 'Company created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        return Inertia::render('companies/Edit', [
            'company' => $company,
            'segments' => fn () => $company->segments()->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        $data = $request->validate([
            'name' => ['required', 'max:255'],
        ]);

        $company->update($data);

        return back()->toast('success', 'Company updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {

        $company->delete();

        return back()->toast('success', 'Company deleted successfully');
    }
}
