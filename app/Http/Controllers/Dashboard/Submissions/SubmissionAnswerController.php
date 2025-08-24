<?php

namespace App\Http\Controllers\Dashboard\Submissions;

use App\Enums\SubmissionStatus;
use App\Http\Controllers\Controller;
use App\Models\Submission;
use App\Models\SubmissionAnswer;
use Illuminate\Http\Request;

class SubmissionAnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function update(Request $request,Submission $submission, SubmissionAnswer $submissionAnswer)
    {
        abort_unless($submissionAnswer->submission->status === SubmissionStatus::ONGOING,400,"Task already submitted, if you want to make changes please request to edit or create a new submission");

        $data = $request->validate([
            "answer" => ["nullable"],
        ]);

        $submissionAnswer->update([
            "value" => $data["answer"]
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
