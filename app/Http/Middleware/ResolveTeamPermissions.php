<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ResolveTeamPermissions
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        Inertia::share([
            'auth.teams' => function () use($request) {
                if (empty(auth()->user())) {
                    $request->merge(['auth.teams' => []]);
                    return [];
                }
                $teams = auth()->user()->getTeams();
                $request->merge(['auth.teams' => $teams]);
                return $teams;
            }
        ]);


        return $next($request);
    }
}
