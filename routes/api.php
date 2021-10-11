<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FieldsetDevPublicAPIController;

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

Route::get('/fieldsets', [FieldsetDevPublicAPIController::class, 'list']);
Route::get('/fieldsets/{handle}', [FieldsetDevPublicAPIController::class, 'show']);

// This route is just pinged to count a download. Otherwise it's identical to /fieldsets/{handle}
// Separated so we can use /fieldsets/{handle} to get the preview YAML without counting a download 
Route::get('/fieldsets/download/{handle}', [FieldsetDevPublicAPIController::class, 'download']);



