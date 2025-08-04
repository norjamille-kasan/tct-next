<?php

namespace App\Traits\Models;

trait UserFunctions
{
    public function needToUpdateLoginTimestamp()
    {
        return $this->last_online_at === null || $this->last_online_at->lt(now()->subMinutes(5));
    }

    public function setToOnline()
    {
        $this->last_online_at = now();
        $this->save();
    }
}
