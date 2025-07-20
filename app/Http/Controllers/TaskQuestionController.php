<?php

namespace App\Http\Controllers;

use App\Actions\Task\CreateTaskQuestion;
use App\Enums\FieldType;
use App\Http\Requests\Task\QuestionStoreRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TaskQuestionController extends Controller
{

    public static function middleware(): array
    {
        return [
            'permission:update:task'
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Task $task)
    {
        return Inertia::render('tasks/questions/Index', [
            'task' => fn() => $task->load(['company', 'segment']),
            'field_types' => fn() => FieldType::cases(),
            'questions' => fn() => $task->questions()->orderBy('position')->get(),
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
    public function store(Task $task, QuestionStoreRequest $request,CreateTaskQuestion $action)
    {
        $question = $action->handle($request->validated(), $task);

        return back()->toast('success', 'Question created successfully');
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
