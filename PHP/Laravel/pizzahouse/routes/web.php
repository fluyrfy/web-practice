<?php

use App\Http\Controllers\PizzaController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/pizzas', [PizzaController::class, 'index'])->name('pizzas.index')->middleware('auth');
// Route::get('/pizzas/{id}', function ($id) {
//   // return view('details', ['id' => $id]);
// });
Route::get('/pizzas/create', [PizzaController::class, 'create'])->name('pizzas.create'); //注意兩個路由地址的先後順序
Route::post('/pizzas', [PizzaController::class, 'store'])->name('pizzas.store');
Route::get('/pizzas/{id}', [PizzaController::class, 'show'])->name('pizzas.show')->middleware('auth');
Route::delete('/pizzas/{id}', [PizzaController::class, 'destroy'])->name('pizzas.destroy')->middleware('auth');

Auth::routes([
  'register' => false // 禁用註冊路由
]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
