<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Statamic\Facades\Fieldset;
use Statamic\Facades\File;


Route::view('fieldset-dev', 'fieldset-dev::index')->name('fieldset-dev.index');

Route::get('/fieldset-dev/download/{handle}', function ($handle) {
  $handle = str_replace('/', '.', $handle);
  $path = str_replace('.', '/', $handle);
  $directory = Fieldset::directory();

  if (!File::exists($path = "{$directory}/{$path}.yaml")) {
    return null;
  }
  $response = Http::get("/api/fieldsets/download/{$handle}");

  if ($response->status() === 200) {
    File::put(base_path("resources/fieldsets/test-{$handle}.yaml"), File::get($path));
    return response("success", 200)
      ->header('Content-Type', 'text');
  }
  
  return response("failed", 500)
    ->header('Content-Type', 'text');

});