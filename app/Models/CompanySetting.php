<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanySetting extends Model
{
    protected function casts()
    {
        return [
            'values' => 'array',
        ];
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
