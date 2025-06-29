<?php

namespace App\Models;

use App\Enums\ComputationCategory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected function casts()
    {
        return [
            'computation_category' => ComputationCategory::class,
        ];
    }

}
