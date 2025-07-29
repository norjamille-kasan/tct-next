<?php

namespace App\Http\Controllers;

use App\Actions\Task\CreateTaskQuestion;
use App\Actions\Task\UpdateTaskQuestion;
use App\Enums\FieldType;
use App\Http\Requests\Task\QuestionStoreRequest;
use App\Http\Requests\Task\QuestionUpdateRequest;
use App\Models\Question;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class TaskQuestionController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(Task $task)
    {
        return Inertia::render('dashboard/tasks/questions/Index', [
            'task' => fn() => $task->load(['company', 'segment']),
            'fieldTypes' => fn() => FieldType::cases(),
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
    public function edit(Task $task, Question $question)
    {
        abort_unless($question->task()->is($task), 403);

        return Inertia::render('dashboard/tasks/partials/QuestionEditForm',[
            'question' => $question,
            'fieldTypes' => FieldType::cases(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionUpdateRequest $request,UpdateTaskQuestion $action,Task $task, Question $question)
    {
        $question = $action->handle($request->validated(), $question);

        return back()->toast('success', 'Question updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task, Question $question)
    {
        abort_unless($question->task()->is($task), 403);
        $question->delete();
        return back()->toast('success', 'Question deleted successfully');
    }
}
