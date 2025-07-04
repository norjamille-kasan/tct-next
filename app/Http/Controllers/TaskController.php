<?php

namespace App\Http\Controllers;

use App\Enums\ComputationCategory;
use App\Filters\SearchableColumn;
use App\Models\Company;
use App\Models\Segment;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('tasks/Index', [
            'tasks' => fn() => QueryBuilder::for(Task::class)
                ->with(['company', 'segment'])
                ->allowedFilters(['company_id', 'segment_id', 'computation_category',
                    AllowedFilter::custom('searchable', new SearchableColumn,'title,ref_key')
                ])
                ->allowedSorts(['created_at', 'title'])
                ->orderBy('created_at', 'desc')
                ->paginate(15)
                ->withQueryString(),
            'companies' => fn() => Company::all(),
            'computation_categories' => ComputationCategory::cases(),
            'filter' => $request->input('filter'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('tasks/Create', [
            'companies' => fn() => Company::all(),
            'computation_categories' => ComputationCategory::cases(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'max:255'],
            'description' => ['nullable', 'max:1000'],
            'company_id' => ['required', 'exists:companies,id'],
            'segment_id' => ['required', 'exists:segments,id'],
            'ref_key' => ['nullable', 'max:255', 'unique:tasks'],
            'computation_category' => ['required', 'max:255', 'in:' . implode(',', array_map(fn($case) => $case->value, ComputationCategory::cases()))],
        ]);

        if (is_null($data['ref_key'])) {
            $data['ref_key'] = 'TASK-' . Str::ulid();
        }

        Task::create($data);

        activity()
            ->performedOn(Task::latest()->first())
            ->causedBy(auth()->user())
            ->withProperties($data)
            ->log('[:causer.email]/:causer.name created a task with ref_key [:subject.ref_key]');

        return to_route('tasks.index')->toast('success', 'Task created successfully');
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
    public function edit(Task $task)
    {
        return Inertia::render('tasks/Edit', [
            'task' => $task,
            'companies' => fn() => Company::all(),
            'computation_categories' => ComputationCategory::cases(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $data = $request->validate([
            'title' => ['required', 'max:255'],
            'description' => ['nullable', 'max:1000'],
            'company_id' => ['required', 'exists:companies,id'],
            'segment_id' => ['required', 'exists:segments,id'],
            'ref_key' => ['nullable', 'max:255', 'unique:tasks,ref_key,' . $task->id],
            'computation_category' => ['required', 'max:255', 'in:' . implode(',', array_map(fn($case) => $case->value, ComputationCategory::cases()))],
        ]);

        $task->update($data);

        activity()
            ->performedOn($task)
            ->causedBy(auth()->user())
            ->withProperties($data)
            ->log('[:causer.email]/:causer.name updated a task with ref_key [:subject.ref_key]');

        return back()->toast('success', 'Task updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return back()->toast('success', 'Task deleted successfully');
    }
}
