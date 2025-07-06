<?php

namespace App\Models;

use App\Enums\FieldType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Question extends Model
{
    const POSITION_GAP = 60000;

    const POSITION_MIN = 0.00002;

    public static function booted()
    {
        static::creating(function ($model) {
            $model->position = self::query()->where('task_id', $model->external_form_id)->orderByDesc('position')->first()?->position + self::POSITION_GAP;
        });

        static::saved(function ($model) {
            if ($model->position < self::POSITION_MIN) {
                DB::statement('SET @previousPosition := 0');
                DB::statement(
                    '
                    UPDATE questions
                    SET position = (@previousPosition := @previousPosition + ?)
                    WHERE task_id = ?
                    ORDER BY position
                ',
                    [
                        self::POSITION_GAP,
                        $model->task_id,
                    ]
                );
            }
        });
    }

    protected function casts()
    {
        return [
            'options' => 'array',
            'field_type' => FieldType::class,
        ];
    }
}
