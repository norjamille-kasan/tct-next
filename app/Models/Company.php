<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Mattiverse\Userstamps\Traits\Userstamps;

class Company extends Model
{
    use Userstamps;

    public function segments()
    {
        return $this->belongsToMany(Segment::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function company_settings(): HasMany
    {
        return $this->hasMany(CompanySetting::class);
    }
}
