<?php


namespace App\Traits\Models;

use App\Models\Task;

trait QuestionRelations
{
    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}