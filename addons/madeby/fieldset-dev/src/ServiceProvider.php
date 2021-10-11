<?php

namespace MadeBy\FieldsetDev;

use Statamic\Providers\AddonServiceProvider;
use MadeBy\FieldsetDev\Fieldtypes\FieldsetGroupFieldtype;
use Statamic\Facades\CP\Nav;

class ServiceProvider extends AddonServiceProvider
{
    protected $fieldtypes = [
      FieldsetGroupFieldtype::class,
    ];

    protected $routes = [
      'cp' => __DIR__.'/../routes/cp.php'
    ];

    protected $stylesheets = [
        __DIR__.'/../dist/css/fieldset-dev.css',
    ];

    protected $scripts = [
        __DIR__.'/../dist/js/fieldset-dev.js',
    ];

    
    public function boot()
    {
      parent::boot();
      
      Nav::extend(function ($nav) {
        $nav->fields('Community')
            ->icon('fieldsets')
            ->active('fieldset-dev')
            ->route('fieldset-dev.index');
      });

    }

}
