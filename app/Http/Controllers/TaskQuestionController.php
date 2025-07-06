<?php

namespace App\Http\Controllers;

use App\Enums\FieldType;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskQuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Task $task)
    {
        return Inertia::render('tasks/questions/Index', [
            'task' => fn () => $task->load(['company', 'segment']),
            'field_types' => fn () => FieldType::cases(),
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
    public function store(Request $request)
    {
        //
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
