<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard', 301)->name('home');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard/Index');
    })->middleware(['permission:view:dashboard'])->name('dashboard');

    Route::resource('companies', \App\Http\Controllers\CompanyController::class)
        ->except(['show'])
        ->middlewareFor(['index'], 'permission:view:company')
        ->middlewareFor(['create', 'store'], 'permission:create:company')
        ->middlewareFor(['edit', 'update'], 'permission:update:company')
        ->middlewareFor(['destroy'], 'permission:delete:company');

    Route::resource('tasks', \App\Http\Controllers\TaskController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:view:task')
        ->middlewareFor(['create', 'store'], 'permission:create:task')
        ->middlewareFor(['edit', 'update'], 'permission:update:task')
        ->middlewareFor(['destroy'], 'permission:delete:task');

    Route::resource('tasks.questions', \App\Http\Controllers\TaskQuestionController::class)
        ->middleware('permission:update:task');

    Route::resource('segments', \App\Http\Controllers\SegmentController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:view:segment')
        ->middlewareFor(['create', 'store'], 'permission:create:segment')
        ->middlewareFor(['edit', 'update'], 'permission:update:segment')
        ->middlewareFor(['destroy'], 'permission:delete:segment');

    Route::post('/segments/{segment}/attach-company', App\Http\Controllers\Segment\AssociateCompanyController::class)->name('segments.attach-company')
        ->middleware('permission:update:segment');

    Route::delete('/segments/{segment}/detach-company/{company}', App\Http\Controllers\Segment\DissociateCompanyController::class)->name('segments.detach-company')
        ->middleware('permission:update:segment');

});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
