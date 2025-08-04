<?php

namespace App\Actions\Task;

use App\Enums\FieldType;
use App\Models\Question;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class UpdateTaskQuestion
{
    public $with_options = [
        FieldType::DROPDOWN_SELECT->value,
        FieldType::MULTI_SELECT->value,
        FieldType::SINGLE_SELECT->value,
    ];

    public function handle(array $data, Question $question)
    {
        $data = $this->formatData($data);

        DB::transaction(function () use ($data, $question) {
            $question->update($data);
            $question->task()->increment('question_version');
        });
    }

    private function formatData(array $data): array
    {
        if (in_array($data['field_type'], $this->with_options) && empty($data['options'])) {
            throw ValidationException::withMessages([
                'options' => ['The options field is required.'],
            ]);
        }

        if (! in_array($data['field_type'], $this->with_options) && ! empty($data['options'])) {
            $data['options'] = null;
        }

        return $data;
    }
}
