<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\dummyAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('data', [dummyAPI::class, 'getData']);
Route::get('categories/{id?}', [CategoryController::class, 'getData']); // id可有可無的作法
// Route::get('categories/{id}', [CategoryController::class, 'show']);
Route::post('categories', [CategoryController::class, 'create']);
Route::put('categories', [CategoryController::class, 'update']);
Route::get('search/{name?}', [CategoryController::class, 'search']);
Route::delete('deleteCategories/{id}', [CategoryController::class, 'delete']);

Route::post('upload', [FileController::class, 'upload']);
