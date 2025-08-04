<?php

namespace App\Http\Controllers\Dashboard\Tasks;

use App\Actions\Submission\StartTask;
use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class StartTaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request,StartTask $action,Task $task)
    {
        $action->handle($task, $request->user());
        return back()->toast('success', 'Task started successfully');
    }
}
