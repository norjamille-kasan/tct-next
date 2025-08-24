<?php

namespace App\Models;

use App\Traits\Models\SubmissionAnswerRelations;
use Illuminate\Database\Eloquent\Model;

class SubmissionAnswer extends Model
{
    use SubmissionAnswerRelations;
    protected function casts()
    {
        return [
            "original_question" => "array"
        ];
    }
}
