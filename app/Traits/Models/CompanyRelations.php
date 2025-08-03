<?php


namespace App\Traits\Models;

use App\Models\Segment;
use App\Models\Task;
use Illuminate\Database\Eloquent\Relations\HasMany;

trait CompanyRelations
{
    public function segments()
    {
        return $this->belongsToMany(Segment::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }
}
