<?php

namespace App\Enums;

enum ComputationCategory: string
{
    case PER_UNIT_OF_PERFORMED_TASK = 'PER_UNIT_OF_PERFORMED_TASK';
    case PER_PERFORMED_TASK = 'PER_PERFORMED_TASK';
}
