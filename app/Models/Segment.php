<?php

namespace App\Models;

use App\Traits\Models\SegmentRelations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Mattiverse\Userstamps\Traits\Userstamps;

class Segment extends Model
{
    use Userstamps;
    use SegmentRelations;

    protected $attributes = [
        'color' => '#5829f2',
    ];
}
