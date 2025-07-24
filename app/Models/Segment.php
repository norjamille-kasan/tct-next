<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Mattiverse\Userstamps\Traits\Userstamps;

class Segment extends Model
{
    use Userstamps;

    public function companies()
    {
        return $this->belongsToMany(Company::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }


}
