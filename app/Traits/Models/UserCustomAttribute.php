<?php

namespace App\Traits\Models;

trait UserCustomAttribute
{
    public function getIsOnlineAttribute()
    {
        return $this->last_online_at->gt(now()->subMinutes(5));
    }
}
