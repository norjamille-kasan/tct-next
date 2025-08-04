<?php

namespace App\Models;

use App\Traits\Models\SegmentRelations;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;

class Segment extends Model
{
    use SegmentRelations;
    use Userstamps;

    protected $attributes = [
        'color' => '#5829f2',
    ];
}
