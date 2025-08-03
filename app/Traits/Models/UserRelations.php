<?php

namespace App\Traits\Models;

use App\Enums\SubmissionStatus;
use App\Models\Submission;

trait UserRelations
{

    public function submissions()
    {
        return $this->hasMany(Submission::class,'created_by');
    }

    public function ongoingTasks()
    {
        return $this->submissions()->ongoing();
    }
}