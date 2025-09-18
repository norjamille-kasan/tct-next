<?php

namespace App\Traits\Models;

use App\Models\Submission;

trait SubmissionEditRequestRelations
{
    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }
}
