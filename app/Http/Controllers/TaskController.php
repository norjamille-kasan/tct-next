<?php

namespace App\Http\Controllers;

use App\Enums\ComputationCategory;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('tasks/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('tasks/Create',[
            'companies'=> fn() => Company::all(),
            'computation_categories'=> ComputationCategory::cases(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title'=>['required','max:255'],
            'description'=>['nullable','max:1000'],
            'company_id'=>['required','exists:companies,id'],
            'segment_id'=>['required','exists:segments,id'],
            'ref_key'=>['nullable','max:255','unique:tasks'],
            'computation_category'=>['required','max:255','in:'.implode(',', array_map(fn($case) => $case->value, ComputationCategory::cases()))],
        ]);
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
