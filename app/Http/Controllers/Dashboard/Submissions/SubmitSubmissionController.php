<?php

namespace App\Http\Controllers\Dashboard\Submissions;

use App\Enums\SubmissionStatus;
use App\Http\Controllers\Controller;
use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class SubmitSubmissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,Submission $submission)
    {
        abort_unless($submission->status !== SubmissionStatus::SUBMITTED,400,"Task already submitted, if you want to make changes please request to edit or create a new submission");

        $errors = [];

        foreach($submission->submissionAnswers as $submissionAnswer){
            if($submissionAnswer->original_question['required'] && empty($submissionAnswer->value)){
                $errors[$submissionAnswer->id] = "This field is required";
            }
        }

        if(count($errors) > 0){
            throw ValidationException::withMessages($errors);
        }

        $submission->update([
            "status" => SubmissionStatus::SUBMITTED,
            'initial_submission_at' => now(),
            'final_submission_at' => now(),
            'is_locked' => true,
        ]);

        return back()->toast('success', 'Task submitted successfully');
    }
}
