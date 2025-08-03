<?php

namespace App\Traits\Models;

use App\Models\Company;
use App\Models\Question;
use App\Models\Segment;
use App\Models\Submission;

trait TaskRelations
{

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function segment()
    {
        return $this->belongsTo(Segment::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function submissions()
    {
        return $this->hasMany(Submission::class);
    }
}