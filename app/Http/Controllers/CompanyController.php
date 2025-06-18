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
    public function index()
    {
        return Inertia::render('companies/Index',[
            'companies'=> fn() => QueryBuilder::for(Company::class)
                ->allowedFilters(['name', 'ref_key'])
                ->paginate()
                ->appends(request()->query())
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
            'name'=>['required','max:255'],
            'ref_key'=>['nullable','max:255','unique:companies'],
        ]);

        if(is_null($data['ref_key'])){
            $data['ref_key'] = "COMPANY-".Str::ulid();
        }

        Company::create($data);

        return to_route('companies.index');
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
        return Inertia::render('companies/Edit',[
            'company'=>$company
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        $data = $request->validate([
            'name'=>['required','max:255'],
        ]);


        $company->update($data);

        return to_route('companies.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
