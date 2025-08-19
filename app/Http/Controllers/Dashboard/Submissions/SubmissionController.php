<?php

namespace App\Http\Controllers\Dashboard\Submissions;

use App\Actions\Submission\StartTask;
use App\Http\Controllers\Controller;
use App\Models\Submission;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

use function Pest\Laravel\instance;

class SubmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dashboard/submissions/Index',[
            'submissions' => fn () => QueryBuilder::for(Submission::class)
            ->with(['task.segment','task.company'])
            ->paginate(20)
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
    public function store(Request $request,StartTask $action)
    {
        $data = $request->validate([
            'task_id' => ['required', 'exists:tasks,id'],
        ]);
       $action->handle(Task::findOrFail($data['task_id']), $request->user());
        return back()->toast('success', 'Task started successfully');
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
    public function edit(Submission $submission)
    {
        return Inertia::render('dashboard/submissions/Edit', [
            'submission' => $submission,
            'submission.task' => fn() => $submission->task->load(['segment', 'company']),
        ]);
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
