<?php

namespace App\Traits\Models;

use App\Models\Company;
use App\Models\Task;

trait SegmentRelations
{

    public function companies()
    {
        return $this->belongsToMany(Company::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

}