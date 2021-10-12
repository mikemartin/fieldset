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
            ->icon('<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" stroke="currentColor" stroke-width="1" x="0.763422012" y="0.763422012" width="22.473156" height="22.473156" rx="11.236578"></rect>
            <path fill="none" stroke="currentColor" d="M9.95082273,19.3500329 L9.95082273,11.9220931 L14.0351315,11.9220931 L14.0351315,19.3500329 L17.8866559,19.3500329 L17.8866559,8.89589533 L9.95082273,8.89589533 L9.95082273,8.36683978 C9.95082273,7.56267535 10.4163916,7.09710647 11.1782316,7.09710647 C11.5168271,7.09710647 11.8342605,7.18175536 12.0882071,7.28756647 L13.1674805,4.76926206 C12.4691271,4.32485541 11.601476,4.13439541 10.6280138,4.13439541 C8.40598053,4.13439541 6.09929835,5.29831761 6.09929835,8.38800201 L6.09929835,8.89589533 L4.32167171,8.89589533 L4.32167171,11.9220931 L6.09929835,11.9220931 L6.09929835,19.3500329 L9.95082273,19.3500329 Z M15.9608937,8.15521757 C17.2517893,8.15521757 18.1617648,7.32989091 18.1617648,6.16596871 C18.1617648,4.98088428 17.2517893,4.15555763 15.9608937,4.15555763 C14.6911604,4.15555763 13.7811849,4.98088428 13.7811849,6.16596871 C13.7811849,7.32989091 14.6911604,8.15521757 15.9608937,8.15521757 Z"></path>
        </svg>')
            ->active('fieldset-dev')
            ->route('fieldset-dev.index');
      });

    }

}
