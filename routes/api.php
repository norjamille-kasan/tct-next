<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('segments', App\Http\Controllers\Api\SegmentController::class)->only(['index', 'show']);
    Route::resource('questions', App\Http\Controllers\Api\QuestionController::class)->only(['show']);
});
