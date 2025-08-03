<?php

namespace App\Models;

use App\Enums\SubmissionStatus;
use App\Traits\Models\SubmissionCustomAttributes;
use App\Traits\Models\SubmissionRelations;
use App\Traits\Models\SubmissionScopes;
use Illuminate\Database\Eloquent\Model;
use Mattiverse\Userstamps\Traits\Userstamps;

class Submission extends Model
{
    use Userstamps;
    use SubmissionRelations;
    use SubmissionCustomAttributes;
    use SubmissionScopes;

    protected function casts()
    {
        return [
            'started_at' => 'datetime',
            'initial_submission_at' => 'datetime',
            'final_submission_at' => 'datetime',
            'last_paused_at' => 'datetime',
            'last_resumed_at' => 'datetime',
            'last_edited_at' => 'datetime',
            'task_original_value' => 'array',
            'is_locked' => 'boolean',
            'status'=> SubmissionStatus::class
        ];
    }
}
