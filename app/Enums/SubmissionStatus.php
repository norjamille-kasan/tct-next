<?php

namespace App\Enums;

enum SubmissionStatus: string
{
    case ONGOING = 'ONGOING';
    case PAUSED = 'PAUSED';
    case SUBMITTED = 'SUBMITTED';
    case EDITING = 'EDITING';
    case CANCELED = 'CANCELED';
}
