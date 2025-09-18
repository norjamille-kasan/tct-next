<?php

namespace App\Traits\Models;

use App\Models\User;

trait TeamRelations
{
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
