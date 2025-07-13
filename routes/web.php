<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard', 301)->name('home');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('companies', \App\Http\Controllers\CompanyController::class)
        ->middlewareFor(['index'],'view:company');

    Route::resource('tasks', \App\Http\Controllers\TaskController::class)
        ->middlewareFor(['index'], 'view:task')
        ->middlewareFor(['create', 'store'], 'create:task')
        ->middlewareFor(['edit', 'update'], 'update:task')
        ->middlewareFor(['destroy'], 'delete:task');

    Route::resource('tasks.questions', \App\Http\Controllers\TaskQuestionController::class)
        ->middlewareFor(['index'], 'view:task_question')
        ->middlewareFor(['create', 'store'], 'create:task_question')
        ->middlewareFor(['edit', 'update'], 'update:task_question')
        ->middlewareFor(['destroy'], 'delete:task_question');

    Route::resource('companies.segments', \App\Http\Controllers\CompanySegmentController::class)
        ->only(['store', 'edit', 'update', 'destroy'])
        ->middlewareFor(['index'], 'view:company,view:segment')
        ->middlewareFor(['create'], 'create:company,create:segment')
        ->middlewareFor(['edit', 'update'], 'update:company,update:segment')
        ->middlewareFor(['destroy'], 'delete:company,delete:segment');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
