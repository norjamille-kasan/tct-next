<?php

namespace App\Traits\Models;

use App\Enums\SubmissionStatus;

trait SubmissionScopes
{
    public function scopeOngoing($query) {
        return $query->whereStatus(SubmissionStatus::ONGOING);
    }

    public function scopePaused($query) {
        return $query->whereStatus(SubmissionStatus::PAUSED);
    }

    public function scopeResumed($query) {
        return $query->whereStatus(SubmissionStatus::RESUMED);
    }

    public function scopeSubmitted($query) {
        return $query->whereStatus(SubmissionStatus::SUBMITTED);
    }

    public function scopeEditing($query) {
        return $query->whereStatus(SubmissionStatus::EDITING);
    }

    public function scopeCanceled($query) {
        return $query->whereStatus(SubmissionStatus::CANCELED);
    }
}