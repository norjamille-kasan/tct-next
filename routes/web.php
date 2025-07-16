<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard', 301)->name('home');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('companies', \App\Http\Controllers\CompanyController::class)->except(['show']);
    Route::resource('tasks', \App\Http\Controllers\TaskController::class)->except(['show']);
    Route::resource('tasks.questions', \App\Http\Controllers\TaskQuestionController::class);
    Route::resource('companies.segments', \App\Http\Controllers\CompanySegmentController::class)->except(['show','index']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
