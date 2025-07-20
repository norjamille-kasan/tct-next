<?php

namespace App\Models;

use App\Enums\ComputationCategory;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Task extends Model
{
    use LogsActivity, Userstamps;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logOnly(['segment_id', 'title', 'description', 'computation_category', 'ref_key'])
            ->logOnlyDirty();
    }

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

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
