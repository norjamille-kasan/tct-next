<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/dashboard', 301)->name('dashboard');

Route::prefix('dashboard')->name('dashboard')->middleware(['auth', 'verified', 'online_status','resolve_team_permissions'])->group(function () {
    Route::get('/', DashboardController::class)->middleware(['permission:view:dashboard']);

    Route::resource('companies', \App\Http\Controllers\Dashboard\Companies\CompanyController::class)
        ->except(['show'])
        ->middlewareFor(['index'], 'permission:read_company')
        ->middlewareFor(['create', 'store','edit','update','destroy'], 'permission:write_company');

    Route::resource('tasks', \App\Http\Controllers\Dashboard\Tasks\TaskController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:read_task')
        ->middlewareFor(['create', 'store','edit','update','destroy'], 'permission:write_task');


    Route::resource('tasks.questions', \App\Http\Controllers\Dashboard\Tasks\TaskQuestionController::class)
        ->middleware('permission:write_task');

    Route::resource('segments', \App\Http\Controllers\Dashboard\Segments\SegmentController::class)->except(['show'])
        ->middlewareFor(['index'], 'permission:read_segment')
        ->middlewareFor(['create', 'store','edit', 'update','destroy'], 'permission:write_segment');

    Route::post('/segments/{segment}/attach-company', App\Http\Controllers\Dashboard\Segments\AssociateCompanyController::class)->name('segments.attach-company')
        ->middleware('permission:write_segment');

    Route::delete('/segments/{segment}/detach-company/{company}', App\Http\Controllers\Dashboard\Segments\DissociateCompanyController::class)->name('segments.detach-company')
        ->middleware('permission:write_segment');

    Route::resource('submissions', App\Http\Controllers\Dashboard\Submissions\SubmissionController::class);

    Route::resource("submissions.submission-answers", App\Http\Controllers\Dashboard\Submissions\SubmissionAnswerController::class)
            ->parameters(['submission-answers' => 'submissionAnswer'])
            ->only(['update']);
     Route::put('/submissions/{submission}/status', App\Http\Controllers\Dashboard\Submissions\SubmissionStatusController::class)->name('submissions.status');
     Route::put('/submissions/{submission}/submit', App\Http\Controllers\Dashboard\Submissions\SubmitSubmissionController::class)->name('submissions.submit');

     Route::patch('/change-team',function(){
         session(['team_id' => request('team_id')]);
         return to_route('dashboard');
     });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
