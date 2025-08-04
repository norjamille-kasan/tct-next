<?php

namespace App\Traits\Models;

use App\Models\Task;

trait SubmissionRelations
{
    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
