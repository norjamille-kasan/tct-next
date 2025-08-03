<?php

namespace App\Models;

use App\Enums\ComputationCategory;
use App\Traits\Models\TaskRelations;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Task extends Model
{
    use LogsActivity, Userstamps;
    use TaskRelations;

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
            'started_at' => 'datetime',
            'initial_submitted_at' => 'datetime',
            'last_submitted_at' => 'datetime',
            'last_paused_at' => 'datetime',
            'last_resumed_at' => 'datetime',
            'last_edited_at' => 'datetime',
        ];
    }
}
