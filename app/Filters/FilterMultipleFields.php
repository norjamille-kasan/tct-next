<?php

namespace App\Filters;

use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Filters\Filter;

class FilterMultipleFields implements Filter
{
    public function __invoke(Builder $query, $value, string $property): Builder
    {
        $fields = explode(',', $property);

        $query->where(function ($query) use ($fields, $value) {
            foreach ($fields as $field) {
                $query->orWhere($field, 'LIKE', '%'.$value.'%');
            }
        });

        return $query;
    }
}
