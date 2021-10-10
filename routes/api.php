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
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Pagination\Paginator;
use Statamic\Extensions\Pagination\LengthAwarePaginator;


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

Route::get('/fieldsets', function (Request $request) {

  $page = Paginator::resolveCurrentPage();
  $perPage = 8;
  
  $query = Entry::query();
  $query->where('collection', 'fieldsets');
  if ($search = $request->q) {
    $query->where('title', 'like', '%' . $search . '%');
  }
  $query->orderBy('downloads');
  $query->offset($page -1);
  $query->limit($perPage);

  $entries = $query->get(["title", "subtitle", "author", "icon", "color", "installed", "fieldset"])
  ->map(function ($fieldset) {
    $handle = $fieldset->get("fieldset");
    $handle = str_replace('/', '.', $handle);
    $path = str_replace('.', '/', $handle);
    $directory = Fieldset::directory();  

    $color = $fieldset->get("color");
    $fieldset->color = $color["label"];
    $fieldset->installed = (!File::exists($path = "{$directory}/{$path}.yaml"));
    return $fieldset->data();
  });

  return new Paginator(
    $entries,
    $perPage,
    $page,    
    ['path' => Paginator::resolveCurrentPath()]
  );

  // Would like to do this with results
  // filter(function ($value) {
  //   // Filter out any enteries that are not linked to a fieldset.
  //   // Or where the fieldset doesn't exist
  //   return isset($value->data()['fieldset'], Fieldset::all()[$value->data()['fieldset']]); 
  // })

});



Route::get('/fieldsets/{handle}', function ($handle) {
  $handle = str_replace('/', '.', $handle);
  $path = str_replace('.', '/', $handle);
  $directory = Fieldset::directory();

  if (!File::exists($path = "{$directory}/{$path}.yaml")) {
    return null;
  }

  return response(file_get_contents($path), 200)
    ->header('Content-Type', 'text');
});


Route::get('/fieldsets/save/{handle}', function ($handle) {
  $handle = str_replace('/', '.', $handle);
  $path = str_replace('.', '/', $handle);
  $directory = Fieldset::directory();

  if (!File::exists($path = "{$directory}/{$path}.yaml")) {
    return null;
  }

  File::put(base_path("resources/fieldsets/test-{$handle}.yaml"), file_get_contents($path));

});


