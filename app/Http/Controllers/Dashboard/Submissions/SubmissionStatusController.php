<?php

namespace App\Http\Controllers\Dashboard\Submissions;

use App\Enums\SubmissionStatus;
use App\Http\Controllers\Controller;
use App\Models\Submission;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class SubmissionStatusController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,Submission $submission)
    {
        // Abort if the submission is already submitted
        abort_unless($submission->status !== SubmissionStatus::SUBMITTED,400,"Task already submitted, if you want to make changes please request to edit or create a new submission");

        // Validate the request
        $data = $request->validate([
            "status" => ["required",Rule::enum(SubmissionStatus::cases())],
        ]);

        $submission->status = $data["status"];

        if($data["status"] === SubmissionStatus::PAUSED->value) {
            $submission->last_paused_at = now();
            if(is_null($submission->last_resumed_at)){
                // Calculate the seconds spent since the task was started
                $submission->total_seconds_spent += $submission->started_at->diffInSeconds(now());
            }else{
                // Calculate the seconds spent since the task was last resumed
                $submission->total_seconds_spent += $submission->last_resumed_at->diffInSeconds(now());
            }
        }

        if($data["status"] === SubmissionStatus::ONGOING->value) {
            $submission->last_resumed_at = now();
        }

        $submission->save();

        $message = match ($submission->status) {
            "ONGOING" => "Task has been resumed",
            "PAUSED" => "Task has been paused",
            default => "Task status has been updated",
        };

        return back()->toast("success",$message);
    }
}
