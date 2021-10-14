<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Fieldset;
use Statamic\Facades\File;


Route::view('fieldset-dev', 'fieldset-dev::index')->name('fieldset-dev.index');

Route::get('/fieldset-dev/installed/{handle}', function ($handle) { 
  $file = 'fsdev-'. $handle .'.yaml';
  $directory = Fieldset::directory();  
  $exists = File::exists($file = "{$directory}/{$file}") ? "true" : "false"; 
  return response($exists, 200)
  ->header('Content-Type', 'application/json');
});

Route::get('/fieldset-dev/download/{handle}', function ($handle) {
  $file = 'fsdev-'. $handle .'.yaml';
  $directory = Fieldset::directory();


  if (File::exists("{$directory}/{$file}")) {
    return null;
  }

  $response = Http::get("http://fieldset.test/api/fieldsets/download/{$handle}");


  if ($response->status() === 200) {
    File::put(base_path("resources/fieldsets/{$file}"), $response->body());

    return response("success", 200)
      ->header('Content-Type', 'text');
  }
  
  return response("failed", 500)
    ->header('Content-Type', 'text');

});