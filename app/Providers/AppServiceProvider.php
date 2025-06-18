<?php

namespace App\Providers;

use Gate;
use Illuminate\Database\Eloquent\Model;
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
        $this->configureModel();
        $this->configureUrlSchema();
        $this->configureSuperAdmin();
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
        // if ($this->app->environment('local') && class_exists(\Laravel\Telescope\TelescopeServiceProvider::class)) {
        //     $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
        //     $this->app->register(TelescopeServiceProvider::class);
        // }
    }


}
