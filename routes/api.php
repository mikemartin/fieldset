<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Fieldset;
use Statamic\Facades\File;
use Statamic\Facades\Collection;
use Statamic\Facades\Entry;
use Statamic\Facades\URL;
use Statamic\Support\Str;
use Stringy\StaticStringy;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/fieldsets', function () {
  $entries = Collection::findByHandle('fieldsets')->queryEntries()->get()
  ->filter(function ($value) {
    return isset($value->data()['fieldset'], Fieldset::all()[$value->data()['fieldset']]); 
  })->map(function ($fieldset) {

      $cascade = [
        resource_path('svg'),
        resource_path(),
        public_path('svg'),
        public_path('assets'),
        public_path(),
      ];

      $svg = null;

      foreach ($cascade as $location) {
          $file = Url::assemble($location, $fieldset->data()["icon"]);
          if (File::exists($file)) {
              $svg = StaticStringy::collapseWhitespace(
                  File::get($file)
              );
              break;
          }
      }

        return [
        'handle' => $fieldset->data()["fieldset"],
        'title' => $fieldset->data()["title"],
        'id' => $fieldset->id(),
        'icon' => $svg,
    ];
  })->all();
  return array_values($entries);
});

Route::get('/fieldset/{handle}', function ($handle) {

  $handle = str_replace('/', '.', $handle);
  $path = str_replace('.', '/', $handle);
  $directory = Fieldset::directory();

  if (! File::exists($path = "{$directory}/{$path}.yaml")) {
      return null;
  }

  return response(file_get_contents($path), 200)
              ->header('Content-Type', 'text');

});
