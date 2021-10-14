<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Fieldtypes\FieldsetSelector;
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
      FieldsetSelector::register();
      Statamic::script('app', 'cp');
      Statamic::style('app', 'cp');
    }

    
}
