<?php

namespace App\Http\Controllers;

use App\Filters\SearchableColumn;
use App\Http\Requests\Segment\SegmentStoreRequest;
use App\Http\Requests\Segment\SegmentUpdateRequest;
use App\Models\Company;
use App\Models\Segment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Support\Str;
use Spatie\QueryBuilder\AllowedFilter;

class SegmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('segments/Index',[
            'segments'=> fn() => QueryBuilder::for(Segment::class)
                ->allowedFilters([
                    AllowedFilter::custom('search', new SearchableColumn, 'name,ref_key'),
                ])
                ->paginate(15)
                ->appends($request->query()),
            'companies' => fn () => Company::all(),
            'filter'=> fn() => $request->input('filter',[
                'search' => ''
            ]),
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

        if(is_null($data['ref_key'])) {
             $data['ref_key'] = 'SEGMENT-'.Str::ulid();
        }

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
    public function edit(Segment $segment)
    {
        return Inertia::render('segments/partials/SegmentEditForm',[
            'segment' => $segment
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SegmentUpdateRequest $request, Segment $segment)
    {
        $data = $request->validated();

        $segment->update($data);

        return back()->toast('success', 'Segment updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Segment $segment)
    {
        $segment->delete();

        return back()->toast('success', 'Segment deleted successfully');
    }
}
