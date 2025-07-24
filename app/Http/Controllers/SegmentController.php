<?php

namespace App\Http\Controllers;

use App\Http\Requests\Segment\SegmentStoreRequest;
use App\Models\Segment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class SegmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('segments/Index',[
            'segments'=> QueryBuilder::for(Segment::class)
                ->allowedFilters(['name', 'ref_key'])
                ->paginate(15)
                ->appends($request->query()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SegmentStoreRequest $request)
    {
        $data = $request->validated();
        Segment::create($data);
        return back()->toast('success', 'Segment created successfully');
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
