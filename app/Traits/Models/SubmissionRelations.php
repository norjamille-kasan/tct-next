<?php

namespace App\Traits\Models;

use App\Models\SubmissionAnswer;
use App\Models\Task;

trait SubmissionRelations
{
    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function submissionAnswers()
    {
        return $this->hasMany(SubmissionAnswer::class);
    }
}
