<?php

namespace App\Traits\Models;

trait UserFunction {
    public function need_to_update_login_timestamp() {
        return $this->last_online_at === null || $this->last_online_at->lt(now()->subMinutes(5));
    }

    public function set_to_online() {
        $this->last_online_at = now();
        $this->save();
    }
}
