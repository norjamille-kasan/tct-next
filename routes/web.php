<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard', 301)->name('home');

Route::prefix('dashboard')->middleware(['auth', 'verified', 'online_status'])->group(function () {
    Route::get('/', DashboardController::class)->middleware(['permission:view:dashboard'])->name('dashboard');

    Route::resource('companies', \App\Http\Controllers\Dashboard\Companies\CompanyController::class)
        ->except(['show'])
        ->middlewareFor(['index'], 'permission:view:company')
        ->middlewareFor(['create', 'store'], 'permission:create:company')
        ->middlewareFor(['edit', 'update'], 'permission:update:company')
        ->middlewareFor(['destroy'], 'permission:delete:company');

    Route::resource('tasks', \App\Http\Controllers\Dashboard\Tasks\TaskController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:view:task')
        ->middlewareFor(['create', 'store'], 'permission:create:task')
        ->middlewareFor(['edit', 'update'], 'permission:update:task')
        ->middlewareFor(['destroy'], 'permission:delete:task');

    Route::resource('tasks.questions', \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::class)
        ->middleware('permission:update:task');

    Route::resource('segments', \App\Http\Controllers\Dashboard\Segments\SegmentController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:view:segment')
        ->middlewareFor(['create', 'store'], 'permission:create:segment')
        ->middlewareFor(['edit', 'update'], 'permission:update:segment')
        ->middlewareFor(['destroy'], 'permission:delete:segment');

    Route::post('/segments/{segment}/attach-company', App\Http\Controllers\Dashboard\Segments\AssociateCompanyController::class)->name('segments.attach-company')
        ->middleware('permission:update:segment');

    Route::delete('/segments/{segment}/detach-company/{company}', App\Http\Controllers\Dashboard\Segments\DissociateCompanyController::class)->name('segments.detach-company')
        ->middleware('permission:update:segment');

    Route::resource('submissions', App\Http\Controllers\Dashboard\Submissions\SubmissionController::class);

    Route::resource("submissions.submission-answers", App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::class)
            ->parameters(['submission-answers' => 'submissionAnswer'])
            ->only(['update']);
     Route::put('/submissions/{submission}/status', App\Http\Controllers\Dashboard\Submissions\SubmissionStatusController::class)->name('submissions.status');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
