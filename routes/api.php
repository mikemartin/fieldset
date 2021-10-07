<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Fieldset;
use Statamic\Facades\File;

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
  return collect(array_values(Fieldset::all()->all()))->map(function ($fieldset) {
    return [
        'handle' => $fieldset->handle(),
        'title' => $fieldset->title()
    ];
  });
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
