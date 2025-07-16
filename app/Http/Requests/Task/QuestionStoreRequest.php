<?php

namespace App\Http\Requests\Task;

use App\Enums\FieldType;
use Illuminate\Foundation\Http\FormRequest;

class QuestionStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'message' => ['required', 'max:1000'],
            'field_type' => ['required', 'max:255', 'in:'.implode(',', array_map(fn ($case) => $case->value, FieldType::cases()))],
            'options' => ['nullable'],
            'valid_input' => ['nullable'],
            'position' => ['required', 'integer', 'min:0'],
        ];
    }
}
