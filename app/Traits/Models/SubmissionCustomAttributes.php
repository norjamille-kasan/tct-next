<?php

namespace App\Traits\Models;

trait SubmissionCustomAttributes
{
    public function getIsPendingAttribute()
    {
        return $this->initial_submission_at === null;
    }
}