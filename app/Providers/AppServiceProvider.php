<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Fieldtypes\DynamicFieldGroup;
use Statamic\Statamic;
use Statamic\Facades\CP\Nav;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      DynamicFieldGroup::register();
      Statamic::script('app', 'cp');
      Statamic::style('app', 'cp');
    }

    
}
