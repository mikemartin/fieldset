<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Fieldtypes\FieldGroup;
use App\Fieldtypes\DynamicFieldGroup;
use Statamic\Statamic;

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
      FieldGroup::register();
      Statamic::script('app', 'cp');
      Statamic::style('app', 'cp');
    }
}
