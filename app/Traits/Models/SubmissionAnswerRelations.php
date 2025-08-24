<?php


namespace App\Traits\Models;

use App\Models\Submission;

trait SubmissionAnswerRelations
{
    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }
}
