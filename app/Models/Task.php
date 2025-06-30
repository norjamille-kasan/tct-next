<?php

namespace App\Models;

use App\Enums\ComputationCategory;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;

class Task extends Model
{
    use Userstamps;

    protected function casts()
    {
        return [
            'computation_category' => ComputationCategory::class,
        ];
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function segment()
    {
        return $this->belongsTo(Segment::class);
    }
}
