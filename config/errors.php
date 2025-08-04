<?php

return [
    '404' => [
        'title' => 'Failed Request',
        'description' => 'Page/Data not found',
        'code' => 404,
    ],
    '400' => [
        'title' => 'Failed Request',
        'description' => 'Bad request, please try again',
        'code' => 400,
    ],
    '500' => [
        'title' => '500: Internal Server Error',
        'description' => 'Something went wrong, please try again',
        'code' => 500,
    ],
    '503' => [
        'title' => '503: Service Unavailable',
        'description' => 'Service is temporarily unavailable, try again later',
        'code' => 503,
    ],
    '403' => [
        'title' => 'Unauthorized',
        'description' => 'Forbidden Action',
        'code' => 403,
    ],
];
