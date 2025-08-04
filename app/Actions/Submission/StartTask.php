<?php

namespace App\Actions\Submission;

use App\Models\Submission;
use App\Models\Task;
use App\Models\User;

class StartTask
{
    public function handle(Task $task, User $user)
    {
        if ($user->ongoingTasks()->exists()) {
            return back()->toast('warning', 'You already have an ongoing task, you cannot start this task.');
        }

        return true;
    }

    public function createSubmission(array $data)
    {
        Submission::create([
            'task_id' => $data['task_id'],
        ]);
    }
}
