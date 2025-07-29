<?php

namespace App\Providers;

use Gate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->configureTelescope();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDatabase();
        $this->configureModel();
        $this->configureUrlSchema();
        $this->configureSuperAdmin();
        $this->configureToaster();
        $this->configureApiResponse();
    }

    public function configureDatabase()
    {
        DB::prohibitDestructiveCommands(app()->isProduction());
    }

    public function configureModel()
    {
        Model::unguard();
        Model::shouldBeStrict();
    }

    public function configureUrlSchema()
    {
        URL::forceHttps(app()->isProduction());
    }

    public function configureSuperAdmin()
    {
        Gate::before(function ($user, $ability) {
            return $user->hasRole('super_admin') ? true : null;
        });
    }

    public function configureTelescope()
    {
        if ($this->app->environment('local') && class_exists(\Laravel\Telescope\TelescopeServiceProvider::class)) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    public function configureToaster()
    {
        \Illuminate\Http\RedirectResponse::macro('toast', function (string $type, string $message, ?string $title = null) {
            $fallbackTitle = match ($type) {
                'success' => 'Success',
                'error' => 'Failed',
                'info' => 'Info',
                'warning' => 'Warning',
            };

            return $this->with('toast', [
                'type' => $type,
                'title' => $title ?? $fallbackTitle,
                'message' => $message,
            ]);
        });
    }

    public function configureApiResponse()
    {
        JsonResource::withoutWrapping();
        JsonResponse::macro('format', function ($data, $message = null) {
            return $this->json([
                'message' => $message,
                'data' => $data,
            ]);
        });
    }
}
