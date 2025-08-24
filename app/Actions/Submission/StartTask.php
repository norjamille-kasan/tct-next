<?php

namespace App\Actions\Submission;

use App\Enums\SubmissionStatus;
use App\Models\Question;
use App\Models\Submission;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Str;

class StartTask
{

    public function handle(Task $task, User $user)
    {
        abort_if($user->ongoingTasks()->exists(), 400, 'You do not have an ongoing task');

        DB::transaction(function () use ($task) {
            $submission = Submission::create([
                'ref_id' => "TASK-" . now()->timestamp . "-" . Str::ulid(),
                'task_id' => $task->id,
                'status' => SubmissionStatus::ONGOING,
                'started_at' => now(),
                'is_locked' => false,
                'task_original_value' => $task,
                'question_version' => $task->question_version,
            ]);

            $questions = $task->questions()->get();
            $submissionAnswers = [];
            foreach ($questions as $question) {
                $submissionAnswers[] = [
                    'submission_id' => $submission->id,
                    'question_id' => $question->id,
                    'original_question' => $question->toJson(),
                    'value' => "",
                ];
            }
            DB::table('submission_answers')->insert($submissionAnswers);
        });
    }
}
