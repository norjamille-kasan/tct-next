<?php

namespace App\Traits\Models;

use App\Models\Submission;
use App\Models\Team;

trait UserRelations
{
    public function submissions()
    {
        return $this->hasMany(Submission::class, 'created_by');
    }

    public function ongoingTasks()
    {
        return $this->submissions()->ongoing();
    }

    public function teams()
    {
        return $this->belongsToMany(Team::class);
    }

}
