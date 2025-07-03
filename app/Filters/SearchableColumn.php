<?php

namespace App\Filters;

use Spatie\QueryBuilder\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;

class SearchableColumn implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        $fields = explode(',', $property);

        $query->where(function ($query) use ($fields, $value) {
            foreach ($fields as $field) {
                $query->orWhere($field, 'LIKE', '%' . $value . '%');
            }
        });
    }
}
